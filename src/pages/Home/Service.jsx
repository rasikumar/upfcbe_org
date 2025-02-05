import { heroContent } from "@/data";
import ServiceCard from "../../components/ServiceCard";

const Service = () => {
  const serviceContents = heroContent[2]?.boxes || [];

  return (
    <div className="bg-red-100 flex flex-col gap-6 py-10 px-6">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        {heroContent[2]?.title}
      </h2>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {serviceContents.map((serviceContent) => (
          <ServiceCard
            key={serviceContent.id}
            title={serviceContent.title}
            description={serviceContent.description}
            icon={serviceContent.icon}
            link={serviceContent.link}
            imageSrc={serviceContent.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
