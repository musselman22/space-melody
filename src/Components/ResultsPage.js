import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ResultsPage.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import '../Styles/ResultsPage.css'

const useStyles = makeStyles((theme) => ({
  searchButton: {
    color: "white",
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
  listItem: {
    width: '100%',
    backgroundColor: "#68788C",
    display: "flex",
    borderBottom: "2px solid black",
  },
  listText: {
    letterSpacing: 7,
    fontFamily: "'Staatliches', cursive",
    fontSize: "3vw",
    color: "#DCEEF2",
    marginLeft: "2%",
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1%',
    backgroundColor: 'white',
    background: 'white',
    color: 'white',
  },

  outterContainer: {
    margin: '.5%',
    padding: '.5%',
  },

  img: {
    width: '10%',
    height: 'auto',
  },

  songResult: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    flexBasis: "100",
    flex: "1",
  }

}))

function ResultsPage() {
  const classes = useStyles();
  let { id } = useParams();
  const [results, setResults] = useState([]);
  const [showSong, setShowSong] = useState({});
  const [selected, setSelected] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    let getData = async () => {
      let response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ queryParams: id })
      })
      let data = await response.json()
      setResults(data.response.hits)
    }
    getData()
  }, [id])

  async function getLyrics(result) {
    let response = await fetch('http://localhost:3001/lyrics', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ queryArtist: result.result.primary_artist.name, queryTitle: result.result.title })
    })
    let data = await response.json()
    setLyrics(data.data)
  }

  async function getDescription(result) {
    console.log("api path: ", result.result.api_path)
    let response = await fetch('http://localhost:3001/description', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ queryDesc: result.result.api_path })
    })
    let data = await response.json()
    setDescription(data.data)
  }

  return (
    <div className={classes.outterContainer}>
      {results !== [] && selected === false ? results.map(result =>

        <div key={result.result.id} className={`${classes.container} image-div`} onClick={() => {
          setShowSong(result)
          setSelected(true)
          getLyrics(result)
          getDescription(result)
        }}>
          <List className={classes.list}>
            <ListItem alignItems="flex-start">
              <img className="image-thumbnail" src={result.result.song_art_image_thumbnail_url} alt="thumbnail" />


              <Typography
                component="span"
                className={classes.listText}
                color="textPrimary"
              >
                {result.result.full_title}
              </Typography>

            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </div>)
        :
        <div className={classes.songResult}>
          <Button
            className={classes.searchButton}
            onClick={() => {
              setDescription('')
              setLyrics('')
              setSelected(false)
            }}
          >Go back to Search Results</Button>
          <div>
            <img src={showSong.result.song_art_image_thumbnail_url} alt="thumbnail" />

          </div>
          <div>
            <span>
              {showSong.result.full_title}
            </span>
          </div>
          <div>
            <p>
              {description}
            </p>
          </div>
          <div>
            <pre>
              {lyrics !== {} && lyrics}
            </pre>
          </div>
        </div >}
    </div>
  )
}


export default ResultsPage;