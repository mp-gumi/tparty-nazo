import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import { Link } from "react-scroll";
import correct from "./images/mark_maru.png";
import ans1 from "./images/tparty_1_answer.png";
import ans2 from "./images/tparty_2_answer.png";
import ans3 from "./images/tparty_3_answer.png";
import ans4 from "./images/tparty_4_answer.png";
import ans5 from "./images/tparty_5_answer.png";

type PopUpProps = {
  isPopUp: boolean;
  setIsPopUp: Dispatch<SetStateAction<boolean>>;
  answerList: boolean[];
};

function PopUp({ isPopUp, setIsPopUp, answerList }: PopUpProps) {
  const order =
    answerList.length === 1
      ? "second"
      : answerList.length === 2
      ? "third"
      : answerList.length === 3
      ? "fourth"
      : answerList.length === 4
      ? "fifth"
      : answerList.length === 5
      ? "sixth"
      : "";

  const image =
    answerList.length === 1
      ? ans1
      : answerList.length === 2
      ? ans2
      : answerList.length === 3
      ? ans3
      : answerList.length === 4
      ? ans4
      : answerList.length === 5
      ? ans5
      : "";

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <img alt="正解" className={styles.confirm} src={correct} />
        <img alt="answer" className={styles.answer} src={image} />
        <Link
          activeClass="active"
          className={styles.gridFlame}
          to={order}
          smooth={true}
          duration={500}
          spy={true}
        >
          <button className={styles.next} onClick={() => setIsPopUp(!isPopUp)}>
            {"次の問題へ >>"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopUp;
