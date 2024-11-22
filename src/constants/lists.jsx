import { v4 as uuidv4 } from "uuid";

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
  AWSIcon,
} from "../utils/utils";

import MealMasterImg from "../assets/meal_master.png";
import NovaPerformanceSite from "../assets/nova_performance_site.png";
import SolaceFurnitures from "../assets/solace_furnitures.png";
import Sprintyper from "../assets/sprintyper.png";
import BlockBuster from "../assets/blockbuster.png";
import Portfolio from "../assets/online_portfolio.png";

export const OriginalWebsiteLink = ({ children }) => {
  return (
    <a
      href="https://www.nova-performance.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 font-bold"
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

export const learningStack = [{ id: 1, icon: <AWSIcon />, label: "AWS" }];

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
    id: uuidv4(),
    title: "Meal Master",
    type: "Group project",
    image: MealMasterImg,
    description: (
      <>
        <div className="flex flex-col gap-2">
          <p>
            Meal Master, a final group project from a 16-week frontend web
            development bootcamp, is a React application designed to simplify
            meal planning. It enables users to search for recipes based on
            keywords and dietary preferences, catering to diverse culinary
            needs.
          </p>

          <div className="border-l-2 pl-5 text-sm flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                Planning meals can be overwhelming, especially for people with
                specific dietary preferences or restrictions. Users often face
                difficulty finding recipes that cater to their needs. This
                project presented an opportunity to create a streamlined,
                intuitive solution for meal discovery and planning.
              </p>
            </div>
            <div>
              <b>Solution:</b>
              <ul>
                <li>
                  • Responsive Design: A fully responsive application ensures
                  seamless usability across devices, improving accessibility for
                  diverse users.
                </li>
                <li>
                  • Custom Search Features: Users can filter recipes by
                  keywords, dietary preferences, and cuisines, making it easy to
                  find tailored meal options.
                </li>
                <li>
                  • Intuitive User Interface: A clean, organised layout
                  simplifies navigation and encourages engagement.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>
                  • Increased Efficiency: Feedback from initial users confirmed
                  that the app simplifies meal discovery and planning, saving
                  time and effort.
                </li>
                <li>
                  • Enhanced Accessibility: A responsive design ensures users
                  can access the app on any device with ease.
                </li>
                <li>
                  • Improved User Engagement: The custom filtering and
                  user-friendly interface resulted in a significant reduction in
                  bounce rates and improved overall satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
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
    id: uuidv4(),
    title: "Nova Performance — Barbell Club",
    type: "Volunteer project",
    image: NovaPerformanceSite,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            Nova Performance, an independent gym business, barbell club, and a
            respected strength sports facility. This volunteer project allowed
            me to collaborate with the gym owner to redesign and redevelop their
            website. You can{" "}
            <OriginalWebsiteLink>
              view the original site here
            </OriginalWebsiteLink>
          </p>
          <div className="border-l-2 pl-5 text-sm flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                The existing website was outdated, lacking modern functionality,
                and failing to reflect the gym's strength and ethos. It suffered
                from slow performance and inconsistent responsiveness across
                devices, leading to a poor user experience. This gave me an
                excellent opportunity to develop my skills in React, handle
                client communications, manage the project from start to finish,
                and deliver a website that not only met the client's needs but
                also elevated their online presence.
              </p>
            </div>

            <div>
              <b>Solution:</b>
              <ul>
                <li>
                  • A responsive design that adapts seamlessly across desktop,
                  tablet, and mobile devices, improving accessibility and
                  usability.
                </li>
                <li>
                  • Faster loading time by implementing performance
                  optimisation, leveraging Next.js for server-side rendering
                  (SSR) and static site generation (SSG). These methods reduced
                  initial page load times, improved SEO rankings, and ensured
                  users experienced smooth transitions between pages.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>• Load times reduced by 20%</li>
                <li>
                  • Modernised design and smoother navigation have made it
                  easier for potential clients to explore the website, improving
                  user experiences and accessilbility.
                </li>
                <li>
                  • Enhanced branding, improved colours, ensuring the design
                  aligns with the gym's professional image and core identity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    stack: [
      { id: 1, label: "Next.js" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "TailwindCSS" },
      { id: 4, label: "Framer Motion" },
      { id: 5, label: "Stripe API" },
      { id: 6, label: "EmailJS" },
    ],
    github: "https://github.com/jemcap/novaperformance-website",
    website: "https://novaperformance.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Solace Furnitures",
    type: "Exploration project",
    image: SolaceFurnitures,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            Solace Furnitures is a modern ecommerce platform designed to provide
            a great shopping experience for furniture enthusiasts.
          </p>
          <div className="border-l-2 pl-5 text-sm flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                This project was a great chance to really dive into React and
                its advanced features while building a real-world ecommerce
                platform. The goal was to create a smooth, responsive shopping
                experience that worked well across devices, improved page
                loading times, and showcased products in a visually appealing
                way—all while tackling the performance and functionality
                challenges many ecommerce sites face.
              </p>
            </div>
            <div>
              <b>Solution:</b>
              <ul>
                <li>
                  • State Management: Utilised Redux Toolkit for efficient
                  global state management, providing users with a seamless and
                  consistent experience as they browse through products.
                </li>
                <li>
                  • Data Fetching: Integrated React Query and Axios to fetch
                  product data dynamically and handle API calls effectively,
                  improving performance and reducing re-renders and number of
                  requests through caching.
                </li>
                <li>
                  • Routing: Used React Router DOM to implement smooth
                  navigation between different pages without reloading, creating
                  a faster and more fluid user experience.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>• Faster load times and improved overall performance.</li>
                <li>
                  • Responsive design that offers a smooth user experience
                  across all devices.
                </li>
                <li>
                  • Modern UI that aligns with the brand's identity, enhancing
                  the shopping experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),

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
  // {
  //   id: uuidv4(),
  //   title: "Sprintyper",
  //   type: "Game project",
  //   image: Sprintyper,
  //   description:
  //     "Sprintyper is an innovative and engaging tool designed to help individuals improve their typing skills through practice and game-based learning. The platform features four distinct levels, each progressively increasing in complexity, challenging users to accurately type out phrases and sentences appropriate to their skill level.",
  //   stack: [
  //     { id: 1, label: "HTML5" },
  //     { id: 2, label: "CSS3" },
  //     { id: 3, label: "JavaScript" },
  //   ],
  //   github: "https://github.com/jemcap/speed-typer",
  //   website: "https://speed-typer-tool.netlify.app/",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Block Buster",
  //   type: "Game project",
  //   image: BlockBuster,
  //   description: (
  //     <>
  //       <div className="flex flex-col gap-2 my-5">
  //         <p>
  //           Block Buster is a simple but engaging browser memory game designed
  //           to challenge and enhance players' cognitive skills. In this
  //           fast-paced game, players must memorise the positions of blocks that
  //           light up on the screen. As players progress through the levels, the
  //           number of blocks increases, increasing the challenge and keeping the
  //           gameplay exciting.
  //         </p>
  //       </div>
  //       <div className="border-l-2 pl-5 text-sm flex flex-col gap-5 my-5">
  //         <div>
  //           <b>Problem/Opportunity:</b>
  //           <p>
  //             Inspired by that one YouTube video from like 16 years ago{" "}
  //             <a
  //               href="https://www.youtube.com/watch?v=ravykEih1rE"
  //               target="_blank"
  //               noreferrer
  //               noopener
  //             >
  //               (watch this!)
  //             </a>
  //           </p>
  //         </div>
  //       </div>
  //     </>
  //   ),

  //   stack: [
  //     { id: 1, label: "HTML5" },
  //     { id: 2, label: "CSS3" },
  //     { id: 3, label: "JavaScript" },
  //     { id: 4, label: "Firebase" },
  //   ],
  //   github: "https://github.com/jemcap/block-buster",
  //   website: "https://blockbustergame.netlify.app/",
  // },
  {
    id: uuidv4(),
    title: "Online Portfolio",
    type: "Personal project",
    image: Portfolio,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            This project is exactly the site you're on right now! It's a
            showcase of my work and skills as a frontend developer thus far. The
            portfolio highlights various projects I've completed, each
            demonstrating my skills to create visually appealing and functional
            web applications.
          </p>
          <div className="border-l-2 pl-5 text-sm flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                This project provided an excellent opportunity to create a
                personal platform to showcase my projects, technical skills, and
                creativity while exploring advanced frontend development
                concepts. My goal was to design a modern, professional portfolio
                that looks cool, easy to navigate, and allows potential
                employers and collaborators to view my work at a glance. It also
                serves as a continuous learning tool, pushing me to stay updated
                with the latest technologies as I refine and expand my portfolio
                over time.
              </p>
            </div>
            <div>
              <b>Solution:</b>
              <ul>
                <li>
                  • Built using React and TailwindCSS to ensure a highly
                  responsive and visually polished design.
                </li>
                <li>
                  • Enhanced interactivity with animations and transitions using
                  by Framer Motion, creating a unique user experience.
                </li>
                <li>
                  • Integrated EmailJS for a functional contact form, allowing
                  direct communication with users or recruiters.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>
                  • Delivered a professional online presence to showcase my
                  portfolio effectively.
                </li>
                <li>
                  • Created a responsive, engaging, and easy-to-navigate site
                  that adapts seamlessly to any device.
                </li>
                <li>
                  • Demonstrated proficiency in modern frontend technologies and
                  design principles.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),

    stack: [
      { id: 1, label: "React" },
      { id: 2, label: "TailwindCSS" },
      { id: 3, label: "Framer Motion" },
      { id: 4, label: "EmailJS" },
    ],
    github: "https://github.com/jemcap/projects-portfolio",
    website: "#",
  },
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const contactLinks = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/joshuaecapito/",
    label: "Connect with me",
  },
  { id: 2, url: "https://github.com/jemcap", label: "Let's collaborate" },
];
