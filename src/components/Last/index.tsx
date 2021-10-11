import styles from "./style.module.css";
import tparty1 from "./images/tparty_1_mini.png";
import tparty2 from "./images/tparty_2_mini.png";
import tparty3 from "./images/tparty_3_mini.png";
import tparty4 from "./images/tparty_4_mini.png";
import tparty5 from "./images/tparty_5_mini.png";
import tparty7 from "./images/tparty_7.png";
import useWindowSize from "hooks/useWindowSize";
import Form, { FormProps } from "components/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
      <Swiper spaceBetween={50} slidesPerView={3} centeredSlides>
        <SwiperSlide>
          <img alt="1" className={styles.pastImage} src={tparty1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="2" className={styles.pastImage} src={tparty2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="3" className={styles.pastImage} src={tparty3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="4" className={styles.pastImage} src={tparty4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="5" className={styles.pastImage} src={tparty5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Last;
