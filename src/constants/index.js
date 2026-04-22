import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import typescript from "../assets/icons/typescript.png";
import react from "../assets/icons/reactjs.png";
import reactNative from "../assets/icons/react-native.jpg";
import next from "../assets/icons/next.png";
import redux from "../assets/icons/redux.png";
import tailwind from "../assets/icons/tailwind.png";
import nodejs from "../assets/icons/nodejs.png";
import mongodb from "../assets/icons/mongodb.png";
import git from "../assets/icons/git.png";
import figma from "../assets/icons/figma.png";
import docker from "../assets/icons/docker.png";
import progress from "../assets/icons/progresql.png";
import tablePlus from "../assets/icons/tableplus.png";

import web from "../assets/icons/web.png";
import reactWeb from "../assets/icons/mobile.png";
import nextjs from "../assets/icons/nextjs.png";
import backend from "../assets/icons/backend.png";

import calculadora from '../assets/videos/calculadora.mp4'
import peliculas from '../assets/videos/peliapp.mp4'
import poke from '../assets/videos/pokeapi.mp4'

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "works",
    title: "Proyectos",
  },
];

export const projects = [
    {
    name: "Zoco servicio de pago",
    description:
  "Plataforma web desarrollada con Reactque centraliza la gestión de facturación y seguimiento comercial. Permite a clientes consultar sus datos en tiempo real y a equipos de ventas optimizar su rendimiento mediante herramientas de gestión integradas. Enfocada en escalabilidad, performance y experiencia de usuario.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176192/portfolio%20update%20final/zoco_vfbtg6.png",
    source_code_link: "https://zocoweb.com.ar/",
  },
  {
    name: "Wereal Grupo inmobiliario",
  description:
  "Sitio web corporativo para grupo inmobiliario en España, con integración a APIs y una interfaz moderna que facilita la exploración de propiedades y servicios. Optimizado para navegación fluida, claridad de contenido y captación de clientes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1763600519/wereal_rupdqo.png",
    source_code_link: "https://wereal.es/",
  },

  {
    name: "DKZ Studio",
    description:
  "Web corporativa para estudio creativo, enfocada en presentar servicios, portfolio y equipo de manera clara y atractiva. Desarrollo orientado a reforzar la identidad de marca y mejorar la conversión de visitantes en potenciales clientes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176180/portfolio%20update%20final/dkz_ges1lp.png",
    source_code_link: "https://www.dkzstudio.com/",
  },
  {
    name: "Feedback CEO ",
description:
  "Aplicación web orientada al sector salud para la recolección y análisis de feedback de pacientes. Diseñada con foco en usabilidad y claridad de datos, permite transformar opiniones en métricas accionables para mejorar la calidad del servicio.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1763600715/feedback_bt4ojo.png",
    source_code_link: "https://feedback-ceo.vercel.app/",
  },
  {
    name: "Porfolio Dev Backend",
 description:
  "Portfolio profesional para desarrollador backend, diseñado para comunicar habilidades técnicas y proyectos de forma clara, moderna y efectiva. Optimizado para reforzar la marca personal y aumentar oportunidades laborales mediante una presentación visual atractiva.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1740670306/portfolio%20update%20final/jmhnl3iezrubobpxms3m.png",
    source_code_link: "https://mauro-trejo.vercel.app/",
  },
  {
    name: "Grillman 100% carne al fuego",
    description:
  "Landing optimizada para pedidos online integrada con OlaClick, diseñada para agilizar el proceso de compra y mejorar la experiencia del usuario. Enfocada en velocidad, simplicidad y aumento de conversiones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OlaClick",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176184/portfolio%20update%20final/grillman_hok29k.png",
    source_code_link: "https://grillman.com.ar/",
  },
  {
    name: "Paztour",
   description:
  "Landing page desarrollada para una agencia de viajes, enfocada en presentar destinos y servicios de forma clara y atractiva. Diseñada para captar la atención del usuario y facilitar la conversión mediante una navegación simple y visualmente efectiva.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731179084/portfolio%20update%20final/paztour_q81iwm.png",
    source_code_link: "https://paztouragency.es/",
  },

 
 
  
 
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "progress",
    icon: progress,
  },
  {
    name: "tableplus",
    icon: tablePlus,
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React",
    icon: reactWeb,
  },
  {
    title: "React Native Developer",
    icon: nextjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

export const experiences = [
  {
    title: "Calculadora iOS",
    icon: reactNative,
    iconBg: "#383E56",
    points: [
      " Una versión renovada de la calculadora de iOS, construida con componentes reutilizables, custom hooks y cálculos matemáticos precisos.",
      "El diseño en Flexbox asegura una presentación visual elegante y una experiencia de usuario fluida, aprovechando al máximo las capacidades de React Native." ,
    ],
     videoUrl: calculadora 
  },
  {
    title: "PelisApp",
    icon: reactNative,
    iconBg: "#E6DEDD",
    points: [
      "Aplicación de películas en React Native que consume la API de The Movie Database.",
      "Presenta una interfaz elegante con listas deslizantes de películas populares y detalles completos de cada película.",  "Diseñada para maximizar la experiencia del usuario y ofrecer una navegación fluida, esta app es ideal para amantes del cine en busca de nuevas películas.",
    ],
     videoUrl: peliculas
  },
  {
    title: "PokeApp v2",
    icon: reactNative,
    iconBg: "#383E56",

    points: [
      "Una experiencia completa de Pokedex que consume la API de PokeAPI, permitiendo a los usuarios explorar y descubrir Pokémon mediante un scroll infinito.",
      "Incluye detalles de cada Pokémon, como estadísticas y habilidades, junto con una función de búsqueda para encontrar favoritos fácilmente. Una Pokedex moderna y accesible para todos los entrenadores.",
    ],
     videoUrl: poke
  },
];
