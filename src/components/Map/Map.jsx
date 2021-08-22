import React from 'react';
import useStyles from './styles';
import Marker from '../Marker/Marker';
import GoogleMapReact from 'google-map-react';

const Map = ({ places, filter, setMarkerClicked }) => {
  const coords = { lat: 21.355959, lng: -157.788222 };
  const classes = useStyles();

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const markers = places.filter((place) => {
    if (filter === '') {
      return place;
    } else if (place.name.toLowerCase().includes(filter.toLowerCase())) {
      return place;
    } else if (
      place.cuisine.some((e) =>
        e.name.toLowerCase().includes(filter.toLowerCase())
      )
    ) {
      return place;
    }
  });

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={11}
        options={{ disableDefaultUI: true, zoomControl: true }}
        hoverDistance={20}
        margin={[50, 50, 50, 50]}
      >
        {markers
          // .filter((place) => {
          //   if (filter === '') {
          //     return place;
          //   } else if (
          //     place.name.toLowerCase().includes(filter.toLowerCase())
          //   ) {
          //     return place;
          //   } else if (
          //     place.cuisine.some((e) =>
          //       e.name.toLowerCase().includes(filter.toLowerCase())
          //     )
          //   ) {
          //     return place;
          //   }
          // })
          .map((place) => (
            <Marker
              setMarkerClicked={setMarkerClicked}
              place={place}
              onClick={() => console.log('click')}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={place.id}
              text={place.name}
            ></Marker>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
