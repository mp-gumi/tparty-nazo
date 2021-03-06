import React, { useMemo } from "react";
import styles from "./style.module.css";
import ending from "./images/background_ending.png";
import useWindowSize from "hooks/useWindowSize";

export type ClearProps = {
  onClickNext: () => void;
  onClickPrev: () => void;
  pages: number;
};

function ClearComponent({
  onClickNext,
  onClickPrev,
  pages,
}: ClearProps): JSX.Element {
  const { windowHeight } = useWindowSize();
  const frontNode = useMemo(() => {
    if (pages === 2) {
      return (
        <div>
          <h2>【謝辞】</h2>
          <p>内容はこれで以上です。隠し要素とかはありません。</p>
          <p>
            (ルール説明で出てきた『ハムスター』も、もちろん何の伏線でもありません)
          </p>
          <p>プレイしてくれた皆さまに、この場を借りて感謝を申し上げます。</p>
          <p>スペシャルサンクス：梅昆布のみんな、マサさん</p>
        </div>
      );
    }

    if (pages === 3) {
      return <div className={styles.finish}>Fin</div>;
    }

    return (
      <div className={styles.imageWrapper}>
        <img alt="クリア" className={styles.image} src={ending} />
      </div>
    );
  }, [pages]);

  return (
    <div className={styles.background} style={{ height: windowHeight }}>
      <div className={styles.style}>
        {frontNode}
        <div>
          {pages > 1 ? (
            <button className={styles.button} onClick={onClickPrev}>
              {"<<戻る"}
            </button>
          ) : null}
          {pages < 3 ? (
            <button className={styles.button} onClick={onClickNext}>
              {"次へ>>"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ClearComponent;
