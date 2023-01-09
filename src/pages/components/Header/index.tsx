import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DropDown from 'src/pages/components/DropDown';
import { useLanguageContext } from 'src/hooks/language';
import colors from 'src/utils/colors';
import texts from './texts';

const useStyles = makeStyles({
  root: {
    background: colors.darkBlue,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: '92%',
    padding: '0 64px',
    ['@media (max-width:600px)']: {
      paddingLeft: 20,
      paddingRight: 20,
      width: '120%',
    },
  },
  title: { color: '#fff', fontSize: 32, fontFamily: 'Ubuntu' },
});

const Header: React.FC = () => {
  const { selectedLanguage } = useLanguageContext();

  const classes = useStyles();
  const { header } = texts(selectedLanguage);
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{header}</Typography>
      <Box>
        <DropDown />
      </Box>
    </Box>
  );
};

export default Header;
