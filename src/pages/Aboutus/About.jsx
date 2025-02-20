import { shape } from "@/assets";
import { useEffect } from "react";
import { useLocation } from "react-router";

import Header from "./Header";
import Welcome from "./Welcome";
import Guruji from "./Guruji";
import TimeLine from "./TimeLine";
import Moto from "./Moto";
import Certification from "./Certification";
import Total from "./Total";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/data";

const About = () => {
  const location = useLocation();
  const AboutPage = SEO[1];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div style={{ backgroundImage: `url(${shape})` }}>
      <Helmet>
        {/* Basic SEO */}
        <title>{AboutPage.title}</title>
        <meta name="description" content={AboutPage.description} />
        <meta name="keywords" content={AboutPage.meta.keywords.join(", ")} />
        <meta name="author" content={AboutPage.meta.author} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={AboutPage.meta.og.title} />
        <meta
          property="og:description"
          content={AboutPage.meta.og.description}
        />
        <meta property="og:url" content={AboutPage.meta.og.url} />
        <meta property="og:image" content={AboutPage.meta.og.image} />
        <meta property="og:type" content={AboutPage.meta.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={AboutPage.meta.twitter.card} />
        <meta name="twitter:site" content={AboutPage.meta.twitter.site} />
        <meta name="twitter:title" content={AboutPage.meta.twitter.title} />
        <meta
          name="twitter:description"
          content={AboutPage.meta.twitter.description}
        />
        <meta name="twitter:image" content={AboutPage.meta.twitter.image} />
      </Helmet>
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
