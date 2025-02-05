import { hero_banner, main_logo } from "@/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaPeopleGroup,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export const icons = [
  { component: FaFacebookF, color: "#3b5998", link: "https://www.facebook.com" },
  { component: FaYoutube, color: "#FF0000", link: "https://www.youtube.com" },
  { component: FaInstagram, color: "#C13584", link: "https://www.instagram.com" },
];

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

export const footer = [
  {
    id: 0,
    section: [
      {
        id: 0,
        img: main_logo,
        title: "UNIVERSAL PEACE FOUNDATION",
        description:
          "NALLA GOUNDAN PALAYAM,PATHUVAM PALLI (BUS STOP),KADUVETTI PALAYAM (POST),KARUMATHAM PATTI – ANNUR (VIA),COIMBATORE – 641 659.",
      },
    ],
    links: [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 1,
        title: "About Us",
        url: "/about-us",
      },
      {
        id: 2,
        title: "Services",
        url: "/services",
      },
      {
        id: 3,
        title: "News & Events",
        url: "/news-events",
      },
    ],
    quicklinks: [
      {
        id: 0,
        title: "Contact us",
        url: "/contact-us",
      },
      {
        id: 1,
        title: "Certificates",
        url: "/certificates",
      },
      {
        id: 2,
        title: "Privacy & Terms",
        url: "/privacy-Terms",
      },
      {
        id: 3,
        title: "Donate",
        url: "/donation",
      },
    ],
    contact: [
      {
        id: 0,
        title: "+91 98422 20285",
      },
      {
        id: 1,
        title: "+91 98422 79087",
      },
      {
        id: 2,
        title: "+91 98422 80208",
      },
      {
        id: 3,
        title: "upfcbe@gmail.com",
      },
      {
        id: 4,
        title: "info@upfcbe.org",
      },
    ],
  },
];

export const heroContent = [
  {
    id: 0,
    hero: "Empowering Healing, Restoring Hope, Transforming Lives Together.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
    buttonText1: "Read More",
    btnUrl1: "/about-us",
    buttonText2: "Donate Us",
    btnUrl2: "/donation",
  },
  {
    id: 1,
    boxes: [
      {
        id: 0,
        title: "Volunteer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
        icon: FaPeopleGroup,
        link: "/volunteer",
      },
      {
        id: 1,
        title: "Donate",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
        icon: FaPeopleGroup,
        link: "/donation",
      },
      {
        id: 2,
        title: "Volunteer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
        icon: FaPeopleGroup,
        link: "/volunteer",
      },
      {
        id: 3,
        title: "Donate",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, ipsum in faucibus pulvinar, justo nunc semper lectus, vel bibendum lectus nisi eu turpis.",
        icon: FaPeopleGroup,
        link: "/donation",
      },
    ],
    content: [
      {
        id: 0,
        description:
          "Universal Peace Foundation is a laudable trust in the field of humanitarian service over a decade. It continuously aims at establishing a peaceful society based on egalitarian values in the Indian cultural context. Free orphanage home for destitute children, women, old age, widow and physically challenged & mentally retardation. Its Non- Profitable Public Charitable Indian Trust and Funded by Guruji Shivathma. What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.",
      },
    ],
  },
  {
    id: 3,
    title: "Service",
    boxes: [
      {
        id: 0,
        img: hero_banner,
        title: "Social Service",
        description:
          "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.Universal Peace Foundation nallagoundapalayam,coimbatore activites of homes are as follows",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 1,
        title: "Social Service",
        img: hero_banner,
        description:
          "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.Universal Peace Foundation nallagoundapalayam,coimbatore activites of homes are as follows",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 2,
        title: "Social Service",
        img: hero_banner,
        description:
          "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.Universal Peace Foundation nallagoundapalayam,coimbatore activites of homes are as follows",
        link: "#",
        linkName: "Read More",
      },
      // {
      //   id: 3,
      //   title: "Social Service",
      //   description:
      //     "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.Universal Peace Foundation nallagoundapalayam,coimbatore activites of homes are as follows",
      //   link: "#",
      //   linkName: "Read More",
      // },
      // {
      //   id: 4,
      //   title: "Social Service",
      //   description:
      //     "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.Universal Peace Foundation nallagoundapalayam,coimbatore activites of homes are as follows",
      //   link: "#",
      //   linkName: "Read More",
      // },
    ],
  },
];
