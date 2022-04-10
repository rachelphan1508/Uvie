import { makeStyles } from '@material-ui/core/styles/index.js';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: '#ededed',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
    color: '#ededed'
  },
  fullHeightCard: {
    height: '100%',
    color: '#ededed',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
  },
});
