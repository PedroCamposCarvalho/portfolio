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
import colors from 'src/utils/colors';
import projects from 'src/utils/projects';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
    ['@media (max-width:600px)']: { width: '130%', textAlign: 'center', marginTop: 10 },
  },
  textsContainer: {
    width: '50%',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Ubuntu',
    marginBottom: 50,
  },
  grid: { paddingTop: 24, height: 900 },
  tile: {
    background: `linear-gradient(45deg, ${colors.mediumBlue} 25%, ${colors.lightBlue} 90%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: '300px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
    ['@media (max-width:600px)']: { textAlign: 'center', marginTop: 40, height: 150, width: 150 },
  },
  itemName: { color: '#fff', fontSize: 18, fontFamily: 'Ubuntu', marginTop: 18 },
});

const Projects: React.FC = () => {
  const { selectedLanguage } = useLanguageContext();
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const { title } = texts(selectedLanguage);
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Box>
        <GridList cellHeight={200} cols={matches ? 2 : 3} classes={{ root: classes.grid }}>
          {projects.map((tile) => (
            <GridListTile
              key={tile.name}
              classes={{ tile: classes.tile }}
              onClick={() => window.open(tile.github, '_blank', 'noreferrer')}
            >
              <Image
                src={tile.image}
                alt={tile.name}
                width={matches ? 50 : 120}
                height={matches ? 50 : 120}
                style={{ borderRadius: 8 }}
              />
              <Typography className={classes.itemName}>{tile.name}</Typography>
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Box>
  );
};

export default Projects;
