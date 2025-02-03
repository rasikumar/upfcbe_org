import {
  FaFacebookF,
  FaInstagram,
  FaPeopleGroup,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export const icons = [FaFacebookF, FaYoutube, FaInstagram];

export const headerSection = [
  {
    title: "LETS HELP OTHERS",
    link: "/donation",
    icon: FaPeopleGroup,
    text: "DONATE NOW",
  },
  {
    rightSide: [
      {
        id: 0,
        icon: IoCall,
        content: "1234567890",
      },
      {
        id: 1,
        icon: IoMdMail,
        content: "info@example.com",
      },
    ],
  },
];

export const navigations = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about-us",
  },
  {
    id: "2",
    title: "UPF Family",
    url: "/our-family",
  },
  {
    id: "3",
    title: "Service",
    url: "/services",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contact-us",
  },
];

export const heroContent = [
  {
    id: 0,
    title: "Empowering Healing, Restoring Hope, Transforming Lives Together.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
    buttonText1: "Read More",
    btnUrl: "/about-us",
    buttonText2: "Donate Us",
    btnUrl2: "/donation",
  },
];
