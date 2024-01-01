import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Jungle from "@/public/Jungle.png";
import Movie_Island from "@/public/Movie_Island.png";
import Portfolio from "@/public/Portfolio.png";
import Scheduler from "@/public/Scheduler.png";
import SmartToDo from "@/public/SmartToDo.jpg";
import TinyURL from "@/public/tinyURL.png";
import Tweeter from "@/public/Tweeter.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Web Developer",
    location: "Free Lancer, Voncouver",
    description:
      "I graduated ",
    icon: React.createElement(LuGraduationCap),
    date: "03/2023 - Present",
  },
  {
    title: "Technician and Marketing Assistant",
    location: "Compass Group Canada, Vancouver",
    description:
      "I worked as a front-end developer ",
    icon: React.createElement(CgWorkAlt),
    date: "12/2021 - Present",
  },
  {
    title: "Computer Support Technician",
    location: "Persia Construction Inc., Saskatoon",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "02/2021 - 09/2021",
  },
  {
    title: "IT Technician",
    location: "Nazhin Computer, Tehran",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "01/2006 - 06/2020",
  },
] as const;

export const projectsData = [
  {
    title: "first",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Jungle,
  },
  {
    title: "Second",
    description:
      "Job board for remote developer jobs. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Movie_Island,
  },
  {
    title: "Third",
    description:
      "A public web app for quick analytics on text.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Portfolio,
  },
  {
    title: "Fourth",
    description:
      "A public web app for quick analytics on text.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Scheduler,
  },
  {
    title: "Fifth",
    description:
      "A public web app for quick analytics on text.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: SmartToDo,
  },
  {
    title: "Sixth",
    description:
      "A public web app for quick analytics on text.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: TinyURL,
  },
  {
    title: "Seventh",
    description:
      "A public web app for quick analytics on text.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Tweeter,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Sql",
  "PostgreSQL",
  "Git",
  "Github",
  "Express",
  "PhotoShope",
  "Figma",
  "Excalidraw",
] as const;