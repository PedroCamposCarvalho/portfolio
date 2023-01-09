interface ContactMeTexts {
  title: string;
}

export default (langague: string): ContactMeTexts => {
  switch (langague) {
    case 'English':
      return {
        title: 'My projects',
      };
    case 'Portuguese': {
      return {
        title: 'Meus projetos',
      };
    }
    case 'Spanish': {
      return {
        title: 'Mis proyectos',
      };
    }
    default:
      return {
        title: 'My projects',
      };
  }
};
