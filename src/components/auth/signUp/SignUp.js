import React, { useState, useRef, useCallback } from 'react';
import style from './SignUp.module.scss';
import ClassNames from 'classnames/bind';
import { FaRegIdCard } from 'react-icons/fa';
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
  const usernameRef = useRef(null);
  const userEmailRef = useRef(null);

  const onSubmit = () => {};

  const usernameChange = useCallback(e => {
    setEnterUsername(e.target.value);
  }, []);

  const userEmailChange = useCallback(e => {
    setEnterEmail(e.target.value);
  }, []);

  const validateEmail = useCallback(email => {
    const emailRegExp = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

    if (email.match(emailRegExp)) {
    } else {
    }
  }, []);

  const inputDivClicked = useCallback(ref => {
    ref.current.style.border = '1px solid #87CEFA';
  }, []);

  const inputDivUnclicked = useCallback((ref, refer) => {
    if (refer === 'usernameRef') {
      setUsernameClicked(true);
    } else if (refer === 'userEmailRef') {
      setUserEmailClicked(true);
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
                    placeholder='ID'
                    onClick={deleteUserNameWarningMessage}
                    onChange={usernameChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                  />
                  <FaRegIdCard className={cx('fa fa-id-card-o')} />
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
                      (userEmailDuplicate || !enterEmail) && userEmailClicked
                        ? 'rgba(252, 100, 45, 0.3)'
                        : '#fff'
                  }}
                >
                  <input
                    className={cx('input')}
                    type='text'
                    placeholder='Email address'
                    onClick={deleteEmailWarningMessage}
                    onChange={userEmailChange}
                    style={{ background: 'rgba(255, 255, 255, 0)' }}
                  />
                  <MdEmail className={cx('fa fa-envelope-o')} />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
