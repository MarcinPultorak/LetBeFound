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
      <fieldset>
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
            errorMessage={errors.email?.message}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <FormInput {...register("topic")} label="Temat" />
        </div>
        <div>
          <FormTextarea {...register("message")} label="Wiadomość" rows={6} />
        </div>
      </fieldset>
      <div>
        <Button type={"submit"}>Wyślij wiadomość</Button>
      </div>
    </form>
  );
};

export default ContactForm;
