import { shape } from "@/assets";
import LeafletMap from "@/components/LeafletMap";

import Header from "./Header";
import Welcome from "./Welcome";
import Guruji from "./Guruji";
import TimeLine from "./TimeLine";
import Moto from "./Moto";
import Certification from "./Certification";
import Total from "./Total";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${shape})` }}>
      <Header />
      <Welcome />
      <Guruji />
      <TimeLine />
      <Moto />
      <Certification />
      <Total />
    </div>
  );
};

export default About;
