import Checkbox from "@/components/ui/Checkbox";
import { QuestionDto, UserAnswerDto } from "@/interfaces/types";
import { ChangeEvent, FC } from "react";

export type Props = {
  data: QuestionDto;
  setUserAnswers: (answer: UserAnswerDto) => void;
  userAnswer: UserAnswerDto | undefined;
};

const QuestionnaireQuestion: FC<Props> = ({ data, setUserAnswers, userAnswer }) => {
  const questionTitle = () => {
    if (data.isMultiSelect) {
      return "Wybierz odpowiedzi:";
    } else if (data.contactForm) {
      return "Wpisz swoje dane kontaktowe:";
    } else {
      return "Wybierz jedną odpowiedź:";
    }
  };

  console.log("UserAnswers:", userAnswer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, answerId: string) => {
    if (e.currentTarget.checked) {
      setUserAnswers({
        questionId: data.id,
        selectedAnswers: userAnswer && userAnswer.selectedAnswers ? [...userAnswer.selectedAnswers, answerId] : [answerId],
      });
    } else {
      const filterAnswers = userAnswer && userAnswer.selectedAnswers && userAnswer.selectedAnswers.filter((item) => item != answerId);
      setUserAnswers({ questionId: data.id, selectedAnswers: filterAnswers });
    }
  };

  return (
    <>
      <h2 className="mt-2 text-sm sm:text-base md:text-lg ">{data.question}</h2>
      <div className="bg-sky-800 p-3 sm:p-5 mt-8 rounded-md text-center sm:text-left">
        <span className="text-xs sm:text-sm md:text-base">
          {/* {data.isMultiSelect ? (
           " Wybierz odpowiedzi:"
          ) : (
            "Wybierz jedną odpowiedź:"
          )} */}
          {questionTitle()}
        </span>
      </div>

      {data.answers.map((item) => (
        <div className="py-8 px-4 border-b border-sky-800 text-xs sm:text-sm md:text-base" key={item.id}>
          {item.label ? (
            <div className=" space-y-5">
              <span>{item.label}</span>
              <textarea placeholder="Wpisz swoją odpowiedź" className="bg-sky-800 w-full focus:ring-0 focus:outline-none focus:ring-offset-0" />
            </div>
          ) : (
            <Checkbox label={item.answer} onChange={(e) => handleChange(e, item.id)} defaultChecked={false} />
          )}
        </div>
      ))}
    </>
  );
};

export default QuestionnaireQuestion;
