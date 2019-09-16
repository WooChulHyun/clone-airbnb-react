import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../components/auth/signUp/SignUp';
import { postSignUpThunk } from '../modules/signUpModule';

const SignUpContainer = ({ data, loading }) => {
  return (
    <SignUp data={data} loading={loading} postSignUpThunk={postSignUpThunk} />
  );
};

export default connect(
  ({ signUpModule, loading }) => ({
    data: signUpModule.data,
    loading: loading.POST_SIGNUP
  }),
  { postSignUpThunk }
)(SignUpContainer);
