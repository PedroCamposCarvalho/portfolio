import React, { useEffect, useState } from 'react';
import * as animationData from 'src/assets/paint4.json';
import Header from 'src/pages/components/Header';
import AboutMe from 'src/pages/components/AboutMe';
import Skills from 'src/pages/components/Skills';
import Projects from 'src/pages/components/Projects';
import ContactMe from 'src/pages/components/ContactMe';
import { useLanguageContext } from 'src/hooks/language';
import { Container, FlagContainer } from './styles';

const Home: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const { selectedLanguage } = useLanguageContext();

  useEffect(() => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 2000);
  }, [selectedLanguage]);

  const animationOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
  };

  return (
    <Container>
      <Header />
      <hr />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </Container>
  );
};

export default Home;
