import { eventbg } from "@/assets";
import About from "./About";
import Donations from "./Donations";
import Hero from "./Hero";
import Intro from "./Intro";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/data";

const Home = () => {
  const Home = SEO[0];
  console.log(Home);
  return (
    <div
      style={{
        backgroundImage: `url(${eventbg})`,
      }}
    >
      <Helmet>
        {/* Basic SEO */}
        <title>{Home.title}</title>
        <meta name="description" content={Home.description} />
        <meta name="keywords" content={Home.meta.keywords.join(", ")} />
        <meta name="author" content={Home.meta.author} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={Home.meta.og.title} />
        <meta property="og:description" content={Home.meta.og.description} />
        <meta property="og:url" content={Home.meta.og.url} />
        <meta property="og:image" content={Home.meta.og.image} />
        <meta property="og:type" content={Home.meta.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={Home.meta.twitter.card} />
        <meta name="twitter:site" content={Home.meta.twitter.site} />
        <meta name="twitter:title" content={Home.meta.twitter.title} />
        <meta
          name="twitter:description"
          content={Home.meta.twitter.description}
        />
        <meta name="twitter:image" content={Home.meta.twitter.image} />
      </Helmet>
      <Hero />
      <Intro />
      <About />
      <Service />
      <Donations />
    </div>
  );
};

export default Home;
