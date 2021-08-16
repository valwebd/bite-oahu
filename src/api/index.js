import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  url: { URL },
  params: {
    bl_latitude: '21.278802',
    tr_latitude: '21.729736',
    bl_longitude: '-158.261877',
    tr_longitude: '-157.641883',
  },
  headers: {
    'x-rapidapi-key': '919759c863mshefae1d3c68cba52p133137jsn3b9195aa441e',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  },
};

const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getPlacesData;
