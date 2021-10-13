import styles from "./style.module.css";
import tparty7 from "./images/tparty_7.png";
import useWindowSize from "hooks/useWindowSize";
import Form, { FormProps } from "components/Form";
import QuestionSwiper from "components/QuestionSwiper";

export type LastProps = Pick<FormProps, "onSubmit"> & {
  answer: string;
};

function Last({ onSubmit, answer }: LastProps): JSX.Element {
  const { windowHeight } = useWindowSize();

  return (
    <div>
      <div style={{ height: windowHeight }}>
        <div className={styles.frame}>
          {"～LAST～"}
          <img alt="Q7" className={styles.image} src={tparty7} />
        </div>
        <Form onSubmit={onSubmit} />
      </div>
      <QuestionSwiper />
    </div>
  );
}

export default Last;
