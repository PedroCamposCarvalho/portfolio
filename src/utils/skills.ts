import { StaticImageData } from 'next/image';
import html from './skillsAssets/html.png';
import css from './skillsAssets/css.png';
import javascript from './skillsAssets/javascript.png';
import typescript from './skillsAssets/typescript.png';
import csharp from './skillsAssets/csharp.png';
import docker from './skillsAssets/docker.png';
import codepush from './skillsAssets/codepush.png';
import mui from './skillsAssets/mui.png';
import react from './skillsAssets/react.png';
import reactNative from './skillsAssets/react_native.png';
import node from './skillsAssets/node.png';
import sql from './skillsAssets/sql.png';
import nextjs from './skillsAssets/nextjs.png';
import github from './skillsAssets/github.png';
import typeorm from './skillsAssets/typeorm.png';
import figma from './skillsAssets/figma.svg';
import redux from './skillsAssets/redux.png';
import expo from './skillsAssets/expo.png';

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
    name: 'C#',
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
