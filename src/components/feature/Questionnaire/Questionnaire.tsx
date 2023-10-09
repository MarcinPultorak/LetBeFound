import { FC, useState } from "react";
import ProgressBar from "../../ui/ProgressBar";
import { QuesionnaireFormDto, UserAnswerDto } from "@/interfaces/types";
import { questionnaireData } from "@/data/questionnaire";
import QuestionnaireQuestion from "./QuestionnaireQuestion";
import UserMessage from "./UserMessage";
import QuestionnaireForm from "./QuestionnaireForm";
import { useAppContext } from "@/providers/AppContextProvider";
import { renderToStaticMarkup } from "react-dom/server";

const Questionnaire: FC = () => {
  const { errorReceived } = useAppContext();
  const [questionnaireState, setQuestionnaireState] = useState<"inProgress" | "finishing" | "completed">("inProgress");

  const [userAnswers, setUserAnswers] = useState<UserAnswerDto[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const handleAnswer = (answer: UserAnswerDto) => {
    const checkAnswers = userAnswers.find((item) => item.questionId == answer.questionId);
    if (checkAnswers) {
      const updatedAnswers = userAnswers.map((item) => (item.questionId != answer.questionId ? item : answer));
      setUserAnswers(updatedAnswers);
    } else {
      setUserAnswers([...userAnswers, answer]);
    }
  };

  const handleContactForm = async (payload: QuesionnaireFormDto): Promise<void> => {
    const traspiledData = userAnswers.map((item) => {
      return (
        <div key={item.questionId}>
          <p>
            <span style={{ fontWeight: "bold" }}>Pytanie nr: </span>
            <span>{item.questionId}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Odpowiedzi checkbox: </span>
            {item.selectedAnswers?.map((answer, i) => {
              return <span key={i}>{i + 1 == item.selectedAnswers?.length ? answer : `${answer}, `}</span>;
            })}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Odpowiedzi textArea: </span>
            <span>{item.textAnswer}</span>
          </p>
        </div>
      );
    });

    const completedAnswers = traspiledData.map((item) => {
      return renderToStaticMarkup(item);
    });

    await fetch("/api/questionnaire", {
      body: JSON.stringify({
        email: payload.email,
        fullname: payload.name,
        phone: payload.phone,
        answers: completedAnswers,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      if (res.status == 200) {
        setQuestionnaireState("completed");
        return Promise.resolve();
      } else {
        errorReceived("Wystąpił błąd podczas próby wysłania formularza. Spróbuj ponownie!");
        return Promise.reject();
      }
    });
  };

  return (
    <>
      {questionnaireState == "inProgress" || questionnaireState == "finishing" ? (
        <div
          className="bg-sky-800 bg-opacity-20 px-5 sm:px-10 pt-5 pb-16 mt-10 sm:mt-16 rounded-md relative overflow-hidden "
          style={{
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {questionnaireState == "inProgress" ? (
            <>
              <ProgressBar questionsAmount={questionnaireData.length} currentQuestion={currentQuestion} />

              <span className="text-xs ">
                Pytanie {currentQuestion} z {questionnaireData.length}
              </span>

              <QuestionnaireQuestion
                data={questionnaireData[currentQuestion - 1]}
                currentQuestion={currentQuestion}
                setCurrentQuestion={(v) => {
                  if (v > questionnaireData.length) {
                    setQuestionnaireState("finishing");
                  }
                  setCurrentQuestion(v);
                }}
                userAnswer={userAnswers.find((item) => item.questionId == currentQuestion.toString())}
                setUserAnswers={handleAnswer}
              />
            </>
          ) : null}

          {questionnaireState == "finishing" ? (
            <>
              <span className="text-xs sm:text-sm md:text-base">Wpisz dane kontaktowe:</span>
              <QuestionnaireForm
                currentQuestion={currentQuestion}
                setCurrentQuestion={(v) => {
                  if (v == questionnaireData.length) {
                    setQuestionnaireState("inProgress");
                  }
                  setCurrentQuestion(v);
                }}
                callback={handleContactForm}
              />
            </>
          ) : null}
        </div>
      ) : null}

      {questionnaireState == "completed" ? <UserMessage /> : null}
    </>
  );
};

export default Questionnaire;
