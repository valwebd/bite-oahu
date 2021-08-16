import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {
  CircularProgress,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';


const List = ({places, isLoading}) => {
  const classes = useStyles();

  return (
  <>
    {
      isLoading ? (
      <div className = { classes.loading } >
        <CircularProgress size="5rem" />
      </div >) : (
      <>
    <div className={classes.container}>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
        </div>
        </>
        )}
      </>
  )
}

export default List
