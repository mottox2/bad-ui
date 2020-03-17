import { ViewPager, usePager } from "../components/ViewPager";
import { Start } from "../patterns/Start";

import styles from "./index.module.css";

const Home = () => {
  const pagerProps = usePager(5);
  const { paginate } = pagerProps;
  const toNext = () => paginate(1);
  return (
    <>
      <div className={styles.navigationBar}>
        <button className={styles.toPrev} onClick={() => paginate(-1)}>
          Prev
        </button>
        <div className={styles.title}>Bad UIs</div>
        <button className={styles.toNext} onClick={() => paginate(1)}>
          Next
        </button>
      </div>
      <ViewPager {...pagerProps}>
        <Start toNext={toNext} />
        <p>Hello Next.js2</p>
        <p>Hello Next.js3</p>
        <p>Hello Next.js4</p>
        <p>Hello Next.js5</p>
      </ViewPager>
    </>
  );
};

export default Home;
