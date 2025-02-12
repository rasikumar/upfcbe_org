import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { aboutContent } from "@/data";
import { timeline_bg } from "@/assets";
import Heading from "@/components/Heading";

const Certification = () => {
  const certificates = aboutContent[4]?.certificates || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (certificates.length === 0) return;

    const interval = setInterval(() => {
      gsap.to(contentRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power1.in",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" }
      );
    }
  }, [currentIndex]);

  const selectedCertificate = certificates[currentIndex];

  if (!selectedCertificate) return null; // Prevent errors if no data is available

  return (
    <div className="flex flex-col lg:flex-row justify-end items-center m-auto maxx-md:px-4 my-10 gap-24">
      <h2 className="text-3xl font-Caveat text-upfteagreent">Certifications</h2>
      <div className="h-full flex flex-col">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.id}
            onClick={() => setCurrentIndex(index)}
            className={`block bg-upforangecrayola p-4 rounded-full my-2 mx-2 text-center transition-all duration-500 ease-in-out shadow-upfshadow ${
              currentIndex === index
                ? "translate-x-0 bg-upforangecrayola text-white"
                : "translate-x-0 text-upfblack bg-white"
            }`}
          >
            {certificate.title}
          </button>
        ))}
      </div>
      <div
        className="flex rounded-l-3xl 2xl:max-h-[30rem] xl:max-h-[20rem] 2xl:min-h-[30rem] xl:min-h-[20rem] 2xl:max-w-[70rem] xl:max-w-[60rem] 2xl:min-w-[70rem] xl:min-w-[60rem] p-16 z-10 overflow-hidden"
        style={{ backgroundImage: `url(${timeline_bg})` }}
      >
        <div
          className="flex flex-col lg:flex-row items-center m-auto h-full w-full gap-20"
          ref={contentRef}
        >
          <div className="w-[50rem] mx-auto">
            <img
              src={selectedCertificate.image.src}
              alt={selectedCertificate.image.alt}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mt-4 2xl:text-lg text-base w-full lg:w-1/2">
              {selectedCertificate.title}
            </h3>
            <p className="text-upfblack 2xl:text-base text-sm w-full lg:w-1/2">
              {selectedCertificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
