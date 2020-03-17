import { ViewPager, usePager } from "../components/ViewPager";
import { Start } from "../patterns/Start";
import { Physics } from "../patterns/Physics";

import styles from "./index.module.css";

const Home = () => {
  const pagerProps = usePager(5, 0);
  const { paginate } = pagerProps;
  const toNext = () => paginate(1);

  // pageが変わったら、hashつけるやつ
  return (
    <>
      <div className={styles.navigationBar}>
        <button className={styles.toPrev} onClick={() => paginate(-1)}>
          Prev
        </button>
        <div className={styles.title}>Bad UIs</div>
        <button
          style={{ visibility: "hidden" }}
          className={styles.toNext}
          onClick={() => paginate(1)}>
          Next
        </button>
      </div>
      <ViewPager {...pagerProps}>
        <Start toNext={toNext} />
        <Physics toNext={toNext} />
        <p>Hello Next.js3</p>
        <p>Hello Next.js4</p>
        <p>Hello Next.js5</p>
      </ViewPager>
    </>
  );
};

export default Home;
