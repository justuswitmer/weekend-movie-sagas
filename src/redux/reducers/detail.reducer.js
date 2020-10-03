// Used to store movie detail returned from server
const detail = (state = [], action) => {
  console.log('in detail; here is my action', action.payload);
  switch (action.type) {
    case 'SET_DETAIL':
      return action.payload;
    default:
      return state;
  }
}

export default detail;