import React, { useState } from 'react';
import './login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export const Login = () => {
    //habdkle digits only
    const [value, setValue] = useState('');
    const handleInputChange = (e) => {
        setValue(e.target.value.replace(/[^0-9]/g, ''));
      };
  return (
    <div className="loginPage">
        <div className="title">
            Jiabaili Supeermaket
        </div>
        <div className="registerArea">
            <div className="title">
                Sign In
            </div>
            <div className="fname phone">
                <div className="name">Phone Number</div>
                <div className="inputarea">
                    <span>+265</span>
                    <input type="text" maxLength={9} value={value} onChange={handleInputChange}  className="phoneinput" />
                </div>
                
            </div>
            <div className="fname">
                <div className="name">Password</div>
                <input type="text" className="fnmae" />
                <div className='passadvice'>
                    <span><FontAwesomeIcon icon={faQuestionCircle} /></span>
                    Forgot password?
                    </div>
            </div>
            <div className="fname">
                <button>Continue</button>
            </div>

            <div className="fname">
                <div className="termsandconditions">
                By continuing, you agree to <span className='link'>JiaBaiLi's Supermarket Conditions of Use</span> and <span className='link'>Privacy Notice</span>.
                </div>
            </div>

            <div className="fname">
                <div className="divider"></div>
            </div>

            <div className="fname">
                <div className="termsandconditions1">
                    New to JiaBaiLi Online? <span className='link'>Create Account</span>
                </div>
            </div>
        </div>
        <div className="conclusion">
            @JiaBaiLi.shop, 2018-2023
        </div>
    </div>
  )
}
