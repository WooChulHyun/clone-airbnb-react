import { handleActions } from 'redux-actions';
import { postSignUp } from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const POST_SIGNUP = 'singUpModule/POST_SIGNUP';
const POST_SIGNUP_SUCCESS = 'singUpModule/POST_SIGNUP_SUCCESS';
const POST_SIGNUP_FAILURE = 'singUpModule/POST_SIGNUP_FAILURE';

export const postSignUpThunk = createRequestThunk(POST_SIGNUP, postSignUp);

const initialState = {
  data: null
};

const signUpModule = handleActions(
  {
    [POST_SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload
    })
  },
  {
    [POST_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      data: action.payload
    })
  },
  initialState
);

export default signUpModule;
