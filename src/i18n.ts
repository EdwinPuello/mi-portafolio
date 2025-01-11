// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        projects: 'Projects',
      },
      hero: {
        title: 'hi, I am',
        subtitle: 'Passionate about web and mobile development. Technology and pizza lover.',
      },
      about: {
        sectionSubText: "A little about me",
        sectionHeadText: "Introduction.",
        description: "Hi! I'm Edwin Puello, a proud 27year-old Colombian from Barranquilla with an immense love for web development technologies and mobile apps.",
        description2: "In addition to being a code enthusiast, I’m a passionate gamer, a football fan, and of course, a huge dog lover!",
        description3: "I’m thrilled to collaborate with people and teams who share my passion for creating extraordinary experiences. Your visit to my portfolio means a lot to me!"
      },
      tech: {
        sectionSubText: 'My skills',
        sectionHeadText: 'Technologies.',
      },
      experience: {
        question: "Where have I worked?",
        title: "Work Experience",
        july_2018_to_august_2019: "July 2018 - August 2019",
        august_2019_to_june_2020: "August 2019 - June 2020",
        june_2020_to_present: "June 2020 - Present"
      },
      contact: {
        get_in_touch: 'Get in touch',
        title: 'Contact',
        name: 'Your Name',
        name_placeholder: "What's your name?",
        email: 'Your Email',
        email_placeholder: "What's your email?",
        message: 'Your Message',
        message_placeholder: "What's your message?",
        send: 'Send',
        sending: 'Sending',
        thank_you: 'Thank you. I will get back to you as soon as possible.',
        error: 'Something went wrong. Please try again.',
      },
      projects: {
      title: "Projects",
      subtitle: "Case Studies",
      description: "Here are some of my most notable projects, with brief descriptions, links to repositories, and live demos. Despite my work commitments, I make time for my personal projects and will keep adding more as I go along.",
      description1: "It consists of an encryptor and decryptor for text based on specific rules.",
      description2: "It consists of a personal project to manage the sales of my own business.",
      description3: "It consists of a project that manipulates the DOM using JavaScript, featuring product listings and the ability to add and remove items.",
      description4: "AluraFlix is a React project for managing videos, offering functionalities like adding, editing, and deleting content while using Redux for state management."
    }
    }
  },
  es: {
    translation: {
      navbar: {
        home: 'Inicio',
        about: 'Acerca de',
        contact: 'Contacto',
        projects: 'Proyectos',
      },
      hero: {
        title: 'Hola, yo soy',
        subtitle: 'Apasionado por el desarrollo web y móvil. Amante de la tecnología y la pizza.',
      },
      about: {
        sectionSubText: "Un poco de mí",
        sectionHeadText: "Introducción.",
        description: "¡Hola! Soy Edwin Puello, un colombiano orgullosamente de Barranquilla de 27 años con un amor desmedido por las tecnologías del desarrollo web y las apps móviles.",
        description2: "Además de ser un apasionado del código, soy un gamer entusiasta, un aficionado al fútbol y, por supuesto, ¡un gran amante de los perros!",
        description3: "Me emociona un montón colaborar con personas y equipos que comparten mi pasión por crear experiencias extraordinarias. ¡Tu visita a mi portafolio significa mucho para mí!"
      },
      tech: {
        sectionSubText: 'Mis skills',
        sectionHeadText: 'Tecnologías.',
      },
      experience: {
          question: "¿En dónde he trabajado?",
          title: "Experiencia Laboral",
          july_2018_to_august_2019: "Julio 2018 - Agosto 2019",
          august_2019_to_june_2020: "Agosto 2019 - Junio 2020",
          june_2020_to_present: "Junio 2020 - Presente"
        },
      contact: {
        get_in_touch: 'Contáctame',
        title: 'Contacto',
        name: 'Tu Nombre',
        name_placeholder: '¿Cuál es tu nombre?',
        email: 'Tu Correo',
        email_placeholder: '¿Cuál es tu correo?',
        message: 'Tu Mensaje',
        message_placeholder: '¿Cuál es tu mensaje?',
        send: 'Enviar',
        sending: 'Enviando',
        thank_you: 'Gracias. Te contactaré lo antes posible.',
        error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      },
      projects: {
        title: "Proyectos",
        subtitle: "Casos de estudios",
        description: "A continuación, presento algunos de mis proyectos más destacados, con breves descripciones, y algunos con enlaces a repositorios y todos con demos en vivo. A pesar de mis compromisos laborales, me esfuerzo por dedicar tiempo a mis proyectos personales, y seguiré añadiendo más a medida que avance.",
        description1: "Consiste en un encriptador y desencriptador de texto basado en reglas específicas.",
        description2: "Consiste en un proyecto personal para poder administrar las ventas de mi propio negocio.",
        description3: "Consiste en un proyecto que manipula el DOM con JavaScript, donde tenemos listados de productos y la capacidad de agregar y eliminar elementos.",
        description4: "AluraFlix es un proyecto en React para gestionar videos, con funcionalidades como agregar, editar y eliminar contenido, utilizando Redux para la gestión del estado."
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Fallback si el idioma no existe
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
