import { makeStyles } from '@material-ui/core/styles/index.js';
import { deepPurple } from '@material-ui/core/colors/index.js';

export default makeStyles((theme) => ({
  palette: {
    primary: "03A9F4",
  },
  appBar: {
    margin: '0px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    fontSize: "20px",
    height: '60px',
    fontFamily: 'Open Sans',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    fontFamily: 'Open Sans',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText("#03A9F4"),
    backgroundColor: "#03A9F4",
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: '30px',
  },
  ul: {
    justifyContent: 'space-around',
  },
}));