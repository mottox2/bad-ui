import commonStyles from "./common.module.css";
import { BottomSheet } from "../components/BottomSheet";
import { useState } from "react";

const transitions = {
  none: {
    duration: 0,
  },
  animation: {
    duration: 0.5,
    easing: "linear",
  },
  goal: {
    type: "spring",
    stiffness: 300,
    damping: 200,
  },
};

export const Physics: React.FC<{
  toNext: () => void;
}> = ({ toNext }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div>
      <h1 className={commonStyles.title}>見た目の罠</h1>
      <p className={commonStyles.body}>
        押せる要素っぽいけど、押せない。押せるように見えないけど、押せる要素ってオチ。サービスの利用上で必須なページでこれをやられると辛いです。
      </p>
      <div style={{ marginTop: 32 }}>
        <button
          tabIndex={0}
          className={commonStyles.linkButton}
          onClick={() => setOpen(true)}>
          パターン1
        </button>
        <button
          tabIndex={0}
          className={commonStyles.linkButton}
          style={{ marginTop: 12 }}
          onClick={() => setOpen2(true)}>
          パターン2
        </button>
        <button
          tabIndex={0}
          className={commonStyles.linkButton}
          style={{ marginTop: 12 }}
          onClick={() => setOpen3(true)}>
          パターン3
        </button>
      </div>

      <BottomSheet
        isOpen={open}
        requestClose={() => setOpen(false)}
        transition={transitions.none}>
        <div style={{ padding: "60px 12px" }}>
          いきなり要素が表示されると戸惑う。何が起きたか判断しにくい感じですよね。
        </div>
      </BottomSheet>
      <BottomSheet
        isOpen={open2}
        requestClose={() => setOpen2(false)}
        transition={transitions.animation}>
        <div style={{ padding: "60px 12px" }}>
          アニメーションがあれば、いいというわけではない。これは線形のイージングを利用している。
        </div>
      </BottomSheet>
      <BottomSheet
        isOpen={open3}
        requestClose={() => setOpen3(false)}
        transition={transitions.goal}>
        <div style={{ padding: "60px 12px" }}>
          それっぽいイージングを指定すると、自然な動きになる。
        </div>
      </BottomSheet>
    </div>
  );
};
