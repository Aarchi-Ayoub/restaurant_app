import Type from '../actionsTypes';
const initialState = {
  item: {},
};
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Type.GET_ONE:
      return {...state, item: payload};
    default:
      return state;
  }
};
