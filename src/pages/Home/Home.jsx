import Charts from "./Charts";
import Donations from "./Donations";
import Hero from "./Hero";
import Intro from "./Intro";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Charts />
      <Service />
      <Donations />
    </>
  );
};

export default Home;
