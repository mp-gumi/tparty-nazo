import React from "react";
import styles from "./style.module.css";
import { Link } from "react-scroll";

type ScrollBarProps = {
  answerList: boolean[];
};

function ScrollBar({ answerList }: ScrollBarProps) {
  return (
    <div className={styles.bar}>
      <Link
        activeClass="active"
        className={styles.gridFlame}
        to="first"
        smooth={true}
        duration={500}
        spy={true}
      >
        <div className={styles.yellow} />
      </Link>

      {answerList[0] ? (
        <Link
          activeClass="active"
          className={styles.gridFlame}
          to="second"
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles.green} />
        </Link>
      ) : null}
      {answerList[1] ? (
        <Link
          activeClass="active"
          className={styles.gridFlame}
          to="third"
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles.orange} />
        </Link>
      ) : null}
      {answerList[2] ? (
        <Link
          className={styles.gridFlame}
          to="fourth"
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles.red} />
        </Link>
      ) : null}
      {answerList[3] ? (
        <Link
          className={styles.gridFlame}
          to="fifth"
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles.blue} />
        </Link>
      ) : null}
      {answerList[4] ? (
        <Link
          className={styles.gridFlame}
          to="sixth"
          smooth={true}
          duration={500}
          spy={true}
        >
          <div className={styles.black} />
        </Link>
      ) : null}
    </div>
  );
}

export default ScrollBar;
