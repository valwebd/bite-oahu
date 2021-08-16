import { useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';


import Header from './components/Header/Header';
import List from './components/List/List'
import Map from './components/Map/Map'
// import getPlacesData from './api/index';
import data from './api/data';


function App() {
  const [ places, setPlaces ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)
    // getPlacesData().then((data) => {
    //   console.log(data);
    //   setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
    //   setIsLoading(false);
    // });
    setPlaces(data);
    setIsLoading(false);
  }, []);
  return (
    <>
      <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List isLoading={isLoading} places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map places={places} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
