import React, { useCallback } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLanguageContext } from 'src/hooks/language';
import texts from './texts';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import mail from './assets/mail.svg';
import phone from './assets/phone.svg';
import colors from 'src/utils/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
  textsContainer: {
    width: '100%',
  },
  title: { color: '#fff', fontSize: 28, fontFamily: 'Ubuntu', marginBottom: 50 },
  content: {
    width: '60%',
    ['@media (max-width:600px)']: { height: 500 },
  },
  grid: { paddingTop: 24, height: 400 },
  tile: {
    background: `linear-gradient(45deg, ${colors.mediumBlue} 25%, ${colors.lightBlue} 90%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: '160px',
    width: '160px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
    cursor: 'pointer',
    ['@media (max-width:600px)']: { height: 120, width: 120 },
  },
  itemName: { color: '#fff', fontSize: 12, fontFamily: 'Ubuntu', marginTop: 18, width: '50%', textAlign: 'center' },
});

const ContactMe: React.FC = () => {
  const { selectedLanguage } = useLanguageContext();
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const { title, copiedToClipboard } = texts(selectedLanguage);

  const copyToClipboard = useCallback((text: string, item: string) => {
    toast(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: { backgroundColor: '#4bb543', color: '#fff' },
    });
    navigator.clipboard.writeText(item);
  }, []);

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.content}>
        <GridList cellHeight={200} cols={matches ? 2 : 4} classes={{ root: classes.grid }}>
          <GridListTile
            classes={{ tile: classes.tile }}
            onClick={() => window.open('https://www.linkedin.com/in/pedro-campos-570a31140/', '_blank', 'noreferrer')}
          >
            <Image src={linkedin} alt="Linkedin" width={50} height={50} style={{ borderRadius: 8 }} />
            <Typography className={classes.itemName}>Linkedin</Typography>
          </GridListTile>
          <GridListTile
            classes={{ tile: classes.tile }}
            onClick={() => window.open('https://github.com/PedroCamposCarvalho', '_blank', 'noreferrer')}
          >
            <Image src={github} alt="Linkedin" width={50} height={50} style={{ borderRadius: 8 }} />
            <Typography className={classes.itemName}>Github</Typography>
          </GridListTile>
          <GridListTile
            classes={{ tile: classes.tile }}
            onClick={() => copyToClipboard(copiedToClipboard, `+5511996154995`)}
          >
            <Image src={phone} alt="phone" width={50} height={50} style={{ borderRadius: 8 }} />
            <Typography noWrap className={classes.itemName}>
              +55 (11) 99615-4995
            </Typography>
          </GridListTile>
          <GridListTile
            classes={{ tile: classes.tile }}
            onClick={() => copyToClipboard(copiedToClipboard, `pedrocamposcarvalho97@gmail.com`)}
          >
            <Image src={mail} alt="Linkedin" width={50} height={50} style={{ borderRadius: 8 }} />
            <Typography noWrap className={classes.itemName}>
              pedrocamposcarvalho97@gmail.com
            </Typography>
          </GridListTile>
        </GridList>
      </Box>
    </Box>
  );
};

export default ContactMe;
