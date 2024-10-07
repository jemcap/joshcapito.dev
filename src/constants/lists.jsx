import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextIcon,
  TailwindIcon,
  LinkedInIcon,
  GithubIcon,
} from "../utils/utils";

import MealMasterImg from "../assets/meal_master.png";
import NovaPerformanceSite from "../assets/nova_performance_site.png";
import SolaceFurnitures from "../assets/solace_furnitures.png";
import Sprintyper from "../assets/sprintyper.png";

export const OriginalWebsiteLink = ({ children }) => {
  return (
    <a
      href="https://www.nova-performance.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 font-bold"
    >
      {children}
    </a>
  );
};

export const techStackList = [
  { id: 1, icon: <HtmlIcon />, label: "HTML5" },
  { id: 2, icon: <CssIcon />, label: "CSS3" },
  { id: 3, icon: <JavascriptIcon />, label: "JavaScript" },
  { id: 4, icon: <TypescriptIcon />, label: "TypeScript" },
  { id: 5, icon: <ReactIcon />, label: "React" },
  { id: 6, icon: <NextIcon />, label: "Next.js" },
  { id: 7, icon: <TailwindIcon />, label: "TailwindCSS" },
];

export const socialMediaIcons = [
  {
    id: 1,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/joshuaecapito/",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: <GithubIcon />,
    url: "https://github.com/jemcap",
    label: "Github",
  },
];

export const projectsList = [
  {
    id: 1,
    title: "Meal Master",
    type: "Group project",
    image: MealMasterImg,
    description:
      "Meal Master was a group project carried out during the final weeks of the sixteen-week bootcamp in front-end web development that was built as a sophisticated yet user-friendly React application designed to simplify the process of finding and preparing meals. By allowing users to search for recipes based on specific keywords and dietary preferences, Meal Master caters to a wide range of culinary needs and preferences.",
    stack: [
      { id: 1, label: "React" },
      { id: 2, label: "Material UI" },
      { id: 3, label: "React Bootstrap" },
      { id: 4, label: "Edamam API" },
      { id: 5, label: "Axios" },
    ],
    github: "https://github.com/jemcap/meal-master",
    website: "https://mealmasterhelper.netlify.app/",
  },
  {
    id: 2,
    title: "Nova Performance — Barbell Club",
    type: "Freelance project",
    image: NovaPerformanceSite,
    description: (
      <>
        Nova Performance, an independent gym business, barbell club, and a
        respected strength sports facility. This freelance project allowed me to
        work with the gym owner to redesign and redevelop the website into a
        full-stack application. You can see the original site{" "}
        <OriginalWebsiteLink>here</OriginalWebsiteLink>. The site is fast,
        responsive, and visually appealing, enhancing user engagement and
        showcasing the gym's services.{" "}
      </>
    ),
    stack: [
      { id: 1, label: "Next.js" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "TailwindCSS" },
      { id: 4, label: "Framer Motion" },
      { id: 5, label: "Stripe API" },
      { id: 6, label: "EmailJS SDK" },
    ],
    github: "https://github.com/jemcap/novaperformance-website",
    website: "https://novaperformance.vercel.app/",
  },
  {
    id: 3,
    title: "Solace Furnitures",
    type: "Personal project",
    image: SolaceFurnitures,
    description:
      "Solace Furnitures is a modern ecommerce platform designed to provide a seamless shopping experience for furniture enthusiasts. The website leverages contemporary technologies to ensure fast, responsive, and visually appealing user interactions.",
    stack: [
      { id: 1, label: "React" },
      { id: 2, label: "TailwindCSS" },
      { id: 3, label: "React Router DOM" },
      { id: 4, label: "Redux Toolkit" },
      { id: 5, label: "React Query" },
      { id: 6, label: "Axios" },
    ],
    github: "https://github.com/jemcap/solace-furniture/",
    website: "https://solacefurnitures.netlify.app/",
  },
  {
    id: 4,
    title: "Sprintyper",
    type: "Personal project",
    image: Sprintyper,
    description:
      "Sprintyper is an innovative and engaging tool designed to help individuals improve their typing skills through practice and game-based learning. The platform features four distinct levels, each progressively increasing in complexity, challenging users to accurately type out phrases and sentences appropriate to their skill level.",
    stack: [
      { id: 1, label: "HTML5" },
      { id: 2, label: "CSS3" },
      { id: 3, label: "JavaScript" },
    ],
    github: "https://github.com/jemcap/speed-typer",
    website: "https://speed-typer-tool.netlify.app/",
  },
];
