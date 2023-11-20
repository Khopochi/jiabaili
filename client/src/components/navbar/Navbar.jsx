import React from 'react';
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    //navigation
    const navigate = useNavigate()
  return (
    <div className="navbar">
        <div className="upperDiv">
            <div className="logoDiv">
                    JiaBaiLi supermarket
            </div>
            <div className="searchDiv">
                <input type="text" placeholder='Search your item...' className="search" />
                <div className="searchIcon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className="toolsDiv">
                <div className="country">
                    <div className="flag">
                        <span className="fi fi-mw"></span>
                    </div>
                    <div className="currency">
                        <div className="malawi">
                            Malawi,
                        </div>
                        <div className="mwk">
                            MWK
                        </div>
                    </div>
                </div>
                <div className="register">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="words">
                        <div className="welcome">
                                Welcome,
                        </div>
                        <div className="signin">
                                 <span onClick={()=>navigate("/login/")} className="text1">Sign in</span> or <span onClick={()=>navigate("/register/")} className="text2">Register</span> 
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="aCart">
                        <ShoppingCartOutlinedIcon/>
                    </div>
                    <div className="words">
                        <div className="count">0</div>
                        <div className="cartWord">Cart</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
