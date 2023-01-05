interface HeaderTexts {
  title: string;
}

export default (langague: string): HeaderTexts => {
  switch (langague) {
    case 'English':
      return {
        title: 'My skills',
      };
    case 'Portuguese': {
      return {
        title: 'Minhas habilidades',
      };
    }
    case 'Spanish': {
      return {
        title: 'Mis habilidades',
      };
    }
    default:
      return {
        title: 'My skills',
      };
  }
};
