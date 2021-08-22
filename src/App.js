import { useEffect, useState } from 'react';
import { CssBaseline, Grid, Container, useMediaQuery } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import data from './api/data';

function App() {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [markerClicked, setMarkerClicked] = useState(null);
  const [filter, setFilter] = useState('');

  const matches = useMediaQuery('(min-width:960px)');

  useEffect(() => {
    setIsLoading(true);
    // Use API
    // getPlacesData().then((data) => {
    //   console.log(data);
    //   setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
    //   setIsLoading(false);
    // });
    // Use own DB
    setPlaces(data);
    setIsLoading(false);
  }, []);
  return (
    <>
      <CssBaseline />
      <Header setFilter={setFilter} />
      {matches ? (
        <>
          <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
              <List
                places={places}
                isLoading={isLoading}
                markerClicked={markerClicked}
                filter={filter}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map
                filter={filter}
                places={places}
                setMarkerClicked={setMarkerClicked}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Container>
            <Grid container spacing={3} style={{ width: '100%' }}>
              <Grid item xs={12} md={8}>
                <Map
                  filter={filter}
                  places={places}
                  setMarkerClicked={setMarkerClicked}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <List
                  places={places}
                  isLoading={isLoading}
                  markerClicked={markerClicked}
                  filter={filter}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
