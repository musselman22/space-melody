import { makeStyles } from '@material-ui/core/styles';
import '../Styles/NoResults.css'
import moon from '../Images/moon.png'

const useStyles = makeStyles((theme) => ({
  moon: {
    paddingTop: "50px",
    width: "25vw",
  },
  result: {
    color: "#DCEEF2",
    paddingTop: "20px",
    fontSize: "2vw"
  },
}))


function NoResults() {
  const classes = useStyles();
  return (
    <div className="col header">
      <img src={moon} alt="moon" className={classes.moon} />
      <p className={classes.result}>No water has been found on the moon, try again!</p>
    </div>
  )

}

export default NoResults