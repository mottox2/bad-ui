import commonStyles from "./common.module.css";

export const Start: React.FC<{
  toNext: () => void;
}> = ({ toNext }) => {
  return (
    <div>
      <h1 className={commonStyles.title}>開発者のためのBad UIs</h1>
      <p className={commonStyles.body}>
        このサイトでは様々なUIに関するアンチパターンを紹介しています。
        実際に体験しながら、よいUIについて考えていきましょう。
      </p>
      <div style={{ marginTop: 32 }}>
        <p className={commonStyles.linkButton}>さあ、始めましょう</p>
        <button
          tabIndex={0}
          className={commonStyles.linkText}
          style={{ color: "inherit" }}
          onClick={() => toNext()}
        >
          始める
        </button>
      </div>
    </div>
  );
};
