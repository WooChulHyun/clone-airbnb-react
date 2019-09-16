import axios from 'axios';

const appUrl = 'http://airbnb.tthae.com/api';

export const postSignUp = payload => {
  axios.post(`${appUrl}/accounts/user/`, payload);
};
