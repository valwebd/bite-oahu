import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles';
import Tooltip from '@material-ui/core/Tooltip';

const Marker = ({ place, setMarkerClicked }) => {
  const handleMarkerClick = () => setMarkerClicked(Number(place.id));
  const classes = useStyles();
  return (
    <div className={classes.marker}>
      <Tooltip
        title={place.name}
        placement='right-start'
        enterTouchDelay='1000'
      >
        <LocationOnIcon
          onClick={handleMarkerClick}
          className={classes.marker}
          fontSize='large'
        />
      </Tooltip>
    </div>
  );
};

export default Marker;
