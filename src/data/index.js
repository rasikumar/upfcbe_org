import {
  education,
  eightyG,
  fcra,
  gurujihero,
  gurujiHeropic,
  hero_banner,
  main_logo,
  medicalservice,
  natural,
  spirutal,
  twelveA,
} from "@/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPeopleGroup,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export const icons = [
  {
    component: FaFacebookF,
    color: "#3b5998",
    link: "https://www.facebook.com",
  },
  { component: FaYoutube, color: "#FF0000", link: "https://www.youtube.com" },
  {
    component: FaInstagram,
    color: "#C13584",
    link: "https://www.instagram.com",
  },
];

export const founder = [
  {
    name: "Dr. Rashid Ahmad",
    position: "Founder, UPF",
    image: gurujiHeropic,
    socialMedia: [
      {
        id: 0,
        icon: FaFacebookF,
        color: "#3b5998",
        link: "https://www.facebook.com/rashidahmad.ahmed.9",
      },
      {
        id: 1,
        icon: FaInstagram,
        color: "#C13584",
        link: "https://www.instagram.com/rashidahmad.ahmed.9/",
      },
      {
        id: 2,
        icon: FaYoutube,
        color: "#FF0000",
        link: "https://www.instagram.com/rashidahmad.ahmed.9/",
      },
      {
        id: 3,
        icon: FaLinkedin,
        color: "#3b5998",
        link: "https://www.instagram.com/rashidahmad.ahmed.9/",
      },
    ],
  },
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
        content: "+91 98422 20285",
      },
      {
        id: 1,
        icon: IoMdMail,
        content: "upfcbe@gmail.com",
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
    hero: "We Have the Power to Impact Our Future, We’re Doing Something About It by peace",
    description:
      "we believe in creating a brighter future for those in need. Through education, healthcare, and community support, we bring hope and opportunity to underserved populations. Join us in making a difference—because every action counts!",
    buttonText1: "Read More",
    btnUrl1: "/about-us",
    buttonText2: "Donate Us",
    btnUrl2: "/donation",
  },
  {
    id: 1,
    content: [
      {
        id: 0,
        heading: "Universal Peace Foundation",
        title: "Learn About Us",
        description:
          "Universal Peace Foundation is a laudable trust in the field of humanitarian service over a decade. It continuously aims at establishing a peaceful society based on egalitarian values in the Indian cultural context. Free orphanage home for destitute children, women, old age, widow and physically challenged & mentally retardation. Its Non- Profitable Public Charitable Indian Trust and Funded by Guruji Shivathma. What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls.",
      },
    ],
  },
  {
    id: 2,
    title: "Our Services",
    description: "Empowering Lives with Compassion",
    boxes: [
      {
        id: 0,
        img: hero_banner,
        tag: "Community Support",
        title: "Social Service",
        description:
          "What one can realize about Universal Peace Foundation is a heaven for the starving illiterate children, differently abled unfortunate souls, uncared aged kith and kins and undignified destitute souls. Universal Peace Foundation Nallagoundapalayam, Coimbatore activities of homes are as follows.",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 1,
        title: "Educational Service",
        img: education,
        tag: "Education & Literacy",
        description:
          "Students in and around villages numbering more than 100+ members are offered coaching in the evening within the ashram campus without any fees. Dresses and Free Computers are provided to the tribals of Thirumorthi Hills. Apart from that, UPF provides basic needs like water facilities, clothes, medicines, and groceries to the tribals according to their requirements.",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 2,
        title: "Natural Service",
        img: natural,
        tag: "Environmental Conservation",
        description:
          "UPF planted more than 3000 trees inside the campus and also maintains nurseries. More than 100,000 saplings have been provided. By maintaining a social forestry system, we created a barrier-free healthy environment, and 12,000 saplings have been sent out to outside people.",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 3,
        title: "Spiritual Service",
        img: spirutal,
        tag: "Wellness & Mindfulness",
        description:
          "UPF promotes Indian inner science of Yoga, Meditation, Pranayama, Dhiyana, and Vipassana to all kinds of people. Classes by UPF help to find inner peace, which is taught by Guruji Shivathma based on course booking and appointments.",
        link: "#",
        linkName: "Read More",
      },
      {
        id: 4,
        title: "Medical Service",
        img: medicalservice,
        tag: "Healthcare & Wellness",
        description:
          "UPF provides free hospital and ambulance services to needy people. Medical camps are also conducted twice a month inside the ashram. Apart from that, our medical team frequently conducts free medical camps for nearby village people with free medicines and general checkups. The UPF Medical team provides services in all other UPF branches in Tamil Nadu, covering more than six districts.",
        link: "#",
        linkName: "Read More",
      },
    ],
  },
];

export const aboutContent = [
  {
    id: 1,
    heading: "About Pure Hearts",
    title: "Help the Society,Donate to the Charity",
    content:
      "On the other hand, we denounce with righteous indignation & dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain trouble that are bound to ensure.",
  },
  {
    id: 2,
    sets: [
      {
        id: 0,
        year: 2000,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "Laying the Foundation for Change",
        description:
          "Established our mission to support underprivileged communities, focusing on education, healthcare, and basic human rights.",
      },
      {
        id: 1,
        year: 2011,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "Expanding Our Reach",
        description:
          "Launched nationwide programs, providing food, shelter, and medical aid to thousands in need.",
      },
      {
        id: 2,
        year: 2021,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "Empowering Through Education",
        description:
          "Introduced scholarship programs and skill development workshops, uplifting disadvantaged youth and creating sustainable opportunities.",
      },
      {
        id: 3,
        year: 2025,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "A Vision for the Future",
        description:
          "Aiming for global impact, strengthening policies, and increasing partnerships to bring lasting change to marginalized communities.",
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        id: 0,
        title: "Our Mission",
        description:
          "We aim to build an egalitarian society through education, healthcare, and community support, ensuring safety and equality for all.",
      },
      {
        id: 1,
        title: "Our Vision",
        description:
          "We envision a peaceful, equal society where everyone has access to education, healthcare, and opportunities for a fulfilling life.",
      },
      {
        id: 2,
        title: "Our Goal",
        description:
          "We uphold business responsibilities, ensuring ethical practices while minimizing disruptions and maximizing benefits for all stakeholders.",
      },
    ],
  },
  {
    id: 4,
    certificates: [
      {
        id: 0,
        image: eightyG,
        description:
          "80G certification allows donors to claim tax deductions on donations made to registered charitable organizations under Section 80G of the IT Act.",
        link: "#",
      },
      {
        id: 1,
        image: twelveA,
        description:
          "12A certification grants tax exemption to nonprofit organizations, ensuring they do not have to pay income tax on surplus funds.",
        link: "#",
      },
      {
        id: 2,
        image: eightyG,
        description:
          "Donors with 80G-certified receipts can avail tax deductions, promoting transparency and encouraging charitable contributions for social welfare initiatives.",
        link: "#",
      },
      {
        id: 3,
        image: fcra,
        description:
          "FCRA certification enables NGOs to legally receive foreign contributions, ensuring compliance with India's regulations on foreign funding for charities.",
        link: "#",
      },
    ],
  },
];
