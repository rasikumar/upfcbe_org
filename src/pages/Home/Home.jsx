import { HeroCard } from "../../components/HeroCard";

import { heroContent } from "../../data";

const Home = () => {
  console.log(heroContent);
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center">
        {heroContent.map((content) => (
          <div key={content.id} className="flex flex-col items-center justify-center h-96 gap-6">
            <h1 className="text-5xl font-bold max-w-5xl text-center">
              {content.title}
            </h1>
            <p className="text-xl w-1/2 text-center">{content.description}</p>
            <button className="btn-primary">Learn More</button>
          </div>
        ))}
        {/* Home component content */}
      </div>
        <HeroCard />
    </div>
  );
};

export default Home;
