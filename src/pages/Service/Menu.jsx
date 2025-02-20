import { eventbg, bannerbg } from "@/assets";
import Servicemenu from "@/components/Servicemenu";
import { SEO } from "@/data";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const ServicesPage = SEO[3];
  return (
    <>
      <div>
        <Helmet>
          {/* Basic SEO */}
          <title>{ServicesPage.title}</title>
          <meta name="description" content={ServicesPage.description} />
          <meta
            name="keywords"
            content={ServicesPage.meta.keywords.join(", ")}
          />
          <meta name="author" content={ServicesPage.meta.author} />

          {/* Open Graph (Facebook, LinkedIn) */}
          <meta property="og:title" content={ServicesPage.meta.og.title} />
          <meta
            property="og:description"
            content={ServicesPage.meta.og.description}
          />
          <meta property="og:url" content={ServicesPage.meta.og.url} />
          <meta property="og:image" content={ServicesPage.meta.og.image} />
          <meta property="og:type" content={ServicesPage.meta.og.type} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content={ServicesPage.meta.twitter.card} />
          <meta name="twitter:site" content={ServicesPage.meta.twitter.site} />
          <meta
            name="twitter:title"
            content={ServicesPage.meta.twitter.title}
          />
          <meta
            name="twitter:description"
            content={ServicesPage.meta.twitter.description}
          />
          <meta
            name="twitter:image"
            content={ServicesPage.meta.twitter.image}
          />
        </Helmet>
        <div
          className="w-full text-center mb-5 h-80 flex justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bannerbg})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-4xl font-bold text-white relative">Services</h1>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <Servicemenu />
      </div>
    </>
  );
};
export default Menu;
