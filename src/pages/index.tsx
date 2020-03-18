import Head from "next/head";

import { ViewPager, usePager } from "../components/ViewPager";
import { Start } from "../patterns/Start";
import { Physics } from "../patterns/Physics";
import { SlowAd } from "../patterns/SlowAd";

import styles from "./index.module.css";

const Home = () => {
  const pagerProps = usePager(5, 0);
  const { paginate } = pagerProps;
  const toNext = () => paginate(1);

  const title = "Bad UI for developers";
  const description =
    "開発者のために良くないUIを用意しました。実際に体験しながら良いUIについて考えてみましょう。";

  // pageが変わったら、hashつけるやつ
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta name="keywords" content="UI, React" key="keywords" />
        <meta
          property="og:description"
          content={description}
          key="description"
        />
        <meta property="og:type" content="website" key="type" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta name="twitter:creator" content="@mottox2" key="twitter:creater" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
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
        <SlowAd toNext={toNext} />
        <p>Hello Next.js4</p>
        <p>Hello Next.js5</p>
      </ViewPager>
    </>
  );
};

export default Home;
