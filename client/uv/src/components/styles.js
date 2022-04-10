import { makeStyles } from '@material-ui/core/styles/index.js';
import { deepPurple } from '@material-ui/core/colors/index.js';

export default makeStyles((theme) => ({
  palette: {
    primaryColor: "03A9F4",
  },
  appBar: {
    margin: '0px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    fontSize: "20px",
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
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
}));
