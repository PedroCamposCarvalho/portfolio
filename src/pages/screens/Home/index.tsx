import React, { useEffect, useState } from 'react';
import * as animationData from 'src/assets/paint4.json';
import Header from 'src/components/Header';
import AboutMe from 'src/components/AboutMe';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import ContactMe from 'src/components/ContactMe';
import { useLanguageContext } from 'src/hooks/language';
import styled from 'styled-components';
import colors from 'src/utils/colors';

const Container = styled.div`
  hr {
    height: 2px;
    background-color: ${colors.lightBlue};
    border: 0;
    margin-top: -8px;
  }
  @media only screen and (max-width: 600px) {
    hr {
      width: 130%;
    }
  }
`;

export const FlagContainer = styled.div`
  margin-top: -35%;
`;

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
