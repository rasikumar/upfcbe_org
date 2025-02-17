import { eventbg } from "@/assets";
import About from "./About";
import Donations from "./Donations";
import Hero from "./Hero";
import Intro from "./Intro";
import Service from "./Service";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${eventbg})`,
      }}
    >
      <Hero />
      <Intro />
      <About />
      <Service />
      <Donations />
    </div>
  );
};

export default Home;
