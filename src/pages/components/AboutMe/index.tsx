import React from 'react';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLanguageContext } from 'src/hooks/language';
import colors from 'src/utils/colors';
import Vid from './videos/english.mp4';
import texts from './texts';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    padding: '0 64px',
  },
  textsContainer: {
    width: '50%',
  },
  title: { color: '#fff', fontSize: 28, fontFamily: 'Ubuntu' },
  description: { color: colors.lightBlue, width: '90%', fontSize: 20, fontFamily: 'Ubuntu' },
  subDescription: { color: colors.mediumBlue, width: '90%', fontSize: 18, fontFamily: 'Ubuntu' },
});

const AboutMe: React.FC = () => {
  const classes = useStyles();
  const { selectedLanguage } = useLanguageContext();
  const { title, description, languageDescription } = texts(selectedLanguage);
  return (
    <Box className={classes.root}>
      <Box className={classes.textsContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography className={classes.subDescription}>{languageDescription}</Typography>
      </Box>
      <ReactPlayer
        style={{ marginLeft: 'auto' }}
        url={`https://pluma-files.s3.amazonaws.com/${selectedLanguage}.mp4`}
        playing={true}
        controls={true}
        loop={true}
        muted={true}
        playsinline={true}
      />
    </Box>
  );
};

export default AboutMe;
