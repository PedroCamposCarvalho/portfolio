import { StaticImageData } from 'next/image';
import testeImg from './assets/teste_foto.jpeg';
import new_year_goals_app from './assets/new_year_goals.png';
import ahaya from './assets/ahaya.png';
import portfolio from './assets/portfolio.png';

interface ProjectProps {
  image: StaticImageData;
  name: string;
  github: string;
}

const projects: ProjectProps[] = [
  {
    image: ahaya,
    name: 'Ahaya - App',
    github: 'https://github.com/PedroCamposCarvalho/ahaya_app',
  },
  {
    image: ahaya,
    name: 'Ahaya - Web',
    github: 'https://github.com/Pluma-Tech/beach_tennis_frontend',
  },
  {
    image: ahaya,
    name: 'Ahaya - Backend',
    github: 'https://github.com/Pluma-Tech/beach_tennis_backend',
  },
  {
    image: portfolio,
    name: 'Portfolio',
    github: 'https://github.com/PedroCamposCarvalho/portfolio',
  },
  {
    image: new_year_goals_app,
    name: 'New Year Goals',
    github: 'https://github.com/PedroCamposCarvalho/new_year_goals',
  },
];

export default projects;
