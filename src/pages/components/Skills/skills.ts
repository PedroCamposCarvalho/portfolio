import { StaticImageData } from 'next/image';
import html from './assets/html.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import typescript from './assets/typescript.png';
import csharp from './assets/csharp.png';
import docker from './assets/docker.png';
import codepush from './assets/codepush.png';
import mui from './assets/mui.png';
import react from './assets/react.png';
import reactNative from './assets/react_native.png';
import node from './assets/node.png';
import sql from './assets/sql.png';
import nextjs from './assets/nextjs.png';
import github from './assets/github.png';
import typeorm from './assets/typeorm.png';
import figma from './assets/figma.svg';
import redux from './assets/redux.png';
import expo from './assets/expo.png';

export interface SkillsProps {
  image: StaticImageData;
  name: string;
}

const skills: SkillsProps[] = [
  {
    image: html,
    name: 'HTML 5',
  },
  {
    image: css,
    name: 'CSS 3',
  },
  {
    image: javascript,
    name: 'Javascript',
  },
  {
    image: typescript,
    name: 'Typescript',
  },
  {
    image: react,
    name: 'React JS',
  },
  {
    image: reactNative,
    name: 'React Native',
  },
  {
    image: csharp,
    name: 'c#',
  },
  {
    image: docker,
    name: 'Docker',
  },
  {
    image: codepush,
    name: 'CodePush',
  },
  {
    image: mui,
    name: 'Material UI',
  },
  {
    image: node,
    name: 'Node JS',
  },
  {
    image: sql,
    name: 'SQL Server',
  },
  {
    image: nextjs,
    name: 'Next JS',
  },
  {
    image: github,
    name: 'GitHub',
  },
  {
    image: typeorm,
    name: 'TypeORM',
  },
  {
    image: redux,
    name: 'Redux',
  },
  {
    image: expo,
    name: 'Expo',
  },
  {
    image: figma,
    name: 'Figma',
  },
];

export default skills;
