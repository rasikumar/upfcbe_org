import { eventbg } from "@/assets";
import Form from "./Form";
import Header from "./Header";

const Donation = () => {
  return (
    <div style={{ backgroundImage: `url(${eventbg})` }}>
      <Header />
      <Form />
    </div>
  );
};

export default Donation;
