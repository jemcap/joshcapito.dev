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

export const projectsList = [
  {
    id: "1",
    title: "Meal Master",
    type: "Group project",
    thumbnail: MealMasterThumbnail,
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

          <div className="text-xs flex flex-col gap-5 my-5">
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
                  • A fully responsive application ensures excellent usability
                  across devices, improving accessibility for diverse users.
                </li>
                <li>
                  • Users can filter recipes by keywords, dietary preferences,
                  and cuisines, making it easy to find tailored meal options.
                </li>
                <li>
                  • A clean, organised layout simplifies navigation and
                  encourages engagement.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>
                  • Excellent feedback from users — confirmed that the app
                  simplifies meal discovery and planning, saving time and
                  effort.
                </li>
                <li>
                  • A responsive design ensures users can access the app on any
                  device with ease.
                </li>
                <li>
                  • The custom filtering and user-friendly interface resulted in
                  a significant reduction in bounce rates and improved overall
                  satisfaction.
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
    id: "2",
    title: "Nova Performance — Barbell Club",
    type: "Client project",
    thumbnail: NovaPerformanceThumbnail,
    image: NovaPerformanceSite,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            Nova Performance, an independent gym business, barbell club, and a
            respected strength sports facility. This project allowed me to
            collaborate with the gym owner to redesign and redevelop their
            website. You can{" "}
            <OriginalWebsiteLink>
              view the original site here
            </OriginalWebsiteLink>
          </p>
          <div className="text-xs flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                The existing website is outdated, lacking modern functionality,
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
                  • A responsive design, improving accessibility and usability.
                </li>
                <li>
                  • Faster loading time by implementing performance
                  optimisation, reduced initial page load times, improved SEO,
                  and ensured users experienced smooth transitions between
                  pages.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>• Reduced load times by 20%.</li>{" "}
                <li>
                  • Modernised design and smoother navigation improved user
                  experience and accessibility.
                </li>{" "}
                <li>• Enhanced branding that aligns to the gym's identity.</li>{" "}
                <li>
                  • Delivered a client-aligned website with clear communication
                  all throughout and managed expectations.
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
    id: "3",
    title: "Solace Furnitures",
    type: "E-commerce project",
    thumbnail: SolaceFurnituresThumbnail,
    image: SolaceFurnitures,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            Solace Furnitures is a modern ecommerce platform designed to provide
            a great shopping experience for furniture enthusiasts.
          </p>
          <div className=" text-xs flex flex-col gap-5 my-5">
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
                  • Utilised Redux Toolkit for efficient global state
                  management, providing users with a seamless and consistent
                  experience as they browse through products.
                </li>
                <li>
                  • Integrated React Query and Axios to fetch product data
                  dynamically and handle API calls effectively, improving
                  performance through caching.
                </li>
                <li>
                  • Used React Router DOM to implement smooth navigation between
                  different pages.
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
      { id: 3, label: "React Router" },
      { id: 4, label: "Redux Toolkit" },
      { id: 5, label: "React Query" },
      { id: 6, label: "Axios" },
    ],
    github: "https://github.com/jemcap/solace-furniture/",
    website: "https://solacefurnitures.netlify.app/",
  },
  {
    id: "4",
    title: "Sprintyper",
    type: "Game project",
    thumbnail: SprintyperThumbnail,
    image: Sprintyper,
    description: (
      <>
        <div className="flex flex-col gap-2 my-5">
          <p>
            Sprintyper is an interactive web-based game designed to enhance
            typing speed and accuracy through engaging, game-based learning. The
            platform offers users four distinct difficulty levels, each
            presenting a new challenge to type out increasingly complex phrases
            and sentences. This project blends education and entertainment,
            providing a fun and effective way to improve typing skills.
          </p>
          <div className="text-xs flex flex-col gap-5 my-5">
            <div>
              <b>Problem/Opportunity:</b>
              <p>
                The goal of this project was to create an interactive tool that
                helps users practice typing in a fun, engaging way. With a focus
                on game-based learning, Sprintyper was designed to motivate
                users to improve their typing speed while keeping them
                entertained. This opportunity allowed me to explore the power of
                JavaScript and its capabilities in building a dynamic, real-time
                game that adapts to the user's skill level.
              </p>
            </div>
            <div>
              <b>Solution:</b>
              <ul>
                <li>
                  • Built a responsive, user-friendly platform using HTML5,
                  CSS3, and JavaScript to create an engaging game experience.
                </li>
                <li>
                  • Implemented four levels of difficulty, increasing in
                  complexity to challenge users and help them improve their
                  typing skills progressively.
                </li>
                <li>
                  • Integrated real-time feedback, allowing users to track their
                  performance and provide immediate feedback on their typing.
                </li>
              </ul>
            </div>
            <div>
              <b>Impact:</b>
              <ul>
                <li>
                  • Helped users enhance their typing accuracy and speed through
                  a fun, interactive platform.
                </li>
                <li>
                  • Provided an engaging way to learn and practice typing
                  skills, suitable for all levels.
                </li>
                <li>
                  • Encouraged continuous improvement by offering progressively
                  challenging levels.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
    stack: [
      { id: 1, label: "HTML5" },
      { id: 2, label: "CSS3" },
      { id: 3, label: "JavaScript" },
    ],
    github: "https://github.com/jemcap/speed-typer",
    website: "https://speed-typer-tool.netlify.app/",
  },

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
    id: "5",
    title: "joshcapito.dev",
    type: "Portfolio project",
    thumbnail: JoshCapitoDevThumbnail,
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
          <div className=" text-xs flex flex-col gap-5 my-5">
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
      { id: 4, label: "React Router" },
      { id: 5, label: "EmailJS" },
    ],
    github: "https://github.com/jemcap/projects-portfolio",
    website: "#",
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

