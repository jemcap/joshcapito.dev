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
  MongoDBIcon,
  ExpressJSIcon,
  ReduxTKIcon,
  AWSIcon,
  DevToIcon,
} from "../utils/utils";

import MealMasterImg from "../assets/meal_master.png";
import NovaPerformanceSite from "../assets/nova_performance_site.png";
import SolaceFurnitures from "../assets/solace_furnitures.png";
import Sprintyper from "../assets/sprintyper.png";
import BlockBuster from "../assets/blockbuster.png";
import Portfolio from "../assets/online_portfolio.png";
import MealMasterThumbnail from "../assets/meal_master_thumbnail.png";
import NovaPerformanceThumbnail from "../assets/nova-performance-thumbnail.png";
import SolaceFurnituresThumbnail from "../assets/solace_funitures_ecommerce_thumbnail.png";
import SprintyperThumbnail from "../assets/sprintyper_thumbnail.png";
import JoshCapitoDevThumbnail from "../assets/joshcapitodev_thumbnail.png";

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
  { id: 8, icon: <ExpressJSIcon />, label: "Express.js" },
  { id: 9, icon: <MongoDBIcon />, label: "MongoDB" },
  { id: 10, icon: <ReduxTKIcon />, label: "Redux Toolkit" },
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

export const projectsContributions = [
  {
    id: uuidv4(),
    title: "East London Waterworks Park",
    type: "Volunteering project",
    year: "2024/2025",
    description: (
      <>
        <div className="flex flex-col gap-5">
          <p>
            Volunteered as a Web Developer to contribute to a community-led
            working circle who are working on coordinating content and
            infrastructure for the East London Waterworks Park website:
          </p>
          <a
            href="https://www.elwp.org.uk/"
            target="_blank"
            noopener
            noreferrer
            className="text-blue-700 text-xs font-bold"
          >
            https://www.elwp.org.uk/
          </a>
        </div>
      </>
    ),
  },
  {
    id: uuidv4(),
    title:
      "Nottingham Trent University Design Industries (NTUDI) — Committee of '22",
    type: "Industry project",
    year: "2021/2022",
    description: (
      <p>
        I took on the role of Team Lead for the Website Team for this initiative
        — a proud member of the 2022 cohort. My responsibilities include
        assigning tasks, providing a clear direction and managing deliverables,
        and working with the team to design and develop an intuitive platform to
        showcase final-year undergraduate Product Design students to design
        professionals and entushiasts in the design industry.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title:
      "Nottingham Trent University Design Industries (NTUDI) — Committee of '21",
    type: "Industry project",
    description: (
      <p>
        Enrolled as a team assistant/assistant web designer for the Nottingham
        Trent University Design Industries (NTUDI) cohort '21 as part of
        Nottingham Trent University's unique placement programme, Professional
        Industry Projects (PIP). I was involved in weekly standup meetings,
        discussing design ideas and iterations, and developing through Wix for
        the NTUDI 2021 website. Other tasks included engaging with students to
        curate a professional profile on the website.
      </p>
    ),
  },
];

export const aboutInfo = [
  {
    id: uuidv4(),
    title: "About",
    link: "about-me",
    content: (
      <>
        <p>
          {" "}
          I love working at the intersection of design, development, and
          cutting-edge technology. For me, digital experiences aren't just
          functional; they should be intuitive, visually striking, and engage
          users in a way that excites them. It's incredibly rewarding to
          transform an idea into something tangible—whether it's designing an
          intuitive interface or writing seamless code. Every interaction should
          be meaningful and resonate with users, making their experience easier,
          more enjoyable, and a bit brighter. That's what drives me.{" "}
        </p>{" "}
        <p>
          {" "}
          Blending creativity with technology, particularly in digital media,
          has always been my passion. I thrive on solving complex problems
          through code and crafting interfaces that elevate the user experience.
          The thrill of bringing innovative ideas to life and making a
          meaningful impact fuels my drive to continuously push boundaries and
          grow creatively.{" "}
        </p>{" "}
        <p>
          I've had opportunities to work on a variety of projects, contributing
          to development efforts for different organisations along the way.
          Right now, I help small, local businesses grow by designing and
          building bespoke websites that really support their online presence.
        </p>
        <p>
          {" "}
          Outside of work, I explore my creative passions, including
          cinematography, photography, and playing the piano or guitar. I'm also
          a powerlifter, so you might catch me at the gym. Lately, I've been
          trying to read more, so if you're a fellow bookworm, feel free to
          connect!{" "}
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "My Story",
    link: "my-story",
    content: (
      <>
        <p>
          I've always been deeply passionate about technology and its
          transformative power. During my four years studying Product Design at{" "}
          <span>Nottingham Trent University</span>, I gained hands-on experience
          with a range of technologies—from Computer-Aided Design and
          Manufacturing to 3D printing—and software tools like Adobe Creative
          Cloud.
        </p>
        <p>
          When COVID-19 hit, it disrupted my placement year, making it difficult
          to secure a role. This uncertainty gave me the chance to explore new
          skills, and I quickly became passionate about Web Design and
          Development, spending hours building simple HTML and CSS websites. I
          knew I wanted to pursue a career in this field.
        </p>
        <p>
          In my final year, I led the website team for{" "}
          <span>Nottingham Trent University Design Industries (NTUDI)</span>,
          where I helped design a platform showcasing the work of our final-year
          students. It was incredibly rewarding to see it go live and be used by
          the design community.
        </p>
        <p>
          After graduation, I made the switch to web development. With no prior
          experience, I immersed myself in learning the fundamentals, building
          my skills from the ground up. My passion for technology and creating
          user-centered experiences drives me to keep pushing forward, one line
          of code at a time.
        </p>
      </>
    ),
  },
];

export const experienceInfo = [
  // TODO: Automate this array using Sanity.io
  {
    id: uuidv4(),
    date: "Jan 2025—Present",
    company: "Risidio",
    role: "Software Developer Intern",
    description:
      "Risidio, based in London, UK, is a company dedicated to empowering creators and communities by leveraging cutting-edge technologies like Blockchain and Web3. As a Software Developer Intern at Risidio, I will be actively contributing to their groundbreaking projects, focusing on harnessing these technologies to drive innovative and collaborative solutions. My role involves exploring cutting-edge advancements, implementing robust software solutions, and supporting the development of platforms that align with Risidio's mission to reshape the digital landscape for creators and their communities.",
  },
  {
    id: uuidv4(),

    date: "Aug 2024—Present",
    company: "Independent Web Developer (Pro Bono projects)",
    role: "Volunteer Web Developer for local and small businesses",
    description:
      "I reach out to small and local businesses, collaborating closely with business owners to understand their requirements and deliver tailored solutions that aligned with their goals. By taking on these pro bono projects, I expand my technical expertise and contributed to the growth of small businesses in my community.",
  },
  {
    id: uuidv4(),

    date: "Nov 2024—Present",
    company: "East London Waterworks Park",
    role: "Front End Web Developer Volunteer",
    description:
      "Volunteered as a Web Dev to contribute to a community-led working circle who are working on coordinating content and infrastructure for the East London Waterworks Park website. The goal for this initiative is by purchasing land and transforming it into a biodiverse park that benefits the general public and the planet.",
    stack: [
      { id: 1, tech: "PHP" },
      { id: 2, tech: "MySQL" },
      { id: 3, tech: "Apache Web Server" },
      { id: 4, tech: "JavaScript" },
    ],
  },
  {
    id: uuidv4(),

    date: "Nov 2022—May 2024",
    company: "dcloud9 ltd.",
    extra: "In collaboration with client: IAVI",
    role: "Junior DevOps Engineer",
    description:
      "I worked on the MAGY project for IAVI, developing backend APIs with Python and GraphQL, optimising data management and code iterations using AWS Lambda, and integrating AppSync with DynamoDB. I automated infrastructure processes using Terraform, improving deployment efficiency, and collaborated in Agile sprints to enhance team productivity and problem-solving.",
    stack: [
      { id: 1, tech: "Amazon Web Services" },
      { id: 2, tech: "Terraform" },
      { id: 3, tech: "Gitlab CI/CD" },
      { id: 4, tech: "Python" },
      { id: 5, tech: "GraphQL" },
    ],
  },
  {
    id: uuidv4(),

    date: "Sep 2023—Dec 2023",
    company: "PolicyCON ltd.",
    role: "Front End Web Developer Intern",
    description:
      "Redesigned webpages to enhance UX/UI and accessibility, developing responsive features with React, TypeScript, and TailwindCSS for improved performance. Refactored the codebase for maintainability using modular design, authored technical documentation for future development, and tested authentication components with Cypress to boost reliability. Actively participated in Scrum meetings, aligning goals and ensuring deliverables.",
    stack: [
      { id: 1, tech: "Figma" },
      { id: 2, tech: "React" },
      { id: 3, tech: "TypeScript" },
      { id: 4, tech: "TailwindCSS" },
      { id: 5, tech: "Cypress" },
    ],
  },
  {
    id: uuidv4(),

    date: "Sep 2021—May 2022",
    company: "Nottingham Trent University Design Industries",
    role: "Website Team Lead — Committee of 2022",
    description:
      "Led a team of three to ensure timely website deployment by assigning tasks, resolving challenges, and achieving weekly goals. Collaborated with the Branding team to align designs with annual themes, creating cohesive and engaging layouts that improved user experience. Mentored team members in debugging, data handling, and UX/UI principles, boosting efficiency and meeting targets. Successfully managed the project alongside academic responsibilities, deploying the website on time. Optimised content for SEO, increasing website traffic by 15% year over year.",
    stack: [
      { id: 1, tech: "Wix Website Builder" },
      { id: 2, tech: "JavaScript" },
    ],
  },
  {
    id: uuidv4(),

    date: "Aug 2021—Sep 2021",
    company: "Unitemps",
    role: "Website Designer",
    description:
      "Worked as a Web Designer and Developer with NTU Masters Product Design students to create a virtual platform showcasing their work and profiles. Using Squarespace, I contributed in designing a professional and user-friendly website that effectively displayed their projects and achievements. I collaborated closely with the students to understand their creative goals, tailoring the platform to highlight their work while maintaining a cohesive and engaging design. The result was a polished showcase that helped them share their portfolios with prospective employers and collaborators.",
    stack: [
      { id: 1, tech: "Squarespace" },
      { id: 2, tech: "Figma" },
    ],
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
