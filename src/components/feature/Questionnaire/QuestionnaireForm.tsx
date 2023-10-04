import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { QuesionnaireFormDto } from "@/interfaces/types";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateRequired,
  validatePhone,
} from "@/utils/validators";

export type Props = {
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  callback: (payload: QuesionnaireFormDto) => Promise<void>;
};

const QuestionnaireForm: FC<Props> = ({
  currentQuestion,
  setCurrentQuestion,
  callback,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuesionnaireFormDto>();

  const _submit = (payload: QuesionnaireFormDto) => {
    setIsLoading(true);
    callback(payload);
  };

  return (
    <form noValidate onSubmit={handleSubmit(_submit)}>
      <fieldset>
        <div className="py-8 border-b border-sky-800 text-xs sm:text-sm md:text-base">
          <FormInput
            {...register("name", {
              ...validateRequired(),
            })}
            variant="secondary"
            label="Imię"
            required
            maxLength={50}
            errorMessage={errors.name?.message}
          />
        </div>
        <div className="py-8 border-b border-sky-800 text-xs sm:text-sm md:text-base">
          <FormInput
            {...register("phone", {
              ...validatePhone(),
            })}
            variant="secondary"
            label="Telefon kontaktowy"
            maxLength={50}
            errorMessage={errors.phone?.message}
          />
        </div>
        <div className="py-8 border-b border-sky-800 text-xs sm:text-sm md:text-base">
          <FormInput
            {...register("email", {
              ...validateRequired(),
              ...validateEmail(),
            })}
            variant="secondary"
            label="Adres email"
            required
            maxLength={50}
            errorMessage={errors.email?.message}
          />
        </div>
      </fieldset>
      <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 mt-16 justify-center">
        <Button
          type={"button"}
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

        <Button
          type={"submit"}
          isSubmitting={isLoading}
          variant="orange"
          className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
          style={{
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
          }}
        >
          Wyślij formularz
        </Button>
      </div>
    </form>
  );
};

export default QuestionnaireForm;
