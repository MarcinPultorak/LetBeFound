import Checkbox from "@/components/ui/Checkbox";
import { QuestionDto } from "@/interfaces/types";
import { FC } from "react";

export type Props = {
  data: QuestionDto;
};

const QuestionnaireQuestion: FC<Props> = ({ data }) => {
  const questionTitle = () => {
    if (data.isMultiSelect) {
      return "Wybierz odpowiedzi:";
    } else if (data.contactForm) {
      return "Wpisz swoje dane kontaktowe:";
    } else {
      return "Wybierz jedną odpowiedź:";
    }
  };

  return (
    <>
      <span className="text-xs ">Pytanie {data.id} z 7</span>
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
        <div
          className="py-8 px-4 border-b border-sky-800 text-xs sm:text-sm md:text-base"
          key={item.id}
        >
          {item.label ? (
            <div className=" space-y-5">
              <span>{item.label}</span>
              <textarea
                placeholder="Wpisz swoją odpowiedź"
                className="bg-sky-800 w-full focus:ring-0 focus:outline-none focus:ring-offset-0"
              />
            </div>
          ) : (
            <Checkbox label={item.answer} />
          )}
        </div>
      ))}
    </>
  );
};

export default QuestionnaireQuestion;
