import {useState, useEffect, createRef} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {
  CircularProgress,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';


const List = ({places, isLoading, markerClicked}) => {
  const classes = useStyles();
  console.log({ markerClicked })
  // const [elRefs, setElRefs] = useState([])
  
  // useEffect(() => {
  //   places.map((place) => setElRefs(place.location_id))
  // }, [places])

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
        {places?.map((place) => (
          <Grid item key={place.location_id} xs={12}>
            <PlaceDetails markerClicked={markerClicked} place={place} />
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
