import { FC, useState } from "react";
import ProgressBar from "../../ui/ProgressBar";
import { UserAnswerDto } from "@/interfaces/types";
import { questionnaireData } from "@/data/questionnaire";
import QuestionnaireQuestion from "./QuestionnaireQuestion";
import UserMessage from "./UserMessage";

const Questionnaire: FC = () => {
  const [questionnaireState, setQuestionnaireState] = useState<
    "inProgress" | "completed"
  >("inProgress");

  const [userAnswers, setUserAnswers] = useState<UserAnswerDto[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const handleAnswer = (answer: UserAnswerDto) => {
    const checkAnswers = userAnswers.find(
      (item) => item.questionId == answer.questionId
    );
    if (checkAnswers) {
      const updatedAnswers = userAnswers.map((item) =>
        item.questionId != answer.questionId ? item : answer
      );
      setUserAnswers(updatedAnswers);
    } else {
      setUserAnswers([...userAnswers, answer]);
    }
  };

  return (
    <>
      {questionnaireState == "inProgress" ? (
        <div
          className="bg-sky-800 bg-opacity-20 px-5 sm:px-10 pt-5 pb-16 mt-10 sm:mt-16 rounded-md relative overflow-hidden "
          style={{
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <ProgressBar
            questionsAmount={questionnaireData.questionsArray.length}
            currentQuestion={currentQuestion}
          />

          <span className="text-xs ">
            Pytanie {currentQuestion} z{" "}
            {questionnaireData.questionsArray.length}
          </span>

          <QuestionnaireQuestion
            data={questionnaireData.questionsArray[currentQuestion - 1]}
            questionsAmount={questionnaireData.questionsArray.length}
            currentQuestion={currentQuestion}
            setCurrentQuestion={(v) => setCurrentQuestion(v)}
            userAnswer={userAnswers.find(
              (item) => item.questionId == currentQuestion.toString()
            )}
            setUserAnswers={handleAnswer}
          />
        </div>
      ) : null}

      {questionnaireState == "completed" ? <UserMessage /> : null}
    </>
  );
};

export default Questionnaire;
