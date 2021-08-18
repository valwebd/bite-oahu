import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = ({ setFilter }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5'>Bite Oahu</Typography>
        <Box display='flex'>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Filter by Name or Cuisine'
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={handleChange}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
