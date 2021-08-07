import axios from 'axios';
import Types from '../actionsTypes';
import variables from 'config/API';

export const getOne = id => async dispatch => {
  try {
    const {data} = await axios.get(`${variables.BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${variables.API_KEY}`,
      },
    });
    dispatch({
      type: Types.GET_ONE,
      payload: data,
    });
  } catch (error) {
    return error.message;
  }
};
