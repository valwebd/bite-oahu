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
        <Box display='flex'>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Filter by name or cuisine'
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={handleChange}
            />
          </div>
        </Box>
        <Typography variant='h5'>BiteOahu</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
