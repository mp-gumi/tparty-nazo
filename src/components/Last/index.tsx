import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
// import tparty1 from "./images/tparty_1_mini.png";
// import tparty2 from "./images/tparty_2_mini.png";
// import tparty3 from "./images/tparty_3_mini.png";
// import tparty4 from "./images/tparty_4_mini.png";
// import tparty5 from "./images/tparty_5_mini.png";
import tparty7 from "./images/tparty_7.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";

function Last(): JSX.Element {
  const [finalAnswer, setFinalAnswer] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinalAnswer(event.target.value);
  };
  const url = useHistory();
  const handleClick = () => {
    if (finalAnswer.trim().toLowerCase() === "clear") {
      url.push("/clear");
    }
  };

  return (
    <div>
      <div className={styles.frame}>
        {"～LAST～"}
        <img alt="" className={styles.image} src={tparty7} />
      </div>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="最終解答を入力してください"
          onChange={handleChange}
          value={finalAnswer}
        />
        <button className={styles.button} onClick={handleClick}>
          チェック！
        </button>
      </div>
      <div className={styles.imageFlex}></div>

      {/* <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        speed={1000}
      >
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
      </Swiper> */}
    </div>
  );
}

export default Last;
