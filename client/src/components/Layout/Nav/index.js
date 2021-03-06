import React from 'react';
import Logo from '../Logo';
// import Menu from '@material-ui/icons/Menu';
// import EnableAccessibility from '../../Buttons/Accessibility/EnableAccessibility';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 0 10%',
    backgroundColor: 'rgba(255, 255, 255, .97)',
    [theme.breakpoints.up(1024)]: {
      margin: '0 0 7%',
    },
    [theme.breakpoints.up(1440)]: {
      margin: '0 0 4%',
    },
  },
  gridItemCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridItemEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' className={classes.root}>
      <Toolbar>
        <Grid
          container
          alignItems='center'
          direction='row'
          className={classes.item}
        >
          {/* <Grid item xs={4}>
            <EnableAccessibility />
          </Grid> */}
          <Grid
            item
            xs={12}
            className={classes.gridItemCenter}
            style={{ margin: '15px 0 0 ' }}
          >
            <Logo size='small' />
          </Grid>
          {/* <Grid item xs={4} className={classes.gridItemEnd}>
            <Button>
              <Menu />
            </Button>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
