import React, { useState } from "react";
import styles from "./style.module.css";
import ending from "./images/background_ending.png";

function Clear(): JSX.Element {
  document.title = "梅昆布茶会オンライン謎解き｜成功";
  document.title = "梅昆布茶会オンライン謎解き｜説明";
  const [openingClick, setOpeningClick] = useState<number>(0);
  return (
    <div className={styles.background}>
      <div className={styles.style}>
        <div>
          {openingClick === 0 ? (
            <div>
              <img alt="クリア" className={styles.image} src={ending} />
            </div>
          ) : openingClick === 1 ? (
            <div>
              <h2>【謝辞】</h2>
              <p>プレイいただきありがとうございました！</p>
              <p>
                プレイしてくれた皆さまに、この場を借りて感謝を申し上げます。
              </p>
              <p>スペシャルサンクス：マサさん</p>
            </div>
          ) : (
            <div className={styles.finish}>～Fin～</div>
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
          {openingClick === 2 ? null : (
            <button
              className={styles.button}
              onClick={() => setOpeningClick(openingClick + 1)}
            >{`次へ>>`}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Clear;
