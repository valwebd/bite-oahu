import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles'

const Marker = ({place, setMarkerClicked}) => {
  const handleMarkerClick = () => setMarkerClicked(place.location_id)
  const classes = useStyles()
  return (
    <div className={classes.marker} >
      <LocationOnIcon onClick={handleMarkerClick} className={classes.marker} fontSize='large'/>
    </div>
  )
}

export default Marker
