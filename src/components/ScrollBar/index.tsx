import React, { useMemo } from "react";
import styles from "./style.module.css";
import { Link } from "react-scroll";
import useWindowSize from "hooks/useWindowSize";

type Question = {
  color: string;
  name: string;
};

export type ScrollBarProps = {
  questions: Question[];
};

function ScrollBar({ questions }: ScrollBarProps) {
  const { windowHeight } = useWindowSize();

  const items = useMemo(
    () =>
      questions.map(({ color, name }) => (
        <Link
          activeClass="active"
          to={name}
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles[color]} />
        </Link>
      )),
    [questions]
  );

  return (
    <div className={styles.bar} style={{ height: windowHeight }}>
      {items}
    </div>
  );
}

export default ScrollBar;
