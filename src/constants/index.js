import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    nodejs,
    git,
    figma,
    c,
    cpp,
    davinci,
    go,
    haskell,
    unreal,
    vscode,
    vue,
    proximus,
    cybil,
    fuzzion,
    fivesnordon,
    fuzziongit,
    glados,
    comingsoon,
    stephane,
    leo,
    noe,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unreal Engine Developer",
      icon: web,
    },
    {
      title: "Web App Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "Cpp",
      icon: cpp,
    },
    {
      name: "Haskell",
      icon: haskell,
    },
    {
      name: "unreal",
      icon: unreal,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "Node",
      icon: nodejs,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "Vscode",
      icon: vscode,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "davinci",
      icon: davinci,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Internship Software Developer",
      company_name: "Proximus, Luxembourg",
      icon: proximus,
      iconBg: "#E6DEDD",
      date: "June 2021 - October 2021",
      points: [
        "Updating and translation of a tool intended for accountants.",
        "Market research on the features offered by similar tools.",
        "Creation of an algorithm that retrieves and compares data in a database.",
        "Implementation of automatic charts in VB.Net to make the algorithm legible and understandable.",
      ],
    },
    {
      title: "Internship Fullstack Developer",
      company_name: "Cybil, Niort (Full remote)",
      icon: cybil,
      iconBg: "#383E56",
      date: "Apr 2023 - Jul 2023",
      points: [
        "Self-learning of the Golang language.",
        "Creation of a demonstrator in VueJS.",
        "Establishment of communication between the demonstrator and the API.",
        "Addition of antivirus to the VirusCamp tool.",
      ],
    },
    {
      title: "Internship Fullstack Developer",
      company_name: "Fuzzion, Nancy",
      icon: fuzzion,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Mock-up of the deliverable using Figma.",
        "Creation of a showcase in React.",
        "Addition of an SQLite database with a NodeJS server.",
        "Deployment of the final result.",
      ],
    },
    {
      title: "Internship Mobile Developer",
      company_name: "Fives Nordon, Nancy",
      icon: fivesnordon,
      iconBg: "#383E56",
      date: "Nov 2023 - Apr 2024",
      points: [
        "Coming Soon.",
        "Coming Soon.",
        "Coming Soon.",
        "Coming Soon.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jules quickly understood what the solution brings to our customers; he is a person with commitment and rigor.",
      name: "Stéphane THOREL",
      designation: "CTO",
      company: "Cybil",
      image: stephane,
    },
    {
      testimonial:
        "He's a fast learner; he can stay focused despite the stress during rush periods.",
      name: "Léo RADIGON",
      designation: "Student",
      company: "Epitech",
      image: leo,
    },
    {
      testimonial:
        "Oh yes, he's quite creative! He has, um... original ideas!",
      name: "Noé BRETON",
      designation: "Student",
      company: "Epitech",
      image: noe,
    },
  ];
  
  const projects = [
    {
      name: "FuZZion Shop",
      description:
        "Website created for the FuZZion store in Nancy. Allows users to see the items available for shipping and in-store.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: fuzziongit,
      source_code_link: "https://github.com/LeBaku/FuzzionShop",
    },
    {
      name: "Glados",
      description:
        "School project entirely implemented in Haskell. Designing a compiler capable of interpreting an invented language (based on Lisp).",
      tags: [
        {
          name: "haskell",
          color: "blue-text-gradient",
        },
        {
          name: "haskell again",
          color: "green-text-gradient",
        },
        {
          name: "more haskell",
          color: "pink-text-gradient",
        },
      ],
      image: glados,
      source_code_link: "https://github.com/CorwinMangin/GladosPerso",
    },
    {
      name: "Tower Defense",
      description:
        "School project created using Unreal Engine. Development of a Rogue-Lite, 2D Tower Defense video game in a 3D world. The player must protect a city by collecting resources and crafting towers.",
      tags: [
        {
          name: "unreal engine",
          color: "blue-text-gradient",
        },
        {
          name: "cpp",
          color: "green-text-gradient",
        },
        {
          name: "game design",
          color: "pink-text-gradient",
        },
      ],
      image: comingsoon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };