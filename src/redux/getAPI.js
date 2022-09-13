const URL = 'http://localhost:3000/greetings';

const ActionCreator = (jsonresponse) => ({
  type: 'GET_API',
  payload: jsonresponse,
});

const GetAPI = () => async (dispatch) => {
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(URL, settings);
  const jsonresponse = await response.json();
  dispatch(ActionCreator(jsonresponse[0]));
};

export default GetAPI;
