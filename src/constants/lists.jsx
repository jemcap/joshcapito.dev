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
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque adipisci earum ut eum nostrum placeat voluptatum, temporibus tempore distinctio officiis nesciunt sint excepturi quisquam rem recusandae nisi. At, delectus quaerat fugiat commodi et, consequuntur placeat quod voluptas nesciunt exercitationem reprehenderit ipsa? Deserunt ex eius eligendi accusantium nisi repudiandae enim! Modi.",
    stack: [{ id: 1, label: "React" }],
    github: "",
    website: "",
  },
  {
    id: 2,
    title: "Nova Performance — Barbell Club",
    type: "Freelance project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque adipisci earum ut eum nostrum placeat voluptatum, temporibus tempore distinctio officiis nesciunt sint excepturi quisquam rem recusandae nisi. At, delectus quaerat fugiat commodi et, consequuntur placeat quod voluptas nesciunt exercitationem reprehenderit ipsa? Deserunt ex eius eligendi accusantium nisi repudiandae enim! Modi.",
    stack: [{ id: 1, label: "React" }],
    github: "",
    website: "",
  },
  {
    id: 3,
    title: "Solace Furniture",
    type: "Personal project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque adipisci earum ut eum nostrum placeat voluptatum, temporibus tempore distinctio officiis nesciunt sint excepturi quisquam rem recusandae nisi. At, delectus quaerat fugiat commodi et, consequuntur placeat quod voluptas nesciunt exercitationem reprehenderit ipsa? Deserunt ex eius eligendi accusantium nisi repudiandae enim! Modi.",
    stack: [
      { id: 1, label: "React" },
      { id: 2, label: "TailwindCSS" },
    ],
    github: "",
    website: "",
  },
  {
    id: 4,
    title: "Sprintyper",
    type: "Personal project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque adipisci earum ut eum nostrum placeat voluptatum, temporibus tempore distinctio officiis nesciunt sint excepturi quisquam rem recusandae nisi. At, delectus quaerat fugiat commodi et, consequuntur placeat quod voluptas nesciunt exercitationem reprehenderit ipsa? Deserunt ex eius eligendi accusantium nisi repudiandae enim! Modi.",
    stack: [{ id: 1, label: "React" }],
    github: "",
    website: "",
  },
];
