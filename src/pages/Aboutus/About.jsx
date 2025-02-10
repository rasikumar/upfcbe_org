import Header from "./Header";
import LeafletMap from "@/components/LeafletMap";
import Welcome from "./Welcome";
import { shape } from "@/assets";
import TimeLine from "./TimeLine";
import Moto from "./Moto";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${shape})` }}>
      <Header />
      <Welcome />
      <TimeLine />
      <Moto />
    </div>
  );
};

export default About;
