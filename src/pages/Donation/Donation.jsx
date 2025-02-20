import { eventbg } from "@/assets";
import Form from "./Form";
import Header from "./Header";
import { SEO } from "@/data";
import { Helmet } from "react-helmet-async";

const Donation = () => {
  const DonationPage = SEO[5];
  return (
    <div style={{ backgroundImage: `url(${eventbg})` }}>
      <Helmet>
        {/* Basic SEO */}
        <title>{DonationPage.title}</title>
        <meta name="description" content={DonationPage.description} />
        <meta name="keywords" content={DonationPage.meta.keywords.join(", ")} />
        <meta name="author" content={DonationPage.meta.author} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={DonationPage.meta.og.title} />
        <meta
          property="og:description"
          content={DonationPage.meta.og.description}
        />
        <meta property="og:url" content={DonationPage.meta.og.url} />
        <meta property="og:image" content={DonationPage.meta.og.image} />
        <meta property="og:type" content={DonationPage.meta.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={DonationPage.meta.twitter.card} />
        <meta name="twitter:site" content={DonationPage.meta.twitter.site} />
        <meta name="twitter:title" content={DonationPage.meta.twitter.title} />
        <meta
          name="twitter:description"
          content={DonationPage.meta.twitter.description}
        />
        <meta name="twitter:image" content={DonationPage.meta.twitter.image} />
      </Helmet>
      <Header />
      <Form />
    </div>
  );
};

export default Donation;
