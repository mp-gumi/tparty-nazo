import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";

type FormProps = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  correctAnswer: string;
  answerList: boolean[];
  setAnswerList: Dispatch<SetStateAction<boolean[]>>;
  order: number;
  isPopUp: boolean;
  setIsPopUp: Dispatch<SetStateAction<boolean>>;
};

function Form({
  state,
  setState,
  correctAnswer,
  answerList,
  setAnswerList,
  order,
  isPopUp,
  setIsPopUp,
}: FormProps): JSX.Element {
  const handleClick = () => {
    if (state.trim() === correctAnswer) {
      setAnswerList([...answerList, true]);
      setIsPopUp(!isPopUp);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="解答を入力してください"
        onChange={handleChange}
        value={state}
      />
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={answerList[order - 1]}
      >
        チェック！
      </button>
    </div>
  );
}

export default Form;
