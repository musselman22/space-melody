import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchPage() {
  // const [url, setUrl] = useState('')
  useEffect(() => {
    let getData = async () => {
      let response = await fetch('https://genius.com/api/search?q=Kendrick%20Lamar')
      let data = await response.json()
      console.log(data)
    }
    getData()

    // axios.get('https://genius.com/api/search?q=Kendrick%20Lamar', {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //   }
    // })
    // .then(response => response.json())
    // .then(result => {
    //   setUrl(result)
    //   console.log('Success:', result);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // })
  }, [])


  return (
    <>
      <h1>Space Melody</h1>
      <TextField id="outlined-basic" label="Search for a Tune" variant="outlined" />
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>

    </>
  )
}

export default SearchPage;


// make a get requet to this:  api.genius.com/search?q=Kendrick%20Lamar

//  https://material-ui.com/components/text-fields/ 

// https://material.io/components/text-fields


// Api request to get access token https://api.genius.com/oauth/authorize?
// client_id=YOUR_CLIENT_ID&
// redirect_uri=YOUR_REDIRECT_URI&
// scope=REQUESTED_SCOPE&
// state=SOME_STATE_VALUE&
// response_type=code

// https://api.genius.com/web_pages/lookup?canonical_url=http://example.com

// Client ID: MCCC7jRYHG6bjiZcm-xq_P4Mednf9vElKygekK5Xsfsl7I8CzzmXpWKHcYa0Dt0O
// Client secret: yJNO0pTe_upIuL2uwzOKd3SWeLFNxrkqTCA45rIsEMW-g2vtItp5ne9DTeDw4Qw6IRD_K-5rR8dRaqnA9Ktqdg
// clent access token: PyULTdWwY4cK6hb7WcNryYFlcU5a0KKiRIHlSd3yELvBIanoVI_Ue-konp_sossQ
