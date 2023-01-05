interface HeaderTexts {
  title: string;
  description: string;
  languageDescription: string;
}

export default (langague: string): HeaderTexts => {
  switch (langague) {
    case 'English':
      return {
        title: 'Hello! My name is Pedro Carvalho',
        description: 'I am a FullStack developer with much joy for apps. Check out my video to learn more about me',
        languageDescription:
          'The video is available in English, Portuguese and Spanish. Select the language in the top right corner to see me speaking other langagues',
      };
    case 'Portuguese': {
      return {
        title: 'Olá! Me chamo Pedro Carvalho',
        description:
          'Sou um desenvolvedor FullStack apaixonado por aplicativos. Veja o vídeo ao lado para me conhecer melhor.',
        languageDescription:
          'O vídeo está disponível em Portugues, Ingles e Espanhol. Selecione a linguagem no canto superior direito para me ver falando outros idiomas',
      };
    }
    case 'Spanish': {
      return {
        title: '¡Hola! Me llamo Pedro Carvalho',
        description: 'Soy un desarrollador FullStack. Mira el video al lado para conocerme mejor',
        languageDescription:
          'El video está disponible en portugués, inglés y español.Seleccione el idioma en la esquina superior derecha para verme hablando otros idiomas',
      };
    }
    default:
      return {
        title: 'Hello! My name is Pedro Carvalho',
        description: 'I am a Front-End developer with much joy for apps. Check out my video to learn more about me',
        languageDescription:
          'The video is available in English, Portuguese and Spanish. Select the language in the top right corner to see me speaking other langagues',
      };
  }
};
