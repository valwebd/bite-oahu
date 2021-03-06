import useStyles from './styles';

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const PlaceDetails = ({ place, refProp, selected }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80'
        }
        title={place.name}
      />
      <CardContent>
        <Typography variant='h5'>{place.name}</Typography>
        <Typography variant='subtitle1'>{place.description}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'></Typography>
        </Box>
        {/* {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
        ))} */}
        {place?.address && (
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={() => window.open(place?.web_url, '_blank')}
          >
            TripAdvisor
          </Button>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={() => window.open(place?.website, '_blank')}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
