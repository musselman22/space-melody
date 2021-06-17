import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ResultsContext from '../Contexts/ResultsContext';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  listText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.25vw",
    color: "#68788C",
    marginLeft: "2%",
  },
  header: {
    align: "center",
    letterSpacing: 7,
    fontFamily: "'Staatliches', cursive",
    fontSize: "3vw",
    color: "#DCEEF2",

  },
  headerContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    borderRadius: "1%",
    marginTop: '.5%',
    marginLeft: '18%',
    marginRight: '18%',
    background: '#DCEEF2',
    '&:hover': {
      background: '#CCDDE0',
      cursor: 'pointer',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#B2CCCF',
    },
  },
  img: {
    width: '10%',
    height: 'auto',
    border: "1px solid white",
    borderRadius: "10%",
  },
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
    <ResultsContext.Provider value={{ setDescription, setLyrics, setSelected, showSong, description, lyrics }}>
      {selected === false &&
        <div className={classes.headerContainer}>
          <Typography className={classes.header}>
            Search Results
          </Typography>
        </div>}


      <List className={classes.list}>
        {results !== [] && selected === false && results.map(result =>

          <div key={result.result.id} className={classes.listContainer} onClick={() => {
            setShowSong(result)
            setSelected(true)
            getLyrics(result)
            getDescription(result)
          }}>

            <ListItem>
              <img src={result.result.song_art_image_thumbnail_url} alt="thumbnail" className={classes.img} />
              <Typography
                component="span"
                className={classes.listText}
              >
                {result.result.full_title}
              </Typography>
            </ListItem>
          </div>)
        }
      </List>

      {selected === true && <Details />}
    </ResultsContext.Provider>
  )
}


export default ResultsPage;