import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded'; import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeBtn: {
    marginTop: 4,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  appBar: {
    background: '#ADD4D9',
  }

}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <MusicNoteRoundedIcon color="inherit" >
              </MusicNoteRoundedIcon>
              <Typography variant="h6" className={classes.homeBtn}>
                Explore
              </Typography>
            </IconButton>
          </Link>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar