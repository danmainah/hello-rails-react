const GET_GREETINGS = 'GET_GREETINGS';

const apiGreetings = async () => {
    const request = await fetch('api/greetings.json');
    const response = await request.json();
    const greeting = await response.message;
    return greeting;
  };

const initialState = {};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const getGreetingsSuccess = () => async (dispatch) => {
  const greetings = await apiGreetings();

  if (greetings) {
    dispatch(getGreetings(greetings));
  }
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default greetingsReducer;