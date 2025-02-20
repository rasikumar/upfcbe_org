import { footer, icons } from "@/data";
import Button from "./Button";
import { ArrowUp, Check } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const contacts = footer[0].contact;
  const links = footer[0].links;
  const quicklinks = footer[0].quicklinks;
  const sections = footer[0].section;

  return (
    <footer className="w-full m-auto bg-upfdarkblack">
      {/* Navigation & Content */}
      <div className="max-w-[100rem] mx-auto flex flex-col text-secondary p-6">
        <nav className="flex flex-col md:flex-row m-auto p-4 gap-8 ">
          {/* Left Section */}
          <div className="flex flex-col max-w-md gap-4 md:border-r border-upfblack md:px-4">
            {sections.map((section) => (
              <div key={section.id}>
                <h3 className="inline-flex items-center font-bold">
                  <img
                    src={section.img}
                    alt="UPF logo"
                    width={100}
                    height={100}
                    className="mr-2"
                  />
                  {section.title}
                </h3>
                <p className="text-sm">
                  {section.description.split(",").map((desc, index) => (
                    <span key={index}>
                      {desc.trim()}
                      {index !== section.description.split(",").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
            {/* Social Icons */}
            <div className="flex mt-2">
              {icons.map((icon, index) => (
                <Link
                  to={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-3xl mr-3 hover:scale-110 transition-transform"
                  style={{ color: icon.color }}
                >
                  <icon.component />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section (Links) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Contact */}
            <div className="flex flex-col md:border-r border-upfblack md:px-4">
              <h2 className="font-bold mb-4 text-lg">Contact Us</h2>
              {contacts.map((contact) => (
                <span
                  key={contact.id}
                  className="text-lg inline-flex items-center gap-2 text-upflightwhite mb-2"
                >
                  <Check /> {contact.title}
                </span>
              ))}
            </div>

            {/* Navigations */}
            <div className="flex flex-col md:border-r border-upfblack md:px-4">
              <h2 className="font-bold mb-4 text-lg">Navigations</h2>
              {links.map((link) => (
                <Link
                  to={link.url}
                  key={link.id}
                  className="text-lg hover:text-upforangecrayola transition duration-300 ease-in-out inline-flex items-center gap-2 text-upflightwhite mb-2"
                >
                  <Check /> {link.title}
                </Link>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h2 className="font-bold mb-4 text-lg">Quicklinks</h2>
              {quicklinks.map((quicklink) => (
                <Link
                  to={quicklink.url || quicklink.path}
                  key={quicklink.id}
                  className="text-lg hover:text-upforangecrayola transition duration-300 ease-in-out inline-flex items-center gap-2 text-upflightwhite mb-2"
                >
                  <Check /> {quicklink.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Divider */}
      </div>

      <div className="bg-upfCardBg px-4">
        {/* Footer Bottom Section */}
        <div className="flex flex-col max-w-[80rem] sm:flex-row items-center justify-between py-4 gap-4 m-auto">
          <span className="text-upflightwhite">
            &copy; {new Date().getFullYear()} UPF. All rights reserved.
          </span>
          <Button
            to={"/donation"}
            className="bg-upfteagreeno max-md:w-full group relative overflow-hidden hover:text-white hover:border-white hover:bg-black"
          >
            Donate Now
            <ArrowUp className="rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-90" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
