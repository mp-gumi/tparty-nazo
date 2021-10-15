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
      <div className={styles.wrapper} style={{ height: windowHeight }}>
        {"～LAST～"}
        <div>
          <img alt="Q7" className={styles.image} src={tparty7} />
        </div>
        <div className={styles.formWrapper}>
          <Form onSubmit={onSubmit} />
        </div>
      </div>
      <QuestionSwiper />
    </div>
  );
}

export default Last;
