import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>Angular</b>  or <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Flask</b>  & <b>Node API</b> ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "65",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Git/GitHub",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Jira",
    level: "55",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Spotify Clone",
    description:
      "A cool Spotify clone where you can play and access all playlists from your spotify account.",
    image_path: "/images/spotifyClone.png",
    deployed_url: "https://spotify-2-ssn.vercel.app/",
    github_url: "https://github.com/Shashanka8/spotify-2.0",
    category: ["next"],
    key_techs: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spotify API",
      "Recoil",
      "NextAuth",
    ],
  },
  {
    id: 2,
    name: "Crwn Clothing",
    description:
      "An E-commerce application in which user can add various Fashion products to cart and go for checkout.",
    image_path: "/images/E-commerce.png",
    deployed_url: "https://ssn-crwn-live.herokuapp.com/",
    github_url: "https://github.com/Shashanka8/crwn-clothing",
    category: ["react"],
    key_techs: ["React", "Redux", "Firebase", "Stripe"],
  },
  {
    id: 3,
    name: "Instagram Clone",
    description:
      "An aplication where user can upload posts and can do like, comment on others post.",
    image_path: "/images/instaClone.png",
    deployed_url: "https://insta-clone-ssn.vercel.app/",
    github_url: "https://github.com/Shashanka8/instagram-2.0",
    category: ["next"],
    key_techs: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Firebase v9",
      "Recoil",
      "NextAuth",
    ],
  },
  {
    id: 4,
    name: "Google Clone",
    description: "Google search engine clone where you can search anything.",
    image_path: "/images/googleClone.png",
    deployed_url: "https://google-clone-ssn.vercel.app/",
    github_url: "https://github.com/Shashanka8/google-2.0",
    category: ["next"],
    key_techs: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "TODO App",
    description: "A simple TODO App built using Vanila JS.",
    image_path: "/images/todo.png",
    deployed_url: "https://todo-app-ssn.netlify.app/",
    github_url: "https://github.com/Shashanka8/todo-list",
    category: ["javascript"],
    key_techs: ["Javascript", "Bootstrap"],
  },
  {
    id: 6,
    name: "Whack A Penguin",
    description: "A simple Penguin game built using Vanila JS.",
    image_path: "/images/penguin.png",
    deployed_url: "https://penguin-game-ssn.netlify.app/",
    github_url: "https://github.com/Shashanka8/whack-a-penguin",
    category: ["javascript"],
    key_techs: ["Javascript", "Bootstrap"],
  },
];
