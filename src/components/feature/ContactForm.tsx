import { FC, useState } from "react";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import FormTextarea from "../ui/FormTextarea";
import { ContactFormDto } from "@/interfaces/types";
import { validateEmail, validateRequired } from "@/utils/validators";

type Props = {
  callback: (payload: ContactFormDto) => Promise<void>;
};

const ContactForm: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDto>();

  const _submit = (payload: ContactFormDto) => {
    setIsLoading(true);
    props
      .callback(payload)
      .then(() => {
        reset();
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(_submit)}
      className=" mx-auto rounded-xl py-10 md:py-20 px-5 sm:px-10 mt-16 border border-zinc-600"
      style={{
        backgroundColor: "rgba(7, 11, 22, 0.80)",
      }}
    >
      <fieldset className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-5">
        <div>
          <FormInput
            {...register("name", {
              ...validateRequired(),
            })}
            label="Imię"
            maxLength={50}
            required
            errorMessage={errors.name?.message}
          />
        </div>
        <div>
          <FormInput
            {...register("email", {
              ...validateRequired(),
              ...validateEmail(),
            })}
            label="Email"
            maxLength={50}
            required
            errorMessage={errors.email?.message}
          />
        </div>
      </fieldset>
      <fieldset className="mt-8 space-y-8">
        <div>
          <FormInput
            {...register("topic", {
              ...validateRequired(),
            })}
            label="Temat"
            maxLength={50}
            required
            errorMessage={errors.topic?.message}
          />
        </div>
        <div>
          <FormTextarea
            {...register("message", {
              ...validateRequired(),
            })}
            label="Wiadomość"
            maxLength={500}
            required
            rows={8}
            errorMessage={errors.message?.message}
          />
        </div>
      </fieldset>
      <div className="mt-10 md:max-w-xs mx-auto">
        <Button
          isSubmitting={isLoading}
          title="Wyślij wiadomość"
          style={{
            boxShadow: "20px 20px 20px 0px rgba(0, 0, 0, 0.30)",
          }}
          type={"submit"}
        >
          Wyślij wiadomość
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
