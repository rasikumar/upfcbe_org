import { Helmet } from "react-helmet-async";
import Events from "./Events";
import Header from "./Header";
import News from "./News";
import { SEO } from "@/data";

const Event_NewsHome = () => {
  const NewsEventsPage = SEO[2];
  return (
    <div>
      <Helmet>
        {/* Basic SEO */}
        <title>{NewsEventsPage.title}</title>
        <meta name="description" content={NewsEventsPage.description} />
        <meta
          name="keywords"
          content={NewsEventsPage.meta.keywords.join(", ")}
        />
        <meta name="author" content={NewsEventsPage.meta.author} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={NewsEventsPage.meta.og.title} />
        <meta
          property="og:description"
          content={NewsEventsPage.meta.og.description}
        />
        <meta property="og:url" content={NewsEventsPage.meta.og.url} />
        <meta property="og:image" content={NewsEventsPage.meta.og.image} />
        <meta property="og:type" content={NewsEventsPage.meta.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={NewsEventsPage.meta.twitter.card} />
        <meta name="twitter:site" content={NewsEventsPage.meta.twitter.site} />
        <meta
          name="twitter:title"
          content={NewsEventsPage.meta.twitter.title}
        />
        <meta
          name="twitter:description"
          content={NewsEventsPage.meta.twitter.description}
        />
        <meta
          name="twitter:image"
          content={NewsEventsPage.meta.twitter.image}
        />
      </Helmet>
      <Header />
      <Events />
      <News />
    </div>
  );
};

export default Event_NewsHome;
