import Axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const API_KEY = process.env.REACT_APP_PUBLIC_KEY
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'e435308c24msh7b293874bbdd305p1fd37ejsn801b37f99963',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
  };



export const ApiServices = {
  async fetching(url){
    const response = await Axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
}

