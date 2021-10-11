import React from "react";
import styles from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type FieldValues = {
  answer: string;
};

export type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
};

function Form({ onSubmit }: FormProps): JSX.Element {
  const { register, handleSubmit } = useForm<FieldValues>();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        placeholder="解答を入力してください"
        {...register("answer", { required: true })}
      />
      <button className={styles.button} type="submit">
        チェック
      </button>
    </form>
  );
}

export default Form;
