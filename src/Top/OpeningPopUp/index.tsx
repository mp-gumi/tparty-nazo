import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import opening from "./images/background_opening.png";

function OpeningPopUp(): JSX.Element {
  document.title = "梅昆布茶会オンライン謎解き｜説明";
  const [openingClick, setOpeningClick] = useState<number>(0);
  return (
    <div className={styles.background}>
      <div className={styles.style}>
        <div>
          {openingClick === 0 ? (
            <div>
              <img
                alt="謎解きをしよ～～～よ！"
                className={styles.image}
                src={opening}
              />
            </div>
          ) : openingClick === 1 ? (
            <div>
              <h2>【謝罪】</h2>
              <p>
                この度は、オンライン脱出がしたくて集まってもらったのにチケットが取れず、大変申し訳ありませんでした。
              </p>
              <p>お詫び、もとい代替企画として、謎解きを制作しました。</p>
              <p>短い時間ですが、楽しんでもらえたら嬉しいです。</p>
              <p>(想定プレイ時間：10~30分)</p>
            </div>
          ) : (
            <div>
              <h2>【ルール】</h2>
              <p>問題の画像と解答の入力欄が画面に表示されます。</p>
              <p>
                全ての問題の枠に色がついています。枠と同じ色の梅昆布Tシャツの人が、その問題のリーダーです。
              </p>
              <p>
                答えが分かったら、リーダーはまにぽんに答えを伝え、入力させてください。正解であれば次へ進めます。
              </p>
              <p>
                (リーダーがひらめかなかったときは、すでに分かった人がアシストしてください。)
              </p>
              <p>
                それでは、スタートボタンをクリックして、ゲームを始めましょう！
              </p>
            </div>
          )}
        </div>
        <div>
          {openingClick === 0 ? null : (
            <button
              className={styles.button}
              onClick={() => setOpeningClick(openingClick - 1)}
            >
              {`<<戻る`}
            </button>
          )}
          {openingClick < 2 ? (
            <button
              className={styles.button}
              onClick={() => setOpeningClick(openingClick + 1)}
            >{`次へ>>`}</button>
          ) : (
            <Link to="/question">
              <button className={styles.button}>スタート！</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpeningPopUp;
