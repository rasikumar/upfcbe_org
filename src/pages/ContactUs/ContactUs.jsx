import { eventbg } from "@/assets";
import Header from "./Header";
import Livecard from "./Livecard";
import Contentcard from "@/components/Contentcard";

const ContactUs = () => {
  return (
    <div style={{ backgroundImage: `url(${eventbg})` }}>
      <Header />
      <Contentcard />
      <Livecard />
    </div>
  );
};

export default ContactUs;
