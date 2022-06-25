import { makeStyles } from '@material-ui/core/styles/index.js';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    background: '#EDEDEE',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(0.3),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(3),
    width: '48%',
  },
  container: {
    width: '100%',
    background: '#EDEDEE',

  },
  intro: {
    fontWeight: '800',
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(8),
    fontFamily: 'Open Sans',
  },
  switchButton: {
    fontWeight: '900',
    
  },
  switchText: {
    textAlign: 'right',
    fontSize: 20,
  }
}));