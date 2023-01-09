interface HeaderTexts {
  header: string;
}

export default (langague: string): HeaderTexts => {
  switch (langague) {
    case 'English':
      return {
        header: 'Portfolio',
      };
    case 'Portuguese': {
      return {
        header: 'Portfólio',
      };
    }
    case 'Spanish': {
      return {
        header: 'Portafolio',
      };
    }
    default:
      return {
        header: 'Portfolio',
      };
  }
};
