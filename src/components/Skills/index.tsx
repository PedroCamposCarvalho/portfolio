import React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLanguageContext } from 'src/hooks/language';
import texts from './texts';
import skills from 'src/utils/skills';
import colors from 'src/utils/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
  title: {
    color: '#fff',
    marginBottom: '5%',
    fontSize: 28,
    fontFamily: 'Ubuntu',
    ['@media (max-width:600px)']: { textAlign: 'center', marginTop: 10 },
  },
  grid: {
    paddingTop: 24,
    paddingLeft: 200,
    paddingRight: 200,
    ['@media (max-width:600px)']: { padding: 0, width: '100%' },
  },
  tile: {
    background: `linear-gradient(45deg, ${colors.mediumBlue} 25%, ${colors.lightBlue} 90%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: '150px',
    width: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tileText: { color: '#fff', fontSize: 14, fontFamily: 'Ubuntu', marginTop: 18 },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  const { selectedLanguage } = useLanguageContext();

  const { title } = texts(selectedLanguage);

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Box>
        <GridList cellHeight={200} cols={matches ? 2 : 4} classes={{ root: classes.grid }}>
          {skills.map((tile) => (
            <GridListTile key={tile.name} classes={{ tile: classes.tile }}>
              <Image src={tile.image} alt={tile.name} width={50} height={50} style={{ borderRadius: 8 }} />
              <Typography className={classes.tileText}>{tile.name}</Typography>
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Box>
  );
};

export default Skills;
