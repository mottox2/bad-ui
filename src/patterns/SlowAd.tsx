import commonStyles from "./common.module.css";
import styles from "./SlowAd.module.css";
import { useState } from "react";
import { useEffect } from "react";

export const SlowAd: React.FC<{
  toNext: () => void;
}> = ({ toNext }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  console.log(loaded);

  return (
    <div>
      {loaded && (
        <div className={styles.ad} onClick={() => alert("残念")}>
          AD
        </div>
      )}
      <h1 className={commonStyles.title}>意図しないタイミングの動作はNo</h1>
      <p className={commonStyles.body}>
        ユーザーのインタラクションに依存しない動作は基本NG。
        <b>ユーザーにとって重要な</b>通知は例外。
        <br />
        広告以外にも、特定の条件でバナーを表示するみたいなときにやりがち
      </p>
      <button
        tabIndex={0}
        className={commonStyles.linkButton}
        style={{ marginTop: 12 }}
        onClick={() => loaded && toNext()}>
        {loaded ? "次へ進む" : "ちょいまち"}
      </button>
    </div>
  );
};
