import styles from "./style.module.css";
import tparty1 from "./images/tparty_1_mini.png";
import tparty2 from "./images/tparty_2_mini.png";
import tparty3 from "./images/tparty_3_mini.png";
import tparty4 from "./images/tparty_4_mini.png";
import tparty5 from "./images/tparty_5_mini.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useMemo } from "react";

function QuestionSwiper(): JSX.Element {
  const items = useMemo(
    () =>
      [
        { questionId: "q1", src: tparty1 },
        { questionId: "q2", src: tparty2 },
        { questionId: "q3", src: tparty3 },
        { questionId: "q4", src: tparty4 },
        { questionId: "q5", src: tparty5 },
      ].map(({ questionId, src }) => (
        <SwiperSlide key={questionId}>
          <img alt={questionId} className={styles.pastImage} src={src} />
        </SwiperSlide>
      )),
    []
  );

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3} centeredSlides>
        {items}
      </Swiper>
    </div>
  );
}

export default QuestionSwiper;
