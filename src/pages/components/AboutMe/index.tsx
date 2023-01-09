import React from 'react';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLanguageContext } from 'src/hooks/language';
import useMediaQuery from '@mui/material/useMediaQuery';
import colors from 'src/utils/colors';
import texts from './texts';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    padding: '0 64px',
    ['@media (max-width:600px)']: { width: '100%', flexDirection: 'column', alignItems: 'center', padding: 0 },
  },
  textsContainer: {
    width: '50%',
    ['@media (max-width:600px)']: { width: '100%' },
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Ubuntu',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
  description: {
    color: colors.lightBlue,
    width: '90%',
    fontSize: 20,
    fontFamily: 'Ubuntu',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
  subDescription: {
    color: colors.mediumBlue,
    width: '90%',
    fontSize: 18,
    fontFamily: 'Ubuntu',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
});

const AboutMe: React.FC = () => {
  const classes = useStyles();

  const { selectedLanguage } = useLanguageContext();

  const matches = useMediaQuery('(max-width:600px)');

  const { title, description, languageDescription } = texts(selectedLanguage);

  return (
    <Box className={classes.root}>
      <Box className={classes.textsContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography className={classes.subDescription}>{languageDescription}</Typography>
      </Box>
      <ReactPlayer
        style={{ marginLeft: matches ? 120 : 'auto', marginTop: matches ? 20 : 0 }}
        url={`https://pluma-files.s3.amazonaws.com/${selectedLanguage}.mp4`}
        controls={true}
        width={matches ? '100%' : '50%'}
      />
    </Box>
  );
};

export default AboutMe;
