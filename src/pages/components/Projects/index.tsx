import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import colors from 'src/utils/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 64px',
  },
  textsContainer: {
    width: '50%',
  },
  title: { color: '#fff', fontSize: 28, fontFamily: 'Ubuntu' },
});

export interface ProjectProps {
  img: string;
  name: string;
  github: string;
}

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>My projects</Typography>
    </Box>
  );
};

export default Projects;
