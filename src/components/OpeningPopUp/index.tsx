import React, { useMemo } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import opening from "./images/background_opening.png";
import useWindowSize from "hooks/useWindowSize";

export type OpeningPopUpProps = {
  enabledStart: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
  pages: number;
};

function OpeningPopUp({
  enabledStart,
  onClickNext,
  onClickPrev,
  pages,
}: OpeningPopUpProps): JSX.Element {
  const { windowHeight } = useWindowSize();
  const frontNode = useMemo(() => {
    if (pages === 2) {
      return (
        <div>
          <h2>【謝罪】</h2>
          <p>
            この度は、オンライン脱出がしたくて集まってもらったのにチケットが取れず、大変申し訳ありませんでした。
          </p>
          <p>
            (チケットを予約するタイミングまで開催情報を一切確認してなかった)
          </p>
          <p>なので、お詫び、もとい代替企画として、謎解きを制作しました。</p>
          <p>短い時間ですが、楽しんでもらえたら嬉しいです。</p>
          <p>(想定プレイ時間：10~30分)</p>
        </div>
      );
    }

    if (pages === 3) {
      return (
        <div>
          <h2>【ルール】</h2>
          <p>
            問題の画像と解答の入力欄が画面に表示されます。全員で力を合わせて、答えを考えてください。
          </p>
          <p>
            早く解けた人は、適切なヒントを出すなどしてアシストしてあげてください。
          </p>
          <p>
            全ての問題の枠には色がついています。枠と同じ色の梅昆布Tシャツの人が、その問題のリーダーとなります。
          </p>
          <p>答えが決まったら、リーダーはまにぽんに答えを伝えてください。</p>
          <p>(例：「解答欄に『ハムスター』と入力してください」)</p>
          <p>正解であれば解答画像が表示され、次の問題へ進めます。</p>
          <p>※梅昆布Tシャツに無い色の枠の問題では、誰が答えても構いません。</p>
          <br />
          <p>それでは、スタートボタンをクリックして、ゲームを始めましょう！</p>
        </div>
      );
    }

    return (
      <div className={styles.imageWrapper}>
        <img
          alt="謎解きをしよ～～～よ！"
          className={styles.image}
          src={opening}
        />
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
              {`<<戻る`}
            </button>
          ) : null}
          {enabledStart ? (
            <Link to="/question">
              <button className={styles.button}>スタート！</button>
            </Link>
          ) : (
            <button
              className={styles.button}
              onClick={onClickNext}
            >{`次へ>>`}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpeningPopUp;
