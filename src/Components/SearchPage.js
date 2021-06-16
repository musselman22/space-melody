import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import fan from '../Images/fan.png'


const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white"
  },
  header: {
    fontWeight: "bold",
    align: "center",
    letterSpacing: 7,
    fontFamily: "'Staatliches', cursive",
    fontSize: "9vw",
    color: "#DCEEF2",
    // color: "repeating-linear-gradient(angle, red, blue)",
  },
  textField: {
    width: "45vw",
    color: "white",
    backgroundColor: "white",
    fontSize: "1vw",
  },
  searchButton: {
    marginTop: "2vw",
    width: "20vw",
    backgroundColor: '#F2865E',
    '&:hover': {
      backgroundColor: '#F2622E',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#F2622E',
    },
  },
  logo: {
    width: "15%",
    paddingTop: "50px",
  }
}))


function SearchPage() {
  const classes = useStyles();
  const [searchCriteria, setSearchCriteria] = useState('')

  return (
    <div className="col header">
      <img src={fan} alt="moon" className={classes.logo} />
      <Typography className={classes.header}>Space Melody</Typography>

      <TextField id="outlined-basic" label="Search for a Tune" variant="outlined" className={classes.textField}
        onChange={(event) => { setSearchCriteria(event.target.value) }} />

      <Link to={`/results/${searchCriteria}`} className={classes.link}>
        <Button
          className={classes.searchButton}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Link>


    </div>
  )
}

export default SearchPage;