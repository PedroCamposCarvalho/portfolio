interface ContactMeTexts {
  copiedToClipboard: string;
  title: string;
}

export default (langague: string): ContactMeTexts => {
  switch (langague) {
    case 'English':
      return {
        copiedToClipboard: 'Copied to clipboard!',
        title: 'Contact Me',
      };
    case 'Portuguese': {
      return {
        copiedToClipboard: 'Copiado para a área de transferência',
        title: 'Fale comigo',
      };
    }
    case 'Spanish': {
      return {
        copiedToClipboard: 'Copiado a clipboard',
        title: 'Contáctame',
      };
    }
    default:
      return {
        copiedToClipboard: 'Copied to clipboard!',
        title: 'Contact Me',
      };
  }
};
