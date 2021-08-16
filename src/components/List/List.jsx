import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import useStyles from './styles';


const List = ({places}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
