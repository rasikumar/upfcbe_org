import {
  about_guruji,
  education,
  eightyG,
  events_1,
  events_2,
  events_3,
  fcra,
  gurujihero,
  gurujiHeropic,
  hero_banner,
  hoverbg,
  main_logo,
  medicalservice,
  natural,
  news_1,
  news_2,
  spirutal,
  twelveA,
} from "@/assets";
import { Crosshair, Eye, Goal } from "lucide-react";
import { FaCalendarAlt, FaHandsHelping, FaUser ,  } from "react-icons/fa";
import {
  FaBuilding,
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
    name: "Guruji Shivathma",
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
    active: false,
  },
  {
    id: "1",
    title: "About Us",
    url: "/about-us",
    active: false,
  },
  {
    id: "2",
    title: "News & Events",
    url: "/events-home",
    active: false,
  },
  {
    id: "3",
    title: "Service",
    url: "/services",
    active: false,
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contact-us",
    active: false,
  },
];

export const setActiveNavigation = (id) => {
  return navigations.map((nav) => ({
    ...nav,
    active: nav.id === id,
  }));
};

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
  {
    id: 3,
    moto: [
      {
        id: 0,
        title: "Our Vision & Mission",
        description:
          "create a sustainable and inclusive world where every individual has access to essential resources and opportunities. We empower communities through education, healthcare, and social initiatives to drive lasting change.",
        number: "1",
        url: "/about-us",
      },
      {
        id: 1,
        title: "About NGO",
        description:
          "Dedicated to transforming lives, we focus on grassroots initiatives in education, healthcare, and women empowerment, believing in sustainable development driven by community participation.",
        number: "2",
        url: "about-us",
      },
      {
        id: 2,
        title: "Our Team",
        description:
          "Our team includes passionate leaders committed to social change, dedicated strategists with expertise in community welfare, experienced philanthropists focusing on education and healthcare, and visionary entrepreneurs supporting sustainable growth and empowerment programs.",
        number: "3",
        url: "/about-us",
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
        icon: Crosshair,
        letter: "M",
        description:
          "“We would enhance our service day to day of life, enhance like fulfill the basic needs of people... peace is out primary way to reach our mission",
      },
      {
        id: 1,
        title: "Our Vision",
        icon: Eye,
        letter: "V",
        description:
          "Equal every one facility and basic needs must reach every people around the world, and we marching towards to vision by peace .",
      },
      {
        id: 2,
        title: "Our Goal",
        letter: "G",
        icon: Goal,
        description:
          "We uphold business responsibilities, ensuring ethical practices while minimizing disruptions and maximizing benefits for all stakeholders.",
      },
    ],
  },
  {
    id: 4,
    title: "About Guruji",
    heading: "Guruji Shivathma: A Beacon of Hope for the Underprivileged",
    description:
      " GURUJI SHIVATHMA, born in 1962 in Coimbatore, Tamil Nadu, grew up in poverty, struggling for even one meal a day. Despite hardships, he pursued education diligently and excelled academically. Deeply moved by the suffering of the poor, he resolved to fight hunger and uplift the underprivileged, especially children, women, and the elderly. new After completing his B.Com, Diploma in Siddha Medicine, and Human Psychology, he became a successful Siddha practitioner and counselor. With his lifelong vision of helping destitute children, particularly girls, he used his savings and ancestral property proceeds to buy 8.68 acres in Nallagoundanpalayam. In 2000, he established the Universal Peace Foundation to provide free food, shelter, education, and medical aid to the needy. new Today, the foundation operates in six districts of Tamil Nadu, supporting 960 people. It empowers individuals through vocational training, ensuring they lead independent and dignified lives. His unwavering dedication continues to transform lives, bringing hope and security to countless underprivileged individuals. His mission remains to eradicate hunger and provide holistic support, making a lasting impact on society.",
    image: about_guruji,
    imageAlt: "GurjiAboutPic",
  },
  {
    id: 5,
    certificates: [
      {
        id: 0,
        title: "80G Certification",
        image: { src: eightyG, alt: "80G Certification Document" },
        description:
          "80G certification allows donors to claim tax deductions on donations made to registered charitable organizations under Section 80G of the IT Act. This encourages philanthropy by reducing taxable income. NGOs with this certification gain credibility, attracting more donors and ensuring compliance with government regulations for charitable contributions.",
        link: "#",
      },
      {
        id: 1,
        title: "12A Certification",
        image: { src: twelveA, alt: "12A Certification Document" },
        description:
          "12A certification grants tax exemption to nonprofit organizations, ensuring they do not have to pay income tax on surplus funds. This enables NGOs to utilize their entire income for charitable activities. It also enhances their financial sustainability, making them eligible for grants and funding from various government and private institutions.",
        link: "#",
      },
      {
        id: 2,
        title: "80G Certified Receipt",
        image: { src: eightyG, alt: "80G Certification Receipt" },
        description:
          "An 80G-certified receipt allows donors to avail of tax deductions, promoting transparency and encouraging charitable contributions. It serves as proof of donation under Section 80G of the IT Act, helping NGOs attract more donations. Organizations issuing these receipts must maintain proper financial records to ensure compliance with tax regulations.",
        link: "#",
      },
      {
        id: 3,
        title: "FCRA Certification",
        image: { src: fcra, alt: "FCRA Certification Document" },
        description:
          "FCRA certification enables NGOs to legally receive foreign contributions, ensuring compliance with India's regulations on international funding. This certification is essential for organizations working on social, educational, and developmental projects. It also mandates transparency in fund utilization, preventing misuse and ensuring funds are used solely for charitable purposes.",
        link: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Interesting Numbers",
    heading: "Pure Hearts Facts & Figures",
    description:
      "The master-builder of human happiness no one rejects, dislikes or avoids pleasure itself pleasure.",
    boxes: [
      {
        id: 0,
        icon: FaCalendarAlt,
        number: "25",
        title: "Years",
      },

      {
        id: 1,
        icon: FaBuilding,
        number: "25 +",
        title: "Branches",
      },
      {
        id: 2,
        icon: FaHandsHelping,
        number: "2500 +",
        title: "Volunteers",
      },
      {
        id: 3,
        icon: FaUser,
        number: "4000 +",
        title: "Beneficiaries",
      },
    ],
  },
];

export const events = [
  {
    id: 0,
    image: events_1,
    date: "31",
    month: "Mar",
    time: "17:30 AM - 8:00 AM",
    title: "Event Name",
    location: "india",
  },
  {
    id: 1,
    image: events_2,
    date: "05",
    month: "Nov",
    time: "10:00 PM - 11:00 AM",
    title: "Event Name",
    location: "india",
  },
  {
    id: 2,
    image: events_3,
    date: "22",
    month: "May",
    time: "10:00 AM - 11:00 AM",
    title: "Event Name",
    location: "india",
  },
];
export const news = [
  {
    id: 1,
    location: "india",
    title: "Royal Parks Half Marathon",
    description:
      "On the other hand denounce with righteous indignations dislike men who are so beguiled.",
    date: "31",
    month: "May",
    time: "10:00 AM",
    image: news_1,
  },
  {
    id: 2,
    location: "tamilnadu",
    title: "Some Other Event",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15",
    month: "Mar",
    time: "10:00 AM",
    image: news_2,
  },
];

export const live = [
  {
    id: 0,
    title: "Chat with a Live",
    description:
      "Let’s chat with our live experts to get answer your questions.",
    buttonText: "LIVE CHAT",
    hoverbg: hoverbg,
    link: "https://wa.me/your-whatsapp-number",
  },
  {
    id: 1,
    title: "Become a Partner",
    description:
      "Become a business partner with us and get an opportunity to grow.",
    buttonText: "JOIN WITH US",
    hoverbg: hoverbg,
    link: "https://wa.me/your-whatsapp-number",
  },
  {
    id: 2,
    title: "Donation",
    description:
      "You can find the answers in our list of frequently asked questions.",
    buttonText: "GET ANSWER",
    hoverbg: hoverbg,
    link: "https://your-donation-page.com",
  },
];

export const servicemenulist = [
  {
    id: 0,
    title: "Social Service",
    color: "#FD8348", // Orange
    image: hero_banner,
    description: "Universal Peace Foundation in Nallagoundapalayam, Coimbatore, is a sanctuary for the underprivileged, offering care to starving children, differently-abled individuals, the elderly, and the destitute. It provides food, shelter, medical care, and education, empowering individuals to lead a dignified life. The foundation ensures proper nourishment and education for children, specialized care for the differently-abled, and a safe environment for the elderly. It also conducts social awareness programs, skill development initiatives, and rehabilitation activities to help individuals reintegrate into society, striving to create a compassionate world where no one is left behind.",
    benefits: [
      { description: " – Provides food, education, and healthcare for underprivileged children.",title: "Child Welfare ",  },
      { description: " – Offers specialized care, skill training, and rehabilitation programs.",title: "Support for the Differently-Abled ",},
      { description: " – Ensures a safe, loving environment with proper medical support and shelter.", title: "Elderly Care ", },
      { description: " – Conducts awareness programs, skill development, and reintegration initiatives.", title: "Community Empowerment ", },
    ],
  },
  {
    id: 1,
    title: "Education Service",
    color: "#FD8348", // Orange
    image: education,
    description: "Universal Peace Foundation supports students from nearby villages with free evening coaching for over 100 students within the ashram campus. Tribals from Thirumorthi Hills receive essential resources like clothing and free computers to enhance learning. UPF also provides necessities such as water, medicines, and groceries based on community needs. A free tuition center with a library has been established for underprivileged individuals, ensuring proper guidance from volunteers. With a strong focus on tribal welfare, UPF is dedicated to uplifting these communities by addressing their educational and fundamental needs.",
    benefits: [
      { description: " – Provides education support for over 100 village students at the ashram.", title: "Free Evening Coaching ",  },
      { description: " – Distributes clothing, free computers, and learning resources to Thirumorthi Hills tribals.", title: "Support for Tribals ",  },
      { description: " – Offers water, medicines, and groceries based on community needs.", title: "Basic Necessities  "},
      { description: " – Established a free education center with library facilities for underprivileged individuals.",title: "Tuition & Library ",  },
    ],
  },
  {
    id: 2,
    title: "Natural Service",
    color: "#FD8348", // Orange
    image: natural,
    description: "Universal Peace Foundation is committed to environmental sustainability, having planted over 3,000 trees on its campus and distributing over 100,000 saplings to promote afforestation. Through its social forestry system, UPF fosters biodiversity, enhances air quality, and encourages widespread conservation efforts. The foundation conducts awareness programs on tree plantation and sustainable living while ensuring regular maintenance of planted trees. By integrating environmental consciousness into its initiatives, UPF nurtures human lives and safeguards nature for future generations.",
    benefits: [
      { description: " – Planted over 3,000 trees on campus and distributed 100,000+ saplings.", title: "Tree Plantation Drive ", },
      { description: " – Promotes biodiversity, enhances air quality, and encourages conservation.", title: "Social Forestry ",  },
      { description: " – Conducts tree plantation and sustainable living initiatives.", title: "Awareness Programs ", },
      { description: " – Ensures proper care of planted trees for lasting environmental benefits.",title: "Long-Term Maintenance ",  },
    ],
  },
  {
    id: 3,
    title: "spirutal Service",
    color: "#FD8348", // Orange
    image: spirutal,
    description: "Universal Peace Foundation promotes the Indian inner sciences of Yoga, Meditation, Pranayama, Dhiyana, and Vipassana, making these ancient practices accessible to all. Guided by Guruji Shivathma, UPF conducts specialized classes to help individuals attain inner peace, balance, and well-being. These sessions are available through course bookings and appointments for personalized guidance. By imparting spiritual and mindfulness techniques, the foundation empowers individuals to lead a harmonious and enlightened life, fostering mental clarity, emotional stability, and holistic well-being.",
    benefits: [
      { description: " – Promotes ancient practices like Yoga, Pranayama, Dhiyana, and Vipassana.", title: "Yoga & Meditation ",  },
      { description: " – Specialized sessions for inner peace, balance, and well-being.", title: "Guidance from Guruji Shivathma ",  },
      { description: " – Available through course bookings and appointments.", title: "Personalized Learning  ",  },
      { description: " – Enhances mental clarity, emotional stability, and spiritual growth.", title: "Holistic Well-Being ", },
    ],
  },
  {
    id: 4,
    title: "Medical Service",
    color: "#FD8348", // Orange
    image: medicalservice,
    description: "Universal Peace Foundation provides free hospital and ambulance services, ensuring timely medical assistance for the underprivileged. It conducts bi-monthly medical camps within the ashram and frequently organizes free health camps in nearby villages, offering checkups and medicines. UPF’s healthcare initiatives extend across six districts in Tamil Nadu through its branches. Its dedicated medical team provides quality care, preventive treatments, and awareness programs, bridging gaps in medical accessibility. Through continuous efforts, UPF remains committed to serving humanity with compassion and care.",
    benefits: [
      { description: " – Provides timely medical assistance to the underprivileged.",title: "Free Hospital & Ambulance Services ", },
      { description: " – Conducts bi-monthly health camps at the ashram and in nearby villages.", title: "Regular Medical Camps ", },
      { description: " – Healthcare services extend across six districts in Tamil Nadu.", title: "Extensive Reach  ",  },
      { description: " – Offers free checkups, medicines, and health education programs.", title: "Preventive Care & Awareness ",  },
    ],
   
  },

];