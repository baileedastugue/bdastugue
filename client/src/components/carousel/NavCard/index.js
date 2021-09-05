import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
  },
  navTitle: {
    listStyleType: 'none',
    textTransform: 'uppercase',
    wordWrap: 'break-word',
    fontSize: '4rem',
    letterSpacing: '.1rem',
  },
  navDetails: {
    opacity: 0,
  },
});

const NavCard = ({ slide }) => {
  const classes = useStyles();

  return (
    <Link
      activeClass={slide.id === 0 && 'active'}
      to={slide.navId}
      smooth={true}
      spy={true}
    >
      <CardContent className={`card-nav ${classes.root} `}>
        <Typography
          variant='h2'
          component='li'
          listStyleType='none'
          className={`card-nav--title ${classes.navTitle}`}
        >
          {slide.name}
        </Typography>
      </CardContent>
    </Link>
  );
};

export default NavCard;
