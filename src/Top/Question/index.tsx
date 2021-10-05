import React, { useState } from "react";
import styles from "./style.module.css";
import tparty1 from "./images/tparty_1.png";
import tparty2 from "./images/tparty_2.png";
import tparty3 from "./images/tparty_3.png";
import tparty4 from "./images/tparty_4.png";
import tparty5 from "./images/tparty_5.png";
import tparty6 from "./images/tparty_6.png";
import Form from "./Form";
import PopUp from "./PopUp";
import ScrollBar from "./ScrollBar";
import { Element } from "react-scroll";

function Question(): JSX.Element {
  document.title = "梅昆布茶会オンライン謎解き｜問題";
  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [thirdAnswer, setThirdAnswer] = useState("");
  const [fourthAnswer, setFourthAnswer] = useState("");
  const [fifthAnswer, setFifthAnswer] = useState("");
  const [answerList, setAnswerList] = useState<boolean[]>([]);
  const [isPouUp, setIsPopUp] = useState<boolean>(false);
  return (
    <div>
      {isPouUp ? (
        <PopUp
          isPopUp={isPouUp}
          setIsPopUp={setIsPopUp}
          answerList={answerList}
        />
      ) : null}
      <div className={styles.scrollBarLeft}>
        <ScrollBar answerList={answerList} />
      </div>
      <div className={styles.scrollBarRight}>
        <ScrollBar answerList={answerList} />
      </div>
      <Element name="first">
        <div className={styles.flameWithNoPadding}>
          {"～Q１～"}
          <img alt="" className={styles.image} src={tparty1} />
          <Form
            state={firstAnswer}
            setState={setFirstAnswer}
            correctAnswer="local"
            answerList={answerList}
            setAnswerList={setAnswerList}
            order={1}
            isPopUp={isPouUp}
            setIsPopUp={setIsPopUp}
          />
        </div>
      </Element>
      {answerList[0] ? (
        <Element name="second">
          <div className={styles.flameWithPadding}>
            {"～Q２～"}
            <img alt="" className={styles.image} src={tparty2} />
            <Form
              state={secondAnswer}
              setState={setSecondAnswer}
              correctAnswer="host"
              answerList={answerList}
              setAnswerList={setAnswerList}
              order={2}
              isPopUp={isPouUp}
              setIsPopUp={setIsPopUp}
            />
          </div>
        </Element>
      ) : null}
      {answerList[1] ? (
        <Element name="third">
          <div className={styles.flameWithPadding}>
            {"～Q３～"}
            <img alt="" className={styles.image} src={tparty3} />
            <Form
              state={thirdAnswer}
              setState={setThirdAnswer}
              correctAnswer="コロン"
              answerList={answerList}
              setAnswerList={setAnswerList}
              order={3}
              isPopUp={isPouUp}
              setIsPopUp={setIsPopUp}
            />
          </div>
        </Element>
      ) : null}
      {answerList[2] ? (
        <Element name="fourth">
          <div className={styles.flameWithPadding}>
            {"～Q４～"}
            <img alt="" className={styles.image} src={tparty4} />
            <Form
              state={fourthAnswer}
              setState={setFourthAnswer}
              correctAnswer="3000"
              answerList={answerList}
              setAnswerList={setAnswerList}
              order={4}
              isPopUp={isPouUp}
              setIsPopUp={setIsPopUp}
            />
          </div>
        </Element>
      ) : null}
      {answerList[3] ? (
        <Element name="fifth">
          <div className={styles.flameWithPadding}>
            {"～Q５～"}
            <img alt="" className={styles.image} src={tparty5} />
            <Form
              state={fifthAnswer}
              setState={setFifthAnswer}
              correctAnswer="last"
              answerList={answerList}
              setAnswerList={setAnswerList}
              order={5}
              isPopUp={isPouUp}
              setIsPopUp={setIsPopUp}
            />
          </div>
        </Element>
      ) : null}
      {answerList[4] ? (
        <Element name="sixth">
          <div className={styles.flameWithPaddingBottom}>
            {"～NEXT～"}
            <img alt="" className={styles.image} src={tparty6} />
          </div>
        </Element>
      ) : null}
    </div>
  );
}

export default Question;
