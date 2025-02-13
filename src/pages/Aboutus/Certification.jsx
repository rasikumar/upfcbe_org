import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { aboutContent } from "@/data";
import { timeline_bg } from "@/assets";

const Certification = () => {
  const certificates = aboutContent[4]?.certificates || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (certificates.length === 0 || !isInView) return;

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
  }, [certificates.length, isInView]);

  useEffect(() => {
    if (contentRef.current && isInView) {
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" }
      );
    }
  }, [currentIndex, isInView]);

  const selectedCertificate = certificates[currentIndex];

  if (!selectedCertificate) return null; // Prevent errors if no data is available

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row justify-end items-center m-auto max-w-full md:pl-4 max-md:px-4 my-10 gap-8 lg:gap-24"
    >
      <h2 className="text-2xl lg:text-3xl font-Caveat text-upfteagreent">
        Certifications
      </h2>
      <div className="h-full flex flex-col w-full lg:w-auto">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.id}
            onClick={() => setCurrentIndex(index)}
            className={`block bg-upforangecrayola p-2 2xl:p-4 2xl:text-base xl:text-xs rounded-full my-1 lg:my-2 mx-1 lg:mx-2 text-center transition-all duration-500 ease-in-out shadow-upfshadow w-full ${
              currentIndex === index
                ? "translate-x-0 bg-upforangecrayola text-white"
                : "translate-x-0 text-upfblack bg-white"
            } hover:bg-upfteagreent hover:text-white`}
          >
            {certificate.title}
          </button>
        ))}
      </div>
      <div
        className="flex rounded-l-3xl max-h-[25rem] lg:max-h-[20rem] 2xl:max-h-[30rem] min-h-[15rem] lg:min-h-[20rem] 2xl:min-h-[30rem] max-w-full lg:max-w-[60rem] 2xl:max-w-[70rem] min-w-full lg:min-w-[30rem] 2xl:min-w-[70rem] p-4 lg:p-16 z-10 overflow-hidden"
        style={{ backgroundImage: `url(${timeline_bg})` }}
      >
        <div
          className="flex flex-col lg:flex-row items-center m-auto h-full w-full lg:gap-20"
          ref={contentRef}
        >
          <div className="w-full xl:w-[50rem] max-md:w-[4rem] mx-auto">
            <img
              src={selectedCertificate.image.src}
              alt={selectedCertificate.image.alt}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="mt-4 text-base lg:text-lg w-full lg:w-1/2">
              {selectedCertificate.title}
            </h3>
            <p className="text-upfblack text-sm lg:text-base w-full">
              {selectedCertificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
