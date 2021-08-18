import { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles';
import { data as places } from '../../api/data';

const List = ({ isLoading, markerClicked }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, []);
  console.log(elRefs);

  return (
    <>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <div className={classes.container}>
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item key={place.location_id} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={markerClicked === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </>
  );
};

export default List;
