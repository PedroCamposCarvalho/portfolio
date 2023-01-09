import React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Brazil from 'src/assets/brazil.png';
import Spain from 'src/assets/spain.png';
import UnitedStates from 'src/assets/us.png';
import { useLanguageContext } from 'src/hooks/language';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FlagCard: React.FC = () => {
  const classes = useStyles();
  const { selectedLanguage } = useLanguageContext();
  switch (selectedLanguage) {
    case 'English':
      return (
        <Box className={classes.root}>
          <Image src={UnitedStates} alt="United States" />
        </Box>
      );
    case 'Portuguese':
      return (
        <Box className={classes.root}>
          <Image src={Brazil} alt="Brazil" />
        </Box>
      );
    default:
      return (
        <Box className={classes.root}>
          <Image src={Spain} alt="Spain" />
        </Box>
      );
  }
};

export default FlagCard;
