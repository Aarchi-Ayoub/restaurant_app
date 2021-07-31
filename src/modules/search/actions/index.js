import axios from 'axios';
import Types from '../actionsTypes';
import variables from 'config/API';
export const search = search => async dispatch => {
  try {
    const {data} = await axios.get(`${variables.BASE_URL}/search`, {
      params: {
        limit: 50,
        term: search,
        location: 'san jose',
      },
      headers: {
        Authorization: `Bearer ${variables.API_KEY}`,
      },
    });
    dispatch({
      type: Types.SEARCH,
      payload: data.businesses,
    });
  } catch (error) {
    return error.message;
  }
};
