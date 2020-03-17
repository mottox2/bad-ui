import { ViewPager, usePager } from "../components/ViewPager";

const Home = () => {
  const pagerProps = usePager(5);
  return (
    <>
      <ViewPager {...pagerProps}>
        <p>Hello Next.js</p>
        <p>Hello Next.js2</p>
        <p>Hello Next.js3</p>
        <p>Hello Next.js4</p>
        <p>Hello Next.js5</p>
      </ViewPager>
    </>
  );
};

export default Home;
