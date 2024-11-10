import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import typescript from "../assets/icons/typescript.png";
import react from "../assets/icons/reactjs.png";
import reactNative from "../assets/icons/react-native.jpg";
import next from "../assets/icons/next.png";
import redux  from "../assets/icons/redux.png";
import tailwind from "../assets/icons/tailwind.png";
import nodejs from "../assets/icons/nodejs.png";
import mongodb  from "../assets/icons/mongodb.png";
import git from "../assets/icons/git.png";
import figma from "../assets/icons/figma.png";
import docker  from "../assets/icons/docker.png";
import progress from "../assets/icons/progresql.png";
import tablePlus from "../assets/icons/tableplus.png";

import web from "../assets/icons/web.png";
import reactWeb from '../assets/icons/mobile.png'
import nextjs from "../assets/icons/nextjs.png";
import backend from '../assets/icons/backend.png';

export const navLinks = [
  {
    id: "inicio",
    title: "Inicio",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
];

export const projects = [
  {
    name: "Zoco servicio de pago",
    description:
      "App Web: Un panel intuitivo que ofrece a clientes acceso a sus datos de facturación y permite a asesores comerciales gestionar y potenciar sus ventas.",
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
      "App Web:  Presenta al grupo inmobiliario Wereal en Alicante. Con interfaz intuitiva, permite explorar todas las facetas y servicios de la empresa de forma accesible y detallada.",
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
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176193/portfolio%20update%20final/somoswe_cthece.png",
    source_code_link: "https://wereal.es/",
  },
  {
    name: "DKZ Studio",
    description:
      "App web: muestra los servicios, proyectos destacados y el equipo de DKZ Studio, es un recurso esencial para quienes buscan diseño creativo y desarrollo web de calidad.",
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
    name: "Hotel Tafí",
    description:
      "App web: cuenta con un widget que permite una experiencia de reserva fluida para huéspedes y facilita a los propietarios gestionar reservas y maximizar ocupación.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "widget",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176186/portfolio%20update%20final/hoteltafi_wlndqg.png",
    source_code_link: "https://hoteltafi.com/",
  },
  {
    name: "German Schilman ",
    description:
      "App Web: inmobiliaria que facilita la exploración de propiedades para compra o alquiler, con detalles completos, imágenes y contacto para cada inmueble.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176192/portfolio%20update%20final/gs_x977aa.png",
    source_code_link: "http://www.germanschilman.com/",
  },
  {
    name: "Polo Salud",
    description:
      "App web: Solución para mejorar el rendimiento en el polo, con servicios especializados en el cuidado de caballos y el apoyo a jugadores y pilotos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731178271/portfolio%20update%20final/Captura_de_pantalla_2024-11-09_155057_dqmk0o.png",
    source_code_link: "https://www.polo-salud.com/es/",
  },
  {
    name: "La Estancia Gastrohome",
    description:
      "App Web: permite realizar pedidos a domicilio o reservar mesa en establecimientos, mejorando la satisfacción del cliente y la eficiencia para los propietarios.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731177982/portfolio%20update%20final/laestancia_hoe4qk.png",
    source_code_link: "https://laestanciagastrohome.es/",
  },

  {
    name: "Grillman 100% carne al fuego",
    description:
      "App web: que utiliza OlaClick para pedidos de Grillman, optimizando la experiencia de compra de sus famosos sándwiches a la parrilla con un proceso rápido y seguro.",
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
      "Landing Page: atractiva para agencia de viajes, diseñada para inspirar a los usuarios con destinos exóticos y mostrar la efectividad de diseño en páginas turísticas.",
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
  {
    name: "Enacoin",
    description:
      "Landing Page: que aborda educación financiera, emocional y criptomonedas, ofreciendo recursos y herramientas interactivas para enriquecer la comprensión de estos temas.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Widget",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731179267/portfolio%20update%20final/ena_ycoxto.png",
    source_code_link: "https://enacoin.net//",
  },
  {
    name: "Sebastian Spinelli",
    description:
      "Landing Portfolio: Landing moderna y personalizada que destaca habilidades y proyectos de forma visual y profesional, ideal para captar atención en el ámbito freelance.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176175/portfolio%20update%20final/sebas_piis3v.png",
    source_code_link: "https://sebaspinelli.com/",
  },
  {
    name: "M4Life ",
    description:
      "Landing Page: que destaca productos microbiológicos para potenciar el crecimiento vegetal y la biodiversidad del suelo en agricultura sostenible.",
    tags: [
      {
        name: "React",
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
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731179451/portfolio%20update%20final/Captura_de_pantalla_2024-11-09_161038_yebpic.png",
    source_code_link: "https://www.microbesforlife.com/",
  },
  {
    name: "Rolling Gourmet",
    description:
      "App Web: desarrollada en Rolling Code, con autenticación y panel de administración para operaciones completas de gestión de datos",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176191/portfolio%20update%20final/rc_jaxzqq.png",
    source_code_link: "https://rolling-gourmet.netlify.app/",
  },
  {
    name: "ClimApp",
    description:
      "App Web: que usa la API de OpenWeatherMap para ofrecer información meteorológica detallada de cualquier ciudad, con datos como temperatura y viento.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176199/portfolio%20update%20final/climapp_dc312m.png",
    source_code_link: "https://ejercicio13.vercel.app/",
  },
  {
    name: "Elden Page",
    description:
      "Fanpage de Elden Ring: Página dedicada al juego Elden Ring, con secciones sobre personajes, historia y jugabilidad para fans y nuevos jugadores",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1731176180/portfolio%20update%20final/elden_qayg4z.png",
    source_code_link: "https://rc-proyecto-elden-ring.vercel.app/",
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
      title: "React & React Native Developer",
      icon: reactWeb,
    },
    {
      title: "Next Developer",
      icon: nextjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  