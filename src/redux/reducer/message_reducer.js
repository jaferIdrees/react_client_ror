import fetchMessage from '../../api/fetchMessage';

const CHANGE_MESSAGE = 'change_message';
const initialState = { message: 'Hello World' };

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_MESSAGE:
    {
      const newState = { ...payload };
      return newState;
    }
    default: return state;
  }
}

export const retriveGreeting = () => async (dispatch) => {
  try {
    const greeting = await fetchMessage();
    dispatch({
      type: CHANGE_MESSAGE,
      payload: { greeting },
    });
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: { err },
    });
  }
};
