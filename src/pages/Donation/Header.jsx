import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import SliderCard from "@/components/SliderCard";

const titles = [
  "Donate for Food & Education",
  "Help Provide Clean Water",
  "Support Medical Aid for Children",
  "Empower Women Through Education",
  "Plant Trees for a Greener Future",
];
const Header = () => {
  return (
    <div>
      <h2 className="text-center text-upforangecrayola font-Caveat text-4xl my-4">
        Donate to Changing the World. Be part of the good campaign
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        speed={2000} // Smooth transition speed
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        grabCursor={true} // Improves user experience
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i} className="px-4">
            <SliderCard title={titles[i]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
