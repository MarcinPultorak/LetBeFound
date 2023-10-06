import Checkbox from "@/components/ui/Checkbox";
import { AnswerDto, QuestionDto, UserAnswerDto } from "@/interfaces/types";
import { ChangeEvent, FC, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

export type Props = {
  data: QuestionDto;
  questionsAmount: number;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  userAnswer: UserAnswerDto | undefined;
  setUserAnswers: (answer: UserAnswerDto) => void;
};

const QuestionnaireQuestion: FC<Props> = ({
  data,
  questionsAmount,
  currentQuestion,
  setCurrentQuestion,
  userAnswer,
  setUserAnswers,
}) => {
  const [answers, setAnswers] = useState<UserAnswerDto | undefined>(undefined);

  useEffect(() => {
    setAnswers(userAnswer);
  }, [currentQuestion]);

  const questionTitle = () => {
    if (data.isMultiSelect) {
      return "Wybierz odpowiedzi:";
    } else if (data.contactForm) {
      return "Wpisz swoje dane kontaktowe:";
    } else {
      return "Wybierz jedną odpowiedź:";
    }
  };

  const inputType = (item: AnswerDto) => {
    switch (item.type) {
      case "textarea": {
        return (
          <label className="w-full">
            <span>{item.label}</span>
            <textarea
              value={answers?.textAnswer || ""}
              onChange={(e) =>
                setAnswers({
                  questionId: answers?.questionId || data.id,
                  selectedAnswers:
                    answers?.selectedAnswers?.length == 0
                      ? []
                      : answers?.selectedAnswers,
                  textAnswer: e.target.value,
                })
              }
              placeholder="Wpisz swoją odpowiedź"
              className="bg-sky-800 mt-2 w-full focus:ring-0 focus:outline-none focus:ring-offset-0 placeholder-white/50"
            />
          </label>
        );
      }
      case "checkbox": {
        return (
          <Checkbox
            label={item.answer}
            checked={answers?.selectedAnswers?.includes(item.id) || false}
            onChange={(e) => handleChange(e, item.id)}
          />
        );
      }
      default:
        return null;
    }
  };

  const checkIsDisabled = (): boolean => {
    return (answers &&
      answers.selectedAnswers &&
      answers.selectedAnswers?.length > 0) ||
      (answers?.textAnswer && answers.textAnswer.length > 0)
      ? false
      : true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, answerId: string) => {
    if (data.isMultiSelect) {
      if (e.currentTarget.checked) {
        setAnswers({
          questionId: data.id,
          selectedAnswers:
            answers && answers.selectedAnswers
              ? [...answers.selectedAnswers, answerId]
              : [answerId],
          textAnswer: answers?.textAnswer,
        });
      } else {
        const filterAnswers =
          answers &&
          answers.selectedAnswers &&
          answers.selectedAnswers.filter((item) => item != answerId);
        setAnswers({ questionId: data.id, selectedAnswers: filterAnswers });
      }
    } else {
      if (e.currentTarget.checked) {
        setAnswers({
          questionId: data.id,
          selectedAnswers: [answerId],
          textAnswer: answers?.textAnswer,
        });
      } else {
        setAnswers({
          questionId: data.id,
          selectedAnswers: [],
          textAnswer: answers?.textAnswer,
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (answers) {
      setUserAnswers(answers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers({ questionId: data.id, selectedAnswers: [], textAnswer: "" });
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  console.log(currentQuestion);
  return (
    <>
      <h2 className="mt-2 text-sm sm:text-base md:text-lg ">{data.question}</h2>
      <div className="bg-sky-800 p-3 sm:p-5 mt-8 rounded-md text-center sm:text-left">
        <span className="text-xs sm:text-sm md:text-base">
          {questionTitle()}
        </span>
      </div>

      {data.answers.map((item) => (
        <div
          className="py-8 border-b border-sky-800 text-xs sm:text-sm md:text-base flex items-center"
          key={item.id}
        >
          {inputType(item)}
          {item.tooltip ? (
            <div
              className="ml-4"
              data-tooltip-id={item.id}
              data-tooltip-content={item.tooltip}
            >
              <Image
                src={"/images/tooltip-icon.svg"}
                alt="tooltip icon"
                width={18}
                height={18}
              />
              <Tooltip id={item.id} />
            </div>
          ) : null}
        </div>
      ))}

      <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 mt-16 justify-center">
        {currentQuestion == 1 ? null : (
          <Button
            onClick={() => {
              if (currentQuestion > 1) {
                setCurrentQuestion(currentQuestion - 1);
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

        <Button
          onClick={handleNextQuestion}
          disabled={
            currentQuestion == 6 || currentQuestion == 3
              ? false
              : checkIsDisabled()
          }
          variant="orange"
          className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
          style={{
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
          }}
        >
          Następne pytanie
        </Button>
      </div>
    </>
  );
};

export default QuestionnaireQuestion;
