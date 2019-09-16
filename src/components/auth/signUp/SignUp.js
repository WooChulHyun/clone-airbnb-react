import React from 'react';
import style from './SignUp.module.scss';
import ClassNames from 'classnames/bind';

const cx = ClassNames.bind(style);

const SignUp = () => {
  return (
    <div>
      <p className={cx('test')}>test</p>
    </div>
  );
};

export default SignUp;
