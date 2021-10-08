import QuestionComponent, { QuestionProps } from "components/Question";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { parse } from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import PopUp from "components/PopUp";
import tparty1 from "./images/tparty_1.png";
import tparty2 from "./images/tparty_2.png";
import tparty3 from "./images/tparty_3.png";
import tparty4 from "./images/tparty_4.png";
import tparty5 from "./images/tparty_5.png";
import tparty6 from "./images/tparty_6.png";
import answer1 from "./images/tparty_1_answer.png";
import answer2 from "./images/tparty_2_answer.png";
import answer3 from "./images/tparty_3_answer.png";
import answer4 from "./images/tparty_4_answer.png";
import answer5 from "./images/tparty_5_answer.png";

function Question(): JSX.Element {
  const { search } = useLocation();
  const pages = useMemo(() => {
    const { pages } = parse(search);

    return typeof pages === "string" ? parseInt(pages, 10) : 1;
  }, [search]);
  const [showPopUp, setShowPopUp] = useState(false);
  const history = useHistory();
  const questions = useMemo(
    () => [
      {
        answer: "local",
        answerImage: answer1,
        color: "yellow",
        image: tparty1,
        name: "first",
      },
      {
        answer: "host",
        answerImage: answer2,
        color: "green",
        image: tparty2,
        name: "second",
      },
      {
        answer: "コロン",
        answerImage: answer3,
        color: "orange",
        image: tparty3,
        name: "third",
      },
      {
        answer: "3000",
        answerImage: answer4,
        color: "red",
        image: tparty4,
        name: "fourth",
      },
      {
        answer: "last",
        answerImage: answer5,
        color: "blue",
        image: tparty5,
        name: "fifth",
      },
      {
        image: tparty6,
        color: "black",
        name: "sixth",
      },
    ],
    []
  );
  const { answer, answerImage } = useMemo(
    () => questions[pages - 1],
    [pages, questions]
  );
  const handleSubmit = useCallback<QuestionProps["onSubmit"]>(
    ({ answer: userAnswer }) => {
      if (answer !== userAnswer) {
        // TODO
        return;
      }

      setShowPopUp(true);
    },
    [answer]
  );
  const handleNext = useCallback(() => {
    setShowPopUp(false);

    history.push(`/question?pages=${pages + 1}`);
  }, [history, pages]);
  const portal = useMemo(() => {
    const container = document.getElementById("root");

    return container && showPopUp
      ? createPortal(
          <PopUp onClick={handleNext} answerImage={answerImage} />,
          container
        )
      : null;
  }, [answerImage, handleNext, showPopUp]);
  const currentQuestions = useMemo(
    () =>
      questions
        .filter((_, index) => index < pages)
        .map(({ color, image, name }) => ({ color, image, name })),
    [pages, questions]
  );

  useEffect(() => {
    window.document.title = "梅昆布茶会オンライン謎解き｜問題";
  }, []);

  return (
    <>
      <QuestionComponent onSubmit={handleSubmit} questions={currentQuestions} />
      {portal}
    </>
  );
}

export default Question;
