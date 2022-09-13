const reducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_API':
      return action.payload.greeting;
    default:
      return state;
  }
};

export default reducer;
