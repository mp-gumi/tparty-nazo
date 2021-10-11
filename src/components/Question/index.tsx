import React, { useEffect, useMemo } from "react";
import styles from "./style.module.css";
import Form, { FormProps } from "components/Form";
import ScrollBar, { ScrollBarProps } from "components/ScrollBar";
import { animateScroll as scroll, Element } from "react-scroll";
import useWindowSize from "hooks/useWindowSize";

type QuestionType = {
  color: ScrollBarProps["questions"][0]["color"];
  image: string;
  name: ScrollBarProps["questions"][0]["name"];
};

export type QuestionProps = Pick<FormProps, "onSubmit"> & {
  questions: QuestionType[];
};

function Question({ onSubmit, questions }: QuestionProps): JSX.Element {
  const { windowHeight } = useWindowSize();
  const items = useMemo(
    () =>
      questions.map(({ image, name }, index) => (
        <Element key={image} name={name}>
          <div className={styles.wrapper} style={{ height: windowHeight }}>
            {`～Q${index + 1}～`}
            <img alt={index.toString()} className={styles.image} src={image} />
            {name !== "sixth" ? (
              <Form onSubmit={onSubmit} />
            ) : (
              <div className={styles.dummy} />
            )}
          </div>
        </Element>
      )),
    [onSubmit, questions, windowHeight]
  );

  useEffect(() => {
    scroll.scrollToBottom();
  }, [items.length]);

  return (
    <div>
      <div className={styles.scrollBarLeft}>
        <ScrollBar questions={questions} />
      </div>
      <div className={styles.scrollBarRight}>
        <ScrollBar questions={questions} />
      </div>
      {items}
    </div>
  );
}

export default Question;