export const projectsInProgress = [
  {
    id: uuidv4(),
    title: "The Upcycle Community",
    type: "Community-focused project",
    description:
      "A community-driven platform focused on upcycling plastic waste into valuable products. The initiative aims to raise awareness about sustainable practices, inspire creative reuse and encourage creativity among individuals, and empower individuals to contribute to environmental conservation. Through workshops, resources, and collaboration, the platform fosters innovation and promotes a circular economy.",
  },
  {
    id: uuidv4(),
    title: "Edison's Barber Shop",
    type: "Client Project",
    description: (
      <>
        <div className="flex flex-col gap-5">
          <p>
            I reached out to Edison, the owner of Edison's Barber Shop, to
            design and develop a professional, user-friendly website that
            showcases his services, reflects the shop's welcoming vibe, and
            helps attract more customers while building professionalism and
            trust. While Edison currently advertises through a Facebook page,
            not everyone uses Facebook, so creating a website would
            significantly expand his reach to potential customers.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100063643806492"
            target="_blank"
            noopener
            noreferrer
            className="text-blue-700 text-xs font-bold"
          >
            Visit Facebook page
          </a>
        </div>
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "Sole Secured",
    type: "Client Project",
    description: (
      <>
        <div className="flex flex-col">
          <p>
            I connected with Jarvis, the owner of Sole Secured, to design and
            develop a website that reflects his passion for sneakers. Sole
            Secured has built a loyal following on Instagram, showcasing
            Jarvis's craftsmanship and unique approach to sneaker culture.
            However, not everyone uses Instagram, and a professional website
            would help broaden his reach, attract new customers, and establish
            Sole Secured as the go-to destination for sneaker care and
            restoration. The website would highlight his services, share his
            story, and allow customers to easily book services or inquire about
            bespoke sneaker solutions, reinforcing his brand's professionalism
            and credibility.
          </p>
          <div className="flex flex-col gap-5 my-8 lg:my-5 lg:gap-2">
            <a
              href="https://www.instagram.com/sole.secured/?hl=en-gb"
              aria-label="Sole Secured link"
              target="_blank"
              noopener
              noreferrer
              className="text-blue-700 text-xs font-bold"
            >
              Visit Instagram page
            </a>
            <a
              href="https://www.offspring.co.uk/theplatform/community/offspring-meets-jahbong?fbclid=PAZXh0bgNhZW0CMTEAAaZPOek-ZBoPJPmb7wa7ySBC0bSyv6rf7O96jP6bfOT17begQQo-VnRsuEA_aem_GnfhUonJc-opwCFqxxOCUA"
              aria-label="link to know more about Jarvis"
              target="_blank"
              noopener
              noreferrer
              className="text-blue-700 text-xs font-bold"
            >
              Learn more about Jarvis
            </a>
          </div>
        </div>
      </>
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
