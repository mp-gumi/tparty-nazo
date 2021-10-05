import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
// import tparty1 from "./images/tparty_1_mini.png";
// import tparty2 from "./images/tparty_2_mini.png";
// import tparty3 from "./images/tparty_3_mini.png";
// import tparty4 from "./images/tparty_4_mini.png";
// import tparty5 from "./images/tparty_5_mini.png";
import tparty7 from "./images/tparty_7.png";

function Last(): JSX.Element {
  document.title = "梅昆布茶会オンライン謎解き｜最終問題";
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
      <div className={styles.flame}>
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
    </div>
  );
}

export default Last;
