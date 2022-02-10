import { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const List = ({ places, filter, markerClicked }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={3} className={classes.list}>
        {places
          .filter((place) => {
            if (
              filter === '' ||
              place.name.toLowerCase().includes(filter.toLowerCase()) ||
              place.cuisine.some((e) =>
                e.name.toLowerCase().includes(filter.toLowerCase())
              )
            )
              return place;
          })
          .map((place, i) => (
            <Grid ref={elRefs[i]} item key={place.id} xs={12}>
              <PlaceDetails
                place={place}
                selected={markerClicked === i}
                refProp={elRefs[i]}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default List;
