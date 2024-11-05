import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  komikult,
  aluraGeeek,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  phone,
  angular,
  ionic
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    titleKey: 'navbar.about', 
  },
  {
    id: 'projects',
    titleKey: 'navbar.projects', 
  },
  {
    id: 'contact',
    titleKey: 'navbar.contact', 
  },
];


const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Mobile Developer',
    icon: phone,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Analyst',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular
  },
  {
    name: 'Ionic',
    icon: ionic
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Front-End Junior Developer',
    company_name: 'Grupo Empresarial TIC',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'experience.july_2018_to_august_2019',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Cloud Tecnologys Center',
    icon: microverse,
    iconBg: '#333333',
    date: 'experience.august_2019_to_june_2020',
  },
  {
    title: 'Developer Senior Angular',
    company_name: 'World Office Colombia SAS',
    icon: kelhel,
    iconBg: '#333333',
    date: 'experience.june_2020_to_present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Encriptador',
    description: 'projects.description1',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/EdwinPuello/challengeEncrypt',
    demo: 'https://edwinpuello.github.io/challengeEncrypt/',
  },
  {
    id: 'project-2',
    name: 'DIGITAL 360',
    description:'projects.description2',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/EdwinPuello/posApp',
    demo: 'https://posdigital360.com/',
  },
  {
    id: 'project-3',
    name: 'AluraGeek',
    description: 'projects.description3',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: aluraGeeek,
    repo: 'https://github.com/EdwinPuello/AluraGeek',
    demo: 'https://edwinpuello.github.io/AluraGeek/',
  },
];

export { services, technologies, experiences, projects };
