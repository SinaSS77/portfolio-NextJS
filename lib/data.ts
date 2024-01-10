import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Movie_Island from "@/public/Movie_Island.png";
import Scheduler from "@/public/Scheduler.png";
import SmartToDo from "@/public/SmartToDo.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Web Developer",
    location: "Freelancer",
    description:
      ["Designing and updating layouts to meet usability and performance requirements.","Producing websites compatible with multiple browsers.","Testing web-based product functionality and delivering iterations to customer.","Guiding customers on project stages and iterations with input on best practices, user needs and technology capabilities."],
    icon: React.createElement(FaReact),
    date: "03/2023 - Present",
  },
  {
    title: "Technician and Marketing Assistant",
    location: "Compass Group Canada, Port Coquitlam, BC",
    description:
      ["Repairing broken-down desktop computers, printers and other office machines","Training users in proper use of POS system software.","Reporting on research findings through digital reports and face-to-face presentations to update managers on current data."],
    icon: React.createElement(CgWorkAlt),
    date: "12/2021 – present",
  },
  {
    title: "Computer Support Technician",
    location: "Persia Construction Inc., Saskatoon, Canada",
    description:
      ["Delivered first-level technical support to customers using defined help desk processes and procedures.","Collaborated with team members to efficiently manage and maintain the organization's desktop computing environment.","Developed website’s user interface with modern JavaScript frameworks, HTML 5, CSS 3 and SASS, which improved user satisfaction by 30%."],
    icon: React.createElement(CgWorkAlt),
    date: "02/2021 – 09/2021",
  },
] as const;

export const educationsData = [
  {
    title: "Diploma/Full-Stack Web Development",
    location: "Lighthouse Labs, Vancouver, BC",
    description:
      ["Completed a 16-week full-time web development bootcamp program at Lighthouse, gaining over 1300 hours of hands-on experience with various tech stacks.","Honed skills as a developer and became proficient in writing full-stack applications using React, PSQL databases, NodeJs servers, and other libraries.","Successfully completed over 6 practical REST-API apps"],
    icon: React.createElement(LuGraduationCap),
    date: "04/2023",
  },
  {
    title: "Associate of Science/ Applied Web Development",
    location: "British Columbia Institute of Technology (BCIT), Vancouver, BC",
    description:
      ["Strengthened proficiency in JavaScript and TypeScript through continuous learning and skill enhancement initiatives.","Successfully executed projects utilizing React.js and Next.js"],
    icon: React.createElement(LuGraduationCap),
    date: "01/2022",
  },
  {
    title: "Bachelor's Degree/ Computer Science Engineering",
    location: "Azad University, Tehran, Iran",
    description:
      [],
    icon: React.createElement(LuGraduationCap),
    date: "06/2000",
  },
] as const;

export const projectsData = [
  {
    title: "Movie_Island",
    description:
      "A React application that allows users to search and look up information about movies and watch their trailers. The application includes pages, search functionality, Also the ability for users to upload their videos and movies.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "JWT"],
    imageUrl: Movie_Island,
  },
  {
    title: " Interview-Scheduler",
    description:
      "A 7-day deadline React application that allows users to book/edit/cancel interviews. I combined a concise API with an Express/WebSocket server to build a real-time experience and managed complex states using reducers.",
    tags: ["React", "Express", "Node.js", "Tailwind", "JWT"],
    imageUrl: Scheduler,
  },
  {
    title: "Smart To Do",
    description:
      "a single-page application. users can easily input the name of their daily todo's. Then, by using GoogleAPI, the app will find the appropriate category for that and save it. Users can edit or delete items.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: SmartToDo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "SQL",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "JWS",
  "Express",
] as const;
