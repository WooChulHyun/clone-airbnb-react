import React, { useState, useRef, useCallback, useEffect } from 'react';
import style from './SignUp.module.scss';
import ClassNames from 'classnames/bind';
import {
  FaRegIdCard,
  FaUser,
  FaLock,
  FaTimesCircle,
  FaRegCheckCircle
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const cx = ClassNames.bind(style);

const SignUp = ({ data, loading, postSignUpThunk }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enterUsername, setEnterUsername] = useState('');
  const [usernameClicked, setUsernameClicked] = useState(false);
  const [userNameDuplicate, setUserNameDuplicate] = useState(false);
  const [enterEmail, setEnterEmail] = useState('');
  const [userEmailClicked, setUserEmailClicked] = useState(false);
  const [userEmailDuplicate, setUserEmailDuplicate] = useState(false);
  const [userEmailValidate, setUserEmailValidate] = useState(false);
  const [enterFirstName, setEnterFirstName] = useState('');
  const [userFirstNameClicked, setUserFirstNameClicked] = useState(false);
  const [userFirstNameValidate, setUserFirstNameValidate] = useState(false);
  const [enterSecondName, setEnterSecondName] = useState('');
  const [userSecondNameClicked, setUserSecondNameClicked] = useState(false);
  const [userSecondNameValidate, setUserSecondNameValidate] = useState(false);
  // eslint-disable-next-line
  const [enterPassword, setEnterPassword] = useState('');
  // eslint-disable-next-line
  const [userPasswordClicked, setUserPasswordClicked] = useState(false);
  const [userPasswordValidateLength, setUserPasswordValidateLength] = useState(
    false
  );
  const [
    userPasswordValidatePattern,
    setUserPasswordValidatePattern
  ] = useState(false);
  const [month, setMonth] = useState([]);
  // eslint-disable-next-line
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [day, setDay] = useState([]);
  // eslint-disable-next-line
  const [selectedDay, setSelectedDay] = useState(1);
  const [year, setYear] = useState([]);
  // eslint-disable-next-line
  const [selectedYear, setSelectedYear] = useState(2019);
  const [btnActivate, setBtnActivate] = useState(false);

  useEffect(() => {
    const months = [];
    const days = [];
    const years = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    setMonth(months);

    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }

    setDay(days);

    for (let i = 2019; i >= 1900; i--) {
      years.push(i);
    }

    setYear(years);
  }, []);

  const usernameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userFirstNameRef = useRef(null);
  const userSecondNameRef = useRef(null);
  const userPasswordRef = useRef(null);

  const onSubmit = () => {};

  useEffect(() => {
    if (
      enterUsername !== '' &&
      userEmailValidate &&
      userFirstNameValidate &&
      userSecondNameValidate &&
      userPasswordValidateLength &&
      userPasswordValidatePattern
    ) {
      setBtnActivate(true);
    } else {
      setBtnActivate(false);
    }
  }, [
    enterUsername,
    userEmailValidate,
    userFirstNameValidate,
    userPasswordValidateLength,
    userPasswordValidatePattern,
    userSecondNameValidate
  ]);

  const usernameChange = useCallback(e => {
    setEnterUsername(e.target.value);
  }, []);

  const validateEmail = useCallback(email => {
    const emailRegExp = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

    if (email.match(emailRegExp)) {
      setUserEmailValidate(true);
    } else {
      setUserEmailValidate(false);
    }
  }, []);

  const userEmailChange = useCallback(
    e => {
      setEnterEmail(e.target.value);
      validateEmail(e.target.value);
    },
    [validateEmail]
  );

  const validateFirstName = useCallback(firstname => {
    const firstNameRegExp = /[가-힣]{1,4}|[a-zA-Z. ]*[a-zA-Z]{1,60}$/;

    if (firstname.match(firstNameRegExp)) {
      setUserFirstNameValidate(true);
    } else {
      setUserFirstNameValidate(false);
    }
  }, []);

  const userFirstNameChange = useCallback(
    e => {
      setEnterFirstName(e.target.value);
      validateFirstName(e.target.value);
    },
    [validateFirstName]
  );

  const validateSecondName = useCallback(secondname => {
    const secondNameRegExp = /[가-힣]{1,4}|[a-zA-Z. ]*[a-zA-Z]{1,60}$/;

    if (secondname.match(secondNameRegExp)) {
      setUserSecondNameValidate(true);
    } else {
      setUserSecondNameValidate(false);
    }
  }, []);

  const userSecondNameChange = useCallback(
    e => {
      setEnterSecondName(e.target.value);
      validateSecondName(e.target.value);
    },
    [validateSecondName]
  );

  const validatePassword = useCallback(password => {
    const passwordRegExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z0-9d$@$!%*?&].{8,}/;

    if (password.match(passwordRegExp)) {
      setUserPasswordValidatePattern(true);
    } else {
      setUserPasswordValidatePattern(false);
    }

    if (password.length >= 8) {
      setUserPasswordValidateLength(true);
    } else {
      setUserPasswordValidateLength(false);
    }
  }, []);

  const userPasswordChange = useCallback(
    e => {
      setEnterPassword(e.target.value);
      validatePassword(e.target.value);
    },
    [validatePassword]
  );

  const inputDivClicked = useCallback(ref => {
    ref.current.style.border = '1px solid #87CEFA';
  }, []);

  const inputDivUnclicked = useCallback((ref, refer) => {
    if (refer === 'usernameRef') {
      setUsernameClicked(true);
    } else if (refer === 'userEmailRef') {
      setUserEmailClicked(true);
    } else if (refer === 'userFirstNameRef') {
      setUserFirstNameClicked(true);
    } else if (refer === 'userSecondNameRef') {
      setUserSecondNameClicked(true);
    } else if (refer === 'userPasswordRef') {
      setUserPasswordClicked(true);
    }
    ref.current.style.border = '1px solid #f1f1f1';
  }, []);

  const deleteUserNameWarningMessage = () => {
    setUserNameDuplicate(false);
  };

  const deleteEmailWarningMessage = () => {
    setUserEmailDuplicate(false);
  };

  return (
    <div>
      {menuOpen === false && (
        <>
          <div className={cx('background')}>
            <div className={cx('formClass')}>
              <form onSubmit={() => onSubmit()}>
                <p className={cx('title')}>Sign Up</p>
                <div className={cx('divideLine')}></div>
                <div
                  className={cx('inputDiv')}
                  ref={usernameRef}
                  onClick={() => inputDivClicked(usernameRef)}
                  onFocus={() => inputDivClicked(usernameRef)}
                  onBlur={() => inputDivUnclicked(usernameRef, 'usernameRef')}
                  style={{
                    background:
                      (userNameDuplicate || !enterUsername) && usernameClicked
                        ? 'rgba(252, 100, 45, 0.3)'
                        : '#fff'
                  }}
                >
                  <input
                    className={cx('input')}
                    type='text'
                    value={enterUsername}
                    placeholder='ID'
                    onClick={deleteUserNameWarningMessage}
                    onChange={usernameChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                    autoComplete='off'
                  />
                  <FaRegIdCard className={cx('fa', 'fa-id-card-o')} />
                </div>
                {!enterUsername && usernameClicked && (
                  <>
                    <p className={cx('warningMessage')}>ID is required.</p>
                  </>
                )}
                {userNameDuplicate && usernameClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      Username is already exist.
                    </p>
                  </>
                )}
                <div
                  className={cx('inputDiv')}
                  ref={userEmailRef}
                  onClick={() => inputDivClicked(userEmailRef)}
                  onFocus={() => inputDivClicked(userEmailRef)}
                  onBlur={() => inputDivUnclicked(userEmailRef, 'userEmailRef')}
                  style={{
                    background:
                      (userEmailDuplicate ||
                        !enterEmail ||
                        !userEmailValidate) &&
                      userEmailClicked
                        ? 'rgba(252, 100, 45, 0.3)'
                        : '#fff'
                  }}
                >
                  <input
                    className={cx('input')}
                    type='text'
                    value={enterEmail}
                    placeholder='Email address'
                    onClick={deleteEmailWarningMessage}
                    onChange={userEmailChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                    autoComplete='off'
                  />
                  <MdEmail className={cx('fa', 'fa-envelope-o')} />
                </div>
                {!enterEmail && userEmailClicked && (
                  <>
                    <p className={cx('warningMessage')}>Email is required.</p>
                  </>
                )}
                {!userEmailValidate && userEmailClicked && (
                  <>
                    <p className={cx('warningMessage')}>Enter a valid email.</p>
                  </>
                )}
                {userEmailDuplicate && userEmailClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      Email is already exist.
                    </p>
                  </>
                )}
                <div
                  className={cx('inputDiv')}
                  ref={userFirstNameRef}
                  onClick={() => inputDivClicked(userFirstNameRef)}
                  onFocus={() => inputDivClicked(userFirstNameRef)}
                  onBlur={() =>
                    inputDivUnclicked(userFirstNameRef, 'userFirstNameRef')
                  }
                  style={{
                    background:
                      (!enterFirstName || !userFirstNameValidate) &&
                      userFirstNameClicked
                        ? 'rgba(252, 100, 45, 0.3)'
                        : '#fff'
                  }}
                >
                  <input
                    className={cx('input')}
                    type='text'
                    value={enterFirstName}
                    placeholder='First name'
                    onChange={userFirstNameChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                    autoComplete='off'
                  />
                  <FaUser className={cx('fa', 'fa-user-o')} />
                </div>
                {!enterFirstName && userFirstNameClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      First name is required.
                    </p>
                  </>
                )}
                {!userFirstNameValidate && userFirstNameClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      Enter a valid first name.
                    </p>
                  </>
                )}
                <div
                  className={cx('inputDiv')}
                  ref={userSecondNameRef}
                  onClick={() => inputDivClicked(userSecondNameRef)}
                  onFocus={() => inputDivClicked(userSecondNameRef)}
                  onBlur={() =>
                    inputDivUnclicked(userSecondNameRef, 'userSecondNameRef')
                  }
                  style={{
                    background:
                      (!enterSecondName || !userSecondNameValidate) &&
                      userSecondNameClicked
                        ? 'rgba(252, 100, 45, 0.3)'
                        : '#fff'
                  }}
                >
                  <input
                    className={cx('input')}
                    type='text'
                    value={enterSecondName}
                    placeholder='Second name'
                    onChange={userSecondNameChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                    autoComplete='off'
                  />
                  <FaUser className={cx('fa', 'fa-user-o')} />
                </div>
                {!enterSecondName && userSecondNameClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      Second name is required.
                    </p>
                  </>
                )}
                {!userSecondNameValidate && userSecondNameClicked && (
                  <>
                    <p className={cx('warningMessage')}>
                      Enter a valid second name.
                    </p>
                  </>
                )}
                <div
                  className={cx('inputDiv')}
                  ref={userPasswordRef}
                  onClick={() => inputDivClicked(userPasswordRef)}
                  onFocus={() => inputDivClicked(userPasswordRef)}
                  onBlur={() =>
                    inputDivUnclicked(userPasswordRef, 'userPasswordRef')
                  }
                >
                  <input
                    className={cx('input')}
                    type='password'
                    value={enterPassword}
                    placeholder='Password'
                    onChange={userPasswordChange}
                    autoComplete='off'
                  />
                  <FaLock className={cx('fa', 'fa-eye-slash')} />
                </div>
                <div>
                  <p>
                    {!userPasswordValidateLength && (
                      <>
                        <FaTimesCircle className={cx('fa', 'fa-times')} />
                        <span
                          className={cx('warningPassword')}
                          style={{ color: '#fc642d' }}
                        >
                          Please enter at least 8 digits.
                        </span>
                      </>
                    )}
                    {userPasswordValidateLength && (
                      <>
                        <FaRegCheckCircle className={cx('fa', 'fa-check')} />
                        <span
                          className={cx('warningPassword')}
                          style={{ color: '#00a699' }}
                        >
                          Please enter at least 8 digits.
                        </span>
                      </>
                    )}
                    <br />
                    {!userPasswordValidatePattern && (
                      <>
                        <FaTimesCircle className={cx('fa', 'fa-times')} />
                        <span
                          className={cx('warningPassword')}
                          style={{ color: '#fc642d' }}
                        >
                          Make it a combination of numbers, letters, and special
                          characters.
                        </span>
                      </>
                    )}
                    {userPasswordValidatePattern && (
                      <>
                        <FaRegCheckCircle className={cx('fa', 'fa-check')} />
                        <span
                          className={cx('warningPassword')}
                          style={{ color: '#00a699' }}
                        >
                          Make it a combination of numbers, letters, and special
                          characters.
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <div className={cx('textBold')}>Birthday</div>
                <div className={cx('selectBoxes')}>
                  <select
                    className={cx('monthSelector')}
                    onChange={value => setSelectedMonth(value)}
                  >
                    {month.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <select
                    className={cx('daySelector')}
                    onChange={value => setSelectedDay(value)}
                  >
                    {day.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <select
                    className={cx('yearSelector')}
                    onChange={value => setSelectedYear(value)}
                  >
                    {year.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className={cx('textColor484848')}>
                  We’ll send you marketing promotions, special offers,
                  inspiration, and policy updates via email.
                </div>
                <button
                  type='submit'
                  disabled={!btnActivate}
                  className={cx('signUpBtn', btnActivate ? '' : 'disable')}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
