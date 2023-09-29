import { FC, useState } from "react";
import Button from "../../ui/Button";
import ProgressBar from "../../ui/ProgressBar";
import { UserAnswerDto } from "@/interfaces/types";
import { questionnaireData } from "@/data/questionnaire";
import QuestionnaireQuestion from "./QuestionnaireQuestion";

const Questionnaire: FC = () => {
  const [questionnaireState, setQuestionnaireState] = useState<
    "inProgress" | "completed"
  >("inProgress");

  const [userAnswers, setUserAnswers] = useState<UserAnswerDto[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  console.log(userAnswers);

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

  const checkIsDisabled = (): boolean => {
    const check = userAnswers.find(
      (item) => item.questionId == currentQuestion.toString()
    );
    return check && check.selectedAnswers && check.selectedAnswers?.length > 0
      ? false
      : true;
  };

  return (
    <>
      {questionnaireState == "inProgress" ? <></> : null}

      {questionnaireState == "completed" ? <></> : null}
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
          Pytanie {currentQuestion} z {questionnaireData.questionsArray.length}
        </span>

        <QuestionnaireQuestion
          data={questionnaireData.questionsArray[currentQuestion - 1]}
          userAnswer={userAnswers.find(
            (item) => item.questionId == currentQuestion.toString()
          )}
          setUserAnswers={handleAnswer}
        />

        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 mt-16 justify-center">
          {currentQuestion == 1 ? null : (
            <Button
              onClick={() => {
                if (currentQuestion > 1) {
                  setCurrentQuestion((prev) => prev - 1);
                }
              }}
              variant="sky"
              className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
              style={{
                boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
              }}
            >
              Poprzednie pytanie
            </Button>
          )}

          {currentQuestion == questionnaireData.questionsArray.length ? (
            <Button
              disabled={checkIsDisabled()}
              variant="orange"
              className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
              style={{
                boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
              }}
            >
              Wyślij formularz
            </Button>
          ) : (
            <Button
              onClick={() => {
                if (currentQuestion < questionnaireData.questionsArray.length) {
                  setCurrentQuestion((prev) => prev + 1);
                }
              }}
              disabled={checkIsDisabled()}
              variant="orange"
              className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
              style={{
                boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
              }}
            >
              Następne pytanie
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
