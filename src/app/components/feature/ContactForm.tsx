"use client";
import { FC } from "react";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import FormTextarea from "../ui/FormTextarea";
import { validateEmail, validateRequired } from "@/app/utils/validators";

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const _submit = (payload: any) => {};

  return (
    <form
      noValidate
      onSubmit={handleSubmit(_submit)}
      className="max-w-screen-md mx-auto"
    >
      <fieldset className="grid grid-cols-2 gap-5">
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
      <fieldset>
        <div className="mt-8">
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
        <div className="mt-8">
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
      <div className="mt-8 max-w-xs mx-auto">
        <Button
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
