import {
  about_guruji,
  Amahathma,
  Bmahathma,
  DMotherTerasascaled,
  EDR,
  education,
  events_1,
  events_2,
  events_3,
  FSevaRatna,
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
  childwelfare,
  supportda,
  eldercare,
  Basicnecessities,
  tribal,
  library,
  tree,
  Treeawareness,
  yoga,
  holistic,
} from "@/assets";
import { Crosshair, Eye, Goal } from "lucide-react";
import { FaCalendarAlt, FaHandsHelping, FaUser } from "react-icons/fa";
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
    link: "https://www.facebook.com/UniversalPeaceFoundation/photos_by",
  },
  {
    component: FaYoutube,
    color: "#FF0000",
    link: "https://www.youtube.com/channel/UCGtiRw190jv2KHeDzyvSKRA",
  },
  {
    component: FaInstagram,
    color: "#C13584",
    link: "https://www.instagram.com/guruji.shivathma/",
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
        link: "https://www.facebook.com/UniversalPeaceFoundation/photos_by",
      },
      {
        id: 1,
        icon: FaInstagram,
        color: "#C13584",
        link: "https://www.instagram.com/guruji.shivathma/",
      },
      {
        id: 2,
        icon: FaYoutube,
        color: "#FF0000",
        link: "https://www.youtube.com/channel/UCGtiRw190jv2KHeDzyvSKRA",
      },
      {
        id: 3,
        icon: FaLinkedin,
        color: "#3b5998",
        link: "https://www.linkedin.com/in/guruji-shivathma-b891ba100/",
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
        url: "/events-home",
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
        path: "/about-us#certificate",
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
    title: "Beacon of Hope for the Destitute",
    content:
      "Universal Peace Foundation provides shelter and support to orphans, elderly, and people with disabilities. It works to create a fair and peaceful society based on Indian values. Funded by Guruji Shivathma, this trust has been helping people for over 10 years. It is a safe home for those in need.",
  },
  {
    id: 2,
    sets: [
      {
        id: 0,
        year: 2000,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "A Lifelong Mission of Compassion and Service",
        description:
          "Even from childhood, his heart was with the poor who struggled for a single meal.He started the Home as his dream project to serve the needy and helpless.Universal Peace Foundation was founded to support the downtrodden and homeless.Its mission is to provide free food, clothing, shelter, education, and medical care.",
      },
      {
        id: 1,
        year: 2011,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title: "Honored for Humanity: A Legacy of Service and Recognition",
        description:
          "For his noble service, he was honored by the Collector of Coimbatore with the title 'Arivoli Siva'.Appreciated by Government Awards, his dedication continues to inspire many.The UPF Home has grown, now serving and sheltering over 100+ individuals.It is a great privilege to provide food and accommodation to those in need",
      },
      {
        id: 2,
        year: 2021,
        img: "https://dummyimage.com/350x400/dedede/dedede",
        title:
          "Universal Peace Foundation: Spreading Hope and Care Across Communities",
        description:
          "Universal Peace Foundation – A Beacon of Hope for the DestituteWe are an iconic home for the needy, serving the destitute in Coimbatore and beyond.Spreading Love & Care with 25+ Branches, bringing hope to countless lives.With compassion at our core, we provide shelter and care to those in need.",
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
          "We would enhance our service day to day of life, enhance like fulfill the basic needs of people... peace is out primary way to reach our mission.",
      },
      {
        id: 1,
        title: "Our Vision",
        icon: Eye,
        letter: "V",
        description:
          "Equal every one facility and basic needs must reach every people around the world, and we marching towards to vision by peace.",
      },
      {
        id: 2,
        title: "Our Goal",
        letter: "G",
        icon: Goal,
        description:
          "The Universal Peace Foundation seeks to expand beyond 25+ branches, providing essentials like food, shelter, and medical aid.",
      },
    ],
  },
  {
    id: 4,
    title: "About Guruji",
    heading: "Guruji Shivathma: A Beacon of Hope for the Underprivileged",
    description:
      "Guruji Shivathma was born into poverty in 1962 in Coimbatore, Tamil Nadu. As a child, he struggled for food and worked as a laborer while pursuing his education. Despite hardships, he excelled academically and was deeply moved by the suffering of the poor. new He vowed to fight hunger and poverty, especially for children, women, and the elderly. After earning a B.Com, a Diploma in Siddha Medicine, and Human Psychology, he became a successful Siddha practitioner and counselor. With his savings and proceeds from his ancestral property, he bought 8.68 acres of land near Coimbatore. new In 2000, he founded the Universal Peace Foundation to provide free food, shelter, education, and medical care. The foundation supports people regardless of their background and empowers them through vocational training. new Today, the organization operates in six districts of Tamil Nadu. Over 960 people benefit from its humanitarian services",
    image: about_guruji,
    imageAlt: "GurjiAboutPic",
  },
  {
    id: 5,
    certificates: [
      {
        id: 0,
        title: "Mahatma Gandhi Award",
        image: { src: Amahathma, alt: "Mahatma Gandhi Award" },
        description:
          "This award plaque recognizes Dr. A. Sivasubramaniam of the Universal Peace Foundation, Coimbatore, for his outstanding accomplishments and excellence in the field of social work. Presented by the Consumer Awareness Organization as part of the CAO Excellence Awards 2020, the award highlights his contributions to humanitarian efforts. The event is endorsed by NGO partnerships under the Planning Commission of the Government of India and the United Nations NGO Branch.",
        link: "#",
      },
      {
        id: 1,
        title: "Honoring Social Excellence",
        image: { src: Bmahathma, alt: "Honoring Social Excellence" },
        description:
          "This prestigious Mahatma Gandhi Award was presented to Dr. A. Sivasubramaniam of the Universal Peace Foundation, Coimbatore, in recognition of his outstanding contributions to social work. The award was given as part of the CAO Excellence Awards 2020 on National Consumer Day. The event was held at COINDIA - SIEMA Building, Coimbatore, on February 5, 2020, and was supported by NGO partnerships under the Planning Commission of the Government of India and the United Nations NGO Branch. The elegantly crafted plaque signifies dedication to humanitarian service and social excellence.",
        link: "#",
      },
      {
        id: 2,
        title: "Mother Teresa Humanity",
        image: { src: DMotherTerasascaled, alt: "Mother Teresa Humanity" },
        description:
          "This humanitarian award was presented at an event organized by Face Events on December 21, 2019, at S.R.S Tower, Faridabad, Haryana. The award was given to Mr. A. Siva Subramaniam for his exceptional contributions in the field of Health & Education. The event was hosted by Face Group and Face News, a media, events, and film organization. The award also features the image of Mother Teresa, symbolizing its core values of compassion and service to humanity.",
        link: "#",
      },
      {
        id: 3,
        title: "Doctor of Letters",
        image: { src: EDR, alt: "Doctor of Letters" },
        description:
          "This honorary doctorate was conferred upon Dr. Guruji Shivathma, the Founder of the Universal Peace Foundation, Coimbatore, by the University of New Jerusalem.The award recognizes his various contributions to society and youth development. It grants all rights and privileges associated with this academic honor. The degree was officially awarded on December 8, 2018, at Hotel Chennai Gateway, Chennai.",
        link: "#",
      },
      {
        id: 4,
        title: "Seva Ratna Award",
        image: { src: FSevaRatna, alt: "Seva Ratna Award" },
        description:
          "The Seva Ratna Award – 2018 was presented by Irattaipaathai Tamil Newspaper to Guruji Shivathma of the Universal Peace Foundation, Coimbatore, in recognition of his outstanding services to society. The award ceremony took place on December 8, 2018, at the Chennai Gateway Auditorium, Chennai, with Hon'ble Mr. Justice K. Swamidurai (Retd. Judge, High Court of Madras) as the chief guest. The event was officiated by Dr. S. S. Pari Parameswaran, Governor of Lions Club International, and V. Sivaperumal, Editor of Irattaipaathai News Paper.",
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

export const live = [
  {
    id: 0,
    title: "Support Our Cause",
    description:
      "Connect with us to learn how you can support our mission and make an impact.",
    buttonText: "CHAT NOW",
    hoverbg: hoverbg,
    link: "https://wa.me/919842220285",
  },
  {
    id: 1,
    title: "Volunteer With Us",
    description:
      "Join our team and be a part of positive change in the community.",
    buttonText: "JOIN US",
    hoverbg: hoverbg,
    link: "https://wa.me/919842220285",
  },
  {
    id: 2,
    title: "Make a Donation",
    description:
      "Your contribution helps us continue our efforts to support those in need.",
    buttonText: "DONATE NOW",
    hoverbg: hoverbg,
    link: "/donation",
  },
];

export const servicemenulist = [
  {
    id: 0,
    title: "Social Service",
    description:
      "Universal Peace Foundation in Nallagoundapalayam, Coimbatore, is a sanctuary for the underprivileged, offering care to starving children, differently-abled individuals, the elderly, and the destitute. It provides food, shelter, medical care, and education, empowering individuals to lead a dignified life. The foundation ensures proper nourishment and education for children, specialized care for the differently-abled, and a safe environment for the elderly. It also conducts social awareness programs, skill development initiatives, and rehabilitation activities to help individuals reintegrate into society, striving to create a compassionate world where no one is left behind.",
    donationText:
      "Donate today and help transform lives through healthcare, education, and compassionate service.",
    benefits: [
      {
        description:
          " The Universal Peace Foundation’s Child Welfare program focuses on ensuring the well-being of underprivileged children by providing essential services like food, education, healthcare, and emotional support. The foundation offers nutritious meals, free education, and regular medical care, helping children grow healthily and learn effectively. It also provides a safe, nurturing environment and counseling to support emotional well-being. Additionally, rehabilitation programs aim to reintegrate children into society, empowering them to become self-reliant and live a dignified life. Through these efforts, the foundation strives to create a brighter future for disadvantaged children.",
        title: "Child Welfare ",
        image: childwelfare,
      },

      {
        description:
          " The Universal Peace Foundation offers specialized care, skill training, and rehabilitation for differently-abled individuals. It provides personalized support to enhance their physical, emotional, and mental well-being. The foundation focuses on equipping them with vocational skills, offering rehabilitation programs, and ensuring they have access to the resources needed to live independently and with dignity. Through these initiatives, the foundation helps differently-abled individuals integrate into society and lead fulfilling lives.",
        title: "Support for the Differently-Abled ",
        image: supportda,
      },

      {
        description:
          " The Universal Peace Foundation provides elderly care by ensuring a safe, loving environment with proper medical support and shelter. The foundation focuses on offering comfort, security, and specialized care for senior citizens, addressing their physical, emotional, and social needs. It creates a nurturing space where the elderly can live with dignity, receive healthcare services, and enjoy companionship in their later years. By providing not only physical care but also mental and emotional support, the foundation fosters a sense of belonging and purpose. Through these efforts, the foundation significantly enhances the quality of life for elderly individuals, helping them feel respected, valued, and cared for in a community that prioritizes their well-being.",
        title: "Elderly Care ",
        image: eldercare,
      },

      {
        description:
          " The Universal Peace Foundation focuses on community empowerment by conducting awareness programs, skill development, and reintegration initiatives. These efforts are aimed at educating and uplifting communities, particularly the underprivileged, by providing the tools and knowledge needed to improve their lives. The foundation organizes awareness programs to address social issues, offers skill training to enhance employability, and runs reintegration initiatives to help individuals re-enter society with confidence. Through these programs, the foundation fosters self-reliance, personal growth, and social responsibility, empowering individuals to contribute positively to their communities.",
        title: "Community Empowerment ",
        image: hero_banner,
      },
    ],
  },
  {
    id: 1,
    title: "Education Service",
    description:
      "Universal Peace Foundation supports students from nearby villages with free evening coaching for over 100 students within the ashram campus. Tribals from Thirumorthi Hills receive essential resources like clothing and free computers to enhance learning. UPF also provides necessities such as water, medicines, and groceries based on community needs. A free tuition center with a library has been established for underprivileged individuals, ensuring proper guidance from volunteers. With a strong focus on tribal welfare, UPF is dedicated to uplifting these communities by addressing their educational and fundamental needs.",
    donationText:
      "Your donation can empower futures by providing education, resources, and opportunities for those in need.",
    benefits: [
      {
        description:
          "The Universal Peace Foundation provides education support for over 100 village students through free evening coaching at the ashram. This initiative aims to enhance the learning opportunities for students from nearby villages, offering them extra academic assistance outside of regular school hours. With dedicated volunteers and resources, the foundation ensures that these students receive the guidance they need to succeed academically and reach their full potential. By providing free tuition and support, UPF contributes to their educational growth and development, helping them build a brighter future.",
        title: "Free Evening Coaching ",
        image: education,
      },

      {
        description:
          " The Universal Peace Foundation (UPF) is dedicated to supporting the tribals of Thirumorthi Hills by distributing clothing, free computers, and other essential learning resources. These efforts aim to enhance the educational opportunities available to tribal communities, empowering them with the tools they need to succeed. In addition to providing educational materials, UPF also addresses their basic needs by supplying necessities such as water, medicines, and groceries based on community requirements. Through these initiatives, UPF plays a crucial role in improving the lives of tribal individuals, ensuring they have the resources to thrive.",
        title: "Support for Tribals ",
        image: tribal,
      },

      {
        description:
          "The Universal Peace Foundation addresses the essential needs of communities by offering water, medicines, and groceries based on the specific needs of the people. This initiative ensures that individuals, particularly those in underprivileged areas, have access to the basic resources required for survival and well-being. By providing these necessities, the foundation helps improve the quality of life for many, ensuring that families and individuals can meet their daily needs and stay healthy. This support is especially crucial during times of hardship, contributing to the overall welfare of the community.",
        title: "Basic Necessities ",
        image: Basicnecessities,
      },

      {
        description:
          "The Universal Peace Foundation has established a free education center with library facilities for underprivileged individuals. This initiative provides access to quality education and resources that may otherwise be out of reach for many. The education center offers free tuition to help students improve their academic performance, while the library provides a wide range of learning materials to foster self-study and personal growth. Through these efforts, the foundation ensures that individuals from disadvantaged backgrounds have the opportunity to learn, grow, and build a better future.",
        title: "Tuition & Library ",
        image: library,
      },
    ],
  },
  {
    id: 2,
    title: "Natural Service",
    description:
      "Universal Peace Foundation is committed to environmental sustainability, having planted over 3,000 trees on its campus and distributing over 100,000 saplings to promote afforestation. Through its social forestry system, UPF fosters biodiversity, enhances air quality, and encourages widespread conservation efforts. The foundation conducts awareness programs on tree plantation and sustainable living while ensuring regular maintenance of planted trees. By integrating environmental consciousness into its initiatives, UPF nurtures human lives and safeguards nature for future generations.",
    donationText:
      "Donate to support environmental sustainability, fostering a greener future through tree planting and conservation efforts.",
    benefits: [
      {
        description:
          "The Universal Peace Foundation has made a significant commitment to environmental sustainability through its Tree Plantation Drive. Over 3,000 trees have been planted on the foundation's campus, and more than 100,000 saplings have been distributed to encourage afforestation. This initiative not only fosters biodiversity but also enhances air quality and promotes conservation efforts. By conducting awareness programs and ensuring regular maintenance of the planted trees, UPF works to integrate environmental consciousness into the community, safeguarding nature for future generations while nurturing a greener, healthier planet.",
        title: "Tree Plantation Drive ",
        image: tree,
      },

      {
        description:
          " The Universal Peace Foundation’s Social Forestry initiative promotes biodiversity, enhances air quality, and encourages widespread conservation efforts. Through this program, UPF integrates tree planting and forest management into the community, contributing to the restoration of natural habitats and the protection of local ecosystems. By fostering a balanced environment, UPF helps sustain natural resources while educating the community on the importance of preserving nature. This initiative plays a vital role in promoting long-term environmental health and encouraging a culture of sustainability and conservation.",
        title: "Social Forestry ",
        image: natural,
      },

      {
        description:
          "The Universal Peace Foundation conducts awareness programs focused on tree plantation and sustainable living. These programs aim to educate the community about the importance of environmental conservation, sustainable practices, and the benefits of planting trees. By raising awareness and promoting eco-friendly habits, UPF encourages individuals to take active steps toward protecting the environment. Through these initiatives, the foundation fosters a sense of responsibility for nature, helping people understand how their actions contribute to a healthier planet and a more sustainable future.",
        title: "Awareness Programs ",
        image: Treeawareness,
      },

      {
        description:
          "The Universal Peace Foundation emphasizes the long-term maintenance of its planted trees to ensure lasting environmental benefits. This initiative focuses on regularly monitoring and caring for the trees, ensuring their growth and sustainability. By providing the necessary attention, including watering, pruning, and protection from pests, UPF ensures that the trees thrive and continue to contribute to biodiversity, air quality, and ecosystem health for years to come. This commitment to maintenance supports the foundation's long-term environmental goals, fostering a greener, healthier environment for future generations.",
        title: "Long-Term Maintenance ",
        image: natural,
      },
    ],
  },
  {
    id: 3,
    title: "spirutal Service",
    description:
      "Universal Peace Foundation promotes the Indian inner sciences of Yoga, Meditation, Pranayama, Dhiyana, and Vipassana, making these ancient practices accessible to all. Guided by Guruji Shivathma, UPF conducts specialized classes to help individuals attain inner peace, balance, and well-being. These sessions are available through course bookings and appointments for personalized guidance. By imparting spiritual and mindfulness techniques, the foundation empowers individuals to lead a harmonious and enlightened life, fostering mental clarity, emotional stability, and holistic well-being.",
    donationText:
      "Contribute to spiritual growth and well-being by supporting mindfulness, meditation, and transformative practices for all.",
    benefits: [
      {
        description:
          "The Universal Peace Foundation promotes the Indian inner sciences of Yoga, Pranayama, Dhiyana, and Vipassana, making these ancient practices accessible to all. Through specialized classes guided by Guruji Shivathma, UPF helps individuals achieve inner peace, balance, and overall well-being. These practices foster mental clarity, emotional stability, and holistic health, empowering individuals to lead a harmonious and enlightened life. By integrating spiritual and mindfulness techniques, the foundation supports personal growth and self-discovery.",
        title: "Yoga & Meditation ",
        image: yoga,
      },

      {
        description:
          " The Universal Peace Foundation offers specialized sessions led by Guruji Shivathma, focusing on inner peace, balance, and overall well-being. These sessions provide personalized guidance in Yoga, Meditation, Pranayama, Dhiyana, and Vipassana, helping individuals deepen their spiritual practices. Through these teachings, participants cultivate mental clarity, emotional stability, and self-awareness, empowering them to lead a harmonious and enlightened life.",
        title: "Guidance from Guruji Shivathma ",
        image: spirutal,
      },

      {
        description:
          " The Universal Peace Foundation offers personalized learning opportunities through course bookings and appointments, allowing individuals to deepen their practice of Yoga, Meditation, Pranayama, Dhiyana, and Vipassana at their own pace. These tailored sessions provide focused guidance to help participants achieve inner peace, mental clarity, and emotional balance. By offering customized learning experiences, UPF ensures that individuals receive the support and knowledge needed to embark on a transformative spiritual journey.",
        title: "Personalized Learning  ",
        image: spirutal,
      },

      {
        description:
          "The Universal Peace Foundation promotes holistic well-being by enhancing mental clarity, emotional stability, and spiritual growth through its teachings and practices. By integrating Yoga, Meditation, Pranayama, Dhiyana, and Vipassana, UPF helps individuals cultivate inner peace and a balanced life. These practices empower individuals to manage stress, develop self-awareness, and achieve a deeper connection with themselves, fostering a harmonious and enlightened way of living.",
        title: "Holistic Well-Being ",
        image: holistic,
      },
    ],
  },
  {
    id: 4,
    title: "Medical Service",
    description:
      "Universal Peace Foundation provides free hospital and ambulance services, ensuring timely medical assistance for the underprivileged. It conducts bi-monthly medical camps within the ashram and frequently organizes free health camps in nearby villages, offering checkups and medicines. UPF’s healthcare initiatives extend across six districts in Tamil Nadu through its branches. Its dedicated medical team provides quality care, preventive treatments, and awareness programs, bridging gaps in medical accessibility. Through continuous efforts, UPF remains committed to serving humanity with compassion and care.",
    donationText:
      "Your donation can provide life-saving medical care, offering health, hope, and healing to those in need.",
    benefits: [
      {
        description:
          "The Universal Peace Foundation offers free hospital and ambulance services, ensuring timely medical assistance for the underprivileged. These services provide emergency care, checkups, and essential treatments, bridging gaps in healthcare accessibility. UPF’s dedicated medical team works tirelessly to deliver quality care and preventive treatments, ensuring that those in need receive immediate and effective medical support. Through these compassionate initiatives, the foundation upholds its commitment to serving humanity and promoting overall well-being.",
        title: "Free Hospital & Ambulance Services ",
        image: medicalservice,
      },

      {
        description:
          "The Universal Peace Foundation conducts bi-monthly health camps at the ashram and in nearby villages, ensuring that underprivileged individuals receive timely medical checkups, essential medicines, and preventive care. These camps focus on early diagnosis, disease prevention, and health awareness, addressing the medical needs of those who lack access to proper healthcare facilities.With the support of a dedicated medical team, UPF provides specialized consultations, screenings, and treatments for various health conditions. Additionally, awareness programs educate communities about hygiene, nutrition, and disease prevention, empowering them to lead healthier lives. Through these ongoing efforts, the foundation strives to create a healthier and more self-sufficient society by making quality healthcare accessible to all.",
        title: "Regular Medical Camps ",
        image: medicalservice,
      },

      {
        description:
          " The Universal Peace Foundation’s healthcare services extend across six districts in Tamil Nadu, ensuring that medical assistance reaches underprivileged communities in remote and rural areas. Through its various branches, UPF organizes free medical camps, checkups, and treatments, making quality healthcare accessible to those in need.With a dedicated team of doctors and healthcare professionals, the foundation provides preventive care, essential medicines, and emergency support, bridging the gap in medical accessibility. By expanding its reach, UPF continues to serve humanity with compassion, striving to improve the overall health and well-being of disadvantaged individuals across the region.",
        title: "Extensive Reach  ",
        image: medicalservice,
      },

      {
        description:
          " The Universal Peace Foundation offers free checkups, medicines, and health education programs to underprivileged communities. These initiatives focus on preventive care by providing early detection of health conditions and offering necessary treatments to prevent further complications. Through its health education programs, UPF raises awareness about important topics like hygiene, nutrition, disease prevention, and healthy lifestyles, empowering individuals to take charge of their health. By combining medical care with education, UPF helps build healthier communities and reduces the spread of preventable diseases.",
        title: "Preventive Care & Awareness ",
        image: medicalservice,
      },
    ],
  },
];

export const SEO = [
  {
    id: 0,
    title: "Universal Peace Foundation - Indian Inner Sciences",
    description:
      "Universal Peace Foundation promotes the Indian inner sciences of Yoga, Meditation, Pranayama, Dhiyana, and Vipassana, making these ancient practices accessible to all. Guided by Guruji Shivathma, UPF conducts specialized classes to help individuals attain inner peace, balance, and well-being.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "Yoga",
        "Meditation",
        "Pranayama",
        "Dhiyana",
        "Vipassana",
        "Inner Sciences",
        "Well-being",
        "Guruji Shivathma",
        "Spiritual Awakening",
        "Mindfulness",
        "Holistic Healing",
        "CBE NGO",
        "Coimbatore NGO",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "Universal Peace Foundation - Indian Inner Sciences",
        description:
          "UPF promotes Yoga, Meditation, Pranayama, Dhiyana, and Vipassana to help individuals achieve inner peace and balance. Guided by Guruji Shivathma, this NGO in Coimbatore is dedicated to holistic well-being.",
        url: "https://www.upfindia.org", // Replace with the actual website link
        image: "https://www.upfindia.org/og-image.jpg", // Replace with the actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "Universal Peace Foundation - Indian Inner Sciences",
        description:
          "Discover the transformative power of Yoga, Meditation, and Inner Sciences at Universal Peace Foundation, Coimbatore.",
        image: "https://www.upfindia.org/twitter-image.jpg", // Replace with the actual image link
      },
    },
    location: "Coimbatore, India",
  },
  {
    id: 1,
    title: "Universal Peace Foundation - About Us",
    description:
      "Discover the mission and vision of Universal Peace Foundation, dedicated to promoting Indian inner sciences like Yoga, Meditation, Pranayama, Dhiyana, and Vipassana. Guided by Guruji Shivathma, UPF offers specialized classes, spiritual guidance, and holistic well-being programs to help individuals achieve inner peace and self-realization.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "About UPF",
        "Yoga",
        "Meditation",
        "Pranayama",
        "Dhiyana",
        "Vipassana",
        "Inner Sciences",
        "Holistic Well-being",
        "Guruji Shivathma",
        "Spiritual Guidance",
        "Self-Realization",
        "Coimbatore NGO",
        "CBE NGO",
        "Mindfulness",
        "Healing Practices",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "About Universal Peace Foundation",
        description:
          "Learn more about Universal Peace Foundation’s mission in spreading the inner sciences of Yoga, Meditation, and Spiritual Well-being under the guidance of Guruji Shivathma.",
        url: "https://www.upfindia.org/about", // Replace with actual URL
        image: "https://www.upfindia.org/about-og-image.jpg", // Replace with actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "About Universal Peace Foundation",
        description:
          "Explore the mission and teachings of Universal Peace Foundation, bringing Yoga, Meditation, and Spiritual Growth to all.",
        image: "https://www.upfindia.org/about-twitter-image.jpg", // Replace with actual image link
      },
    },
    location: "Coimbatore, India",
  },
  {
    id: 2,
    title: "Universal Peace Foundation - Medical Services & Events",
    description:
      "Stay updated with the latest medical service initiatives and events by Universal Peace Foundation. UPF provides free hospital and ambulance services, bi-monthly medical camps, and free health checkups across six districts in Tamil Nadu, benefiting underprivileged communities.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "Medical Camps",
        "Free Healthcare",
        "Ambulance Service",
        "Health Checkups",
        "Bi-monthly Medical Camps",
        "Tamil Nadu Health Initiatives",
        "Community Healthcare",
        "UPF Health Camps",
        "NGO Medical Services",
        "Coimbatore NGO",
        "Free Medicine Distribution",
        "Well-being Programs",
        "UPF Events",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "Universal Peace Foundation - Medical Services & Events",
        description:
          "Explore UPF’s medical service initiatives, including free ambulance services, bi-monthly health checkups, and medical camps benefiting communities across Tamil Nadu.",
        url: "https://www.upfindia.org/news-events", // Replace with actual URL
        image: "https://www.upfindia.org/news-events-og-image.jpg", // Replace with actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "Universal Peace Foundation - Medical Services & Events",
        description:
          "Join Universal Peace Foundation’s healthcare initiatives, offering free ambulance services, medical camps, and well-being programs for underprivileged communities.",
        image: "https://www.upfindia.org/news-events-twitter-image.jpg", // Replace with actual image link
      },
    },
    location: "Tamil Nadu, India",
  },
  {
    id: 3,
    title: "Universal Peace Foundation - Yoga & Meditation Services",
    description:
      "Experience personalized Yoga and Meditation sessions with Universal Peace Foundation. Book courses and appointments to deepen your practice in Pranayama, Dhiyana, and Vipassana for mental clarity, emotional balance, and inner peace.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "Yoga Classes",
        "Meditation Sessions",
        "Pranayama",
        "Dhiyana",
        "Vipassana",
        "Spiritual Healing",
        "Well-being Programs",
        "Personalized Yoga Courses",
        "Mindfulness Training",
        "Inner Peace",
        "Emotional Balance",
        "Mental Clarity",
        "Self-awareness",
        "UPF Spiritual Services",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "Universal Peace Foundation - Yoga & Meditation Services",
        description:
          "Join Universal Peace Foundation’s Yoga and Meditation services. Book personalized courses and sessions to enhance mindfulness, emotional well-being, and self-awareness.",
        url: "https://www.upfindia.org/services", // Replace with actual URL
        image: "https://www.upfindia.org/services-og-image.jpg", // Replace with actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "Universal Peace Foundation - Yoga & Meditation Services",
        description:
          "Deepen your Yoga and Meditation practice with Universal Peace Foundation. Book guided courses and personalized sessions for inner peace and well-being.",
        image: "https://www.upfindia.org/services-twitter-image.jpg", // Replace with actual image link
      },
    },
    location: "Coimbatore, India",
  },
  {
    id: 4,
    title: "Universal Peace Foundation - Contact Us",
    description:
      "Get in touch with Universal Peace Foundation for inquiries about our free medical services, yoga and meditation programs, and community initiatives. We provide free hospital and ambulance services, along with bi-monthly health camps across Tamil Nadu.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "Contact UPF",
        "Free Medical Services",
        "Ambulance Service",
        "Health Camps",
        "Yoga Programs",
        "Meditation Courses",
        "Holistic Healing",
        "Coimbatore NGO",
        "Tamil Nadu Health Services",
        "Spiritual Guidance",
        "Well-being Programs",
        "Community Healthcare",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "Universal Peace Foundation - Contact Us",
        description:
          "Reach out to Universal Peace Foundation for inquiries about free medical services, yoga, meditation, and community healthcare programs. We are here to assist you.",
        url: "https://www.upfindia.org/contact", // Replace with actual URL
        image: "https://www.upfindia.org/contact-og-image.jpg", // Replace with actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "Universal Peace Foundation - Contact Us",
        description:
          "Connect with Universal Peace Foundation for medical services, health camps, and spiritual programs. We are here to support your well-being.",
        image: "https://www.upfindia.org/contact-twitter-image.jpg", // Replace with actual image link
      },
    },
    location: "Coimbatore, India",
  },
  {
    id: 5,
    title: "Universal Peace Foundation - Support Holistic Well-being",
    description:
      "Support Universal Peace Foundation in promoting holistic well-being through Yoga, Meditation, Pranayama, Dhiyana, and Vipassana. Your donation helps provide free medical services, spiritual guidance, and community health programs, making a difference in countless lives.",
    meta: {
      keywords: [
        "Universal Peace Foundation",
        "Donate to UPF",
        "Support Holistic Well-being",
        "Yoga for Inner Peace",
        "Meditation for Mental Clarity",
        "Spiritual Growth",
        "Pranayama Benefits",
        "Vipassana Practice",
        "Dhiyana Meditation",
        "Stress Management",
        "Self-awareness",
        "Coimbatore NGO",
        "Nonprofit Donations",
        "Health and Wellness Programs",
      ],
      author: "Universal Peace Foundation",
      og: {
        title: "Universal Peace Foundation - Donate for Holistic Well-being",
        description:
          "Contribute to Universal Peace Foundation's mission of enhancing well-being through Yoga, Meditation, and spiritual guidance. Your donation supports free medical services and community initiatives.",
        url: "https://www.upfindia.org/donate", // Replace with actual URL
        image: "https://www.upfindia.org/donate-og-image.jpg", // Replace with actual image link
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@UPFIndia", // Replace with actual Twitter handle if available
        title: "Universal Peace Foundation - Donate for Holistic Well-being",
        description:
          "Make a difference by supporting Universal Peace Foundation’s efforts in Yoga, Meditation, and community health services. Donate today!",
        image: "https://www.upfindia.org/donate-twitter-image.jpg", // Replace with actual image link
      },
    },
    location: "Coimbatore, India",
  },
];
