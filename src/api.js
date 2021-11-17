import axios from 'axios';
import { OMDB_API_KEY } from './constants';

const CancelToken = axios.CancelToken;
let source = null;
const httpProtocol = window?.location?.protocol ?? 'http:';
export const getMovieList = async (title) => {
  if (source) {
    source.cancel('Operation canceled by the user.');
  }
  try {
    source = CancelToken.source();
    const result = await axios.get(
      `${
        httpProtocol.split(':')[0]
      }://www.omdbapi.com/?s=${title}&&type=movie&apikey=${OMDB_API_KEY}`,
      { cancelToken: source.token }
    );
    source = null;
    return result;
  } catch (err) {
    if (axios.isCancel(err)) {
      // console.log('api call cancelled');
    } else {
      // console.log('api call threw some other error');
      source = null;
    }
    throw err;
  }
};
