import { makeStyles } from "@material-ui/core/styles/index.js";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: '#65ccf7',
      },
      image: {
        marginLeft: '15px',
      },
}));