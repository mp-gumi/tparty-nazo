import React from "react";
import styles from "./style.module.css";
import correct from "./images/mark_maru.png";

type PopUpProps = {
  onClick: () => void;
  answerImage: string | undefined;
};

function PopUp({ onClick, answerImage }: PopUpProps) {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div>
          <img alt="正解" className={styles.correct} src={correct} />
        </div>
        <div className={styles.imageWrapper}>
          <img alt="answer" className={styles.answer} src={answerImage} />
        </div>
        <div>
          <button className={styles.next} onClick={onClick}>
            {"次の問題へ >>"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
