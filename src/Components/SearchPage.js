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
  },
  textField: {
    width: "45vw",
    color: "white",
    backgroundColor: "white",
    fontSize: "1vw",
  },
  searchButton: {
    fontSize: "1.1vw",
    borderRadius: "10px",
    marginTop: "1vw",
    width: "20vw",
    height: "3vw",
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
  },
  input: {
    '&[type=text]:focus': {
      border: "2px solid #F2CF63",
    },
    width: "45vw",
    height: "4vw",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #DCEEF2",
    borderRadius: "10px",
    transition: "0.5s",
    outline: "none",
    WebkitTransition: "0.5s",
    marginBottom: ".5%",
    fontSize: "1.25vw",
  },


}))


function SearchPage() {
  const classes = useStyles();
  const [searchCriteria, setSearchCriteria] = useState('')

  return (
    <div className="col header">
      <img src={fan} alt="moon" className={classes.logo} />
      <Typography className={classes.header}>Space Melody</Typography>
      <input type="text" placeholder="Explore a tune 🚀" className={classes.input}
        onChange={(event) => { setSearchCriteria(event.target.value) }} />

      <Link to={`/results/${searchCriteria}`} className={classes.link}>
        <Button
          className={classes.searchButton}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SearchIcon style={{ fontSize: "2vw" }} />}
        >
          Search
        </Button>
      </Link>


    </div>
  )
}

export default SearchPage;