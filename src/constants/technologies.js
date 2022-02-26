import React from "react"
import {
  FaGithub,
  FaRegHandshake,
  FaGoogle,
  FaSpaceShuttle,
  FaMoneyCheck,
  FaServer,
} from "react-icons/fa"
const data = [
  {
    id: 1,
    icon: <FaGithub className="service-icon" />,
    title: "Front-End",
    text: `Experiece with React JS which is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications and much more.`,
  },
  {
    id: 2,
    icon: <FaRegHandshake className="service-icon" />,
    title: "Static Sites",
    text: `Experiece with Gatsby combinding control and scalability of server-side rendering with the performance of static-site generation, inovating a whole new web of possibilities`,
  },
  {
    id: 3,
    icon: <FaGoogle className="service-icon" />,
    title: "Back-End",
    text: `Experiece with SQL Server in industry now work with postgress firebase storage, mongo DB, SQL Lite, Fauna DB most free tier backends i can get my hands on.`,
  },
  {
    id: 4,
    icon: <FaSpaceShuttle className="service-icon" />,
    title: "Headless CMS",
    text: `Experiece with Strapi, the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device..`,
  },
  {
    id: 5,
    icon: <FaMoneyCheck className="service-icon" />,
    title: "APIs",
    text: `With the standards being set with static site generation and next-gen headless CMS connecting to your data source has never been  easier with RESt and GraphQL APIs`,
  },
  {
    id: 6,
    icon: <FaServer className="service-icon" />,
    title: "UI/UX",
    text: `Experience with tools like Figma UI/UX Design Specialization brings a design-centric approach to user interface and user experience design.`,
  },
]

export default data
