import Type from '../actionsTypes';
const initialState = {
  items: [],
};
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Type.SEARCH:
      return {...state, items: payload};
    default:
      return state;
  }
};
