import { eventbg } from "@/assets";
import Header from "./Header";
import Livecard from "./Livecard";
import Contentcard from "@/components/Contentcard";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/data";

const ContactUs = () => {
  const ContactPage = SEO[4];
  return (
    <div style={{ backgroundImage: `url(${eventbg})` }}>
      <Helmet>
        {/* Basic SEO */}
        <title>{ContactPage.title}</title>
        <meta name="description" content={ContactPage.description} />
        <meta name="keywords" content={ContactPage.meta.keywords.join(", ")} />
        <meta name="author" content={ContactPage.meta.author} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={ContactPage.meta.og.title} />
        <meta
          property="og:description"
          content={ContactPage.meta.og.description}
        />
        <meta property="og:url" content={ContactPage.meta.og.url} />
        <meta property="og:image" content={ContactPage.meta.og.image} />
        <meta property="og:type" content={ContactPage.meta.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={ContactPage.meta.twitter.card} />
        <meta name="twitter:site" content={ContactPage.meta.twitter.site} />
        <meta name="twitter:title" content={ContactPage.meta.twitter.title} />
        <meta
          name="twitter:description"
          content={ContactPage.meta.twitter.description}
        />
        <meta name="twitter:image" content={ContactPage.meta.twitter.image} />
      </Helmet>
      <Header />
      <Contentcard />
      <Livecard />
    </div>
  );
};

export default ContactUs;
