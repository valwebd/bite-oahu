import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  marker: {
    color: 'red',
    cursor: 'pointer',
    '&:hover': {
     transform: 'scale(1.2)'
    }
  },
}));