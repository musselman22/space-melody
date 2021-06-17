import React, { useContext } from 'react';
import ResultsContext from "../Contexts/ResultsContext"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  searchButton: {
    fontSize: "1vw",
    color: "white",
    marginTop: ".5vw",
    marginLeft: "1.5vw",
    marginBottom: "1vw",
    borderRadius: "10px",
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
  songResult: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },
  card: {
    width: "50vw",
    background: "#DCEEF2",
    color: "#68788C",
    borderRadius: "2%"
  },
  accordion: {
    width: "50vw",
    fontSize: "1vw",
    background: "#DCEEF2",
    color: "#68788C",
    borderRadius: "3%"
  },
  accTitle: {
    fontSize: "2vw",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "bold",
    color: "#68788C"
  },
  cardImg: {
    width: "41%",
    marginBottom: "1%",
    border: "3px solid white",
    borderRadius: "10px",
  },
  cardContentContainer: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
  },
  cardTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.3vw",
    fontWeight: "bold"
  },
}))

function Details() {
  const classes = useStyles();
  const { setDescription, setLyrics, setSelected, showSong, description, lyrics } = useContext(ResultsContext)
  return (
    <div>
      <Button
        variant="contained"
        className={classes.searchButton}
        onClick={() => {
          setDescription('')
          setLyrics('')
          setSelected(false)
        }}
      >Go back to Search Results</Button>
      <div className={classes.songResult}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.cardContentContainer}><CardMedia
              component="img"
              alt="artist album"
              image={showSong.result.song_art_image_thumbnail_url}
              title="artist album"
              className={classes.cardImg}
            />
            </div>
            <div className={classes.cardContentContainer}>
              <Typography component="span" className={classes.cardTitle}>
                {showSong.result.full_title}
              </Typography>
            </div>



          </CardContent>
        </Card>

        <Accordion className={classes.accordion}>
          <AccordionSummary className={classes.accTitle} expandIcon={<ExpandMoreIcon />}>Song Description</AccordionSummary>
          <AccordionDetails>
            {description}
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary className={classes.accTitle} expandIcon={<ExpandMoreIcon />}>Lyrics</AccordionSummary>
          <AccordionDetails>
            <pre>
              {lyrics !== {} && lyrics}
            </pre>
          </AccordionDetails>
        </Accordion>
      </div>
    </div >
  )
}

export default Details