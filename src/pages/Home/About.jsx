import { heroContent } from "../../data";

const About = () => {
  const aboutContents = heroContent[1].content;

  return (
    <div>
      {aboutContents.map((aboutContent) => (
        <div
          key={aboutContent.id}
          className="max-w-[100rem] m-auto text-center py-5 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {aboutContent.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default About;
