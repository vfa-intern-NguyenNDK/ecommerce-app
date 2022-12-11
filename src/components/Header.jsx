import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faSignIn,
  faUserPlus,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../images/LogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const state = useSelector((state) => state.HandleCart);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const info = localStorage.getItem("userInfo");
      setUserInfo(info);
      navigate("/");
    }
  }, [navigate,userInfo]);

  const handleLogout =()=>{
    localStorage.clear()
    setUserInfo('')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="top row">
          <div className="col">
            <div className="topDiv">
              <FontAwesomeIcon icon={faPhone} />
              <span>+381/000-000-0</span>
            </div>
            <div className="topDiv">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>ricpewebcode@gmail.com</span>
            </div>
          </div>
          <div className="col">
            <div className="topDiv">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Link>
            </div>
          </div>
        </div>
        <div className="middle row">
          <div className="col">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="buttons">
              {userInfo ? (
                <>
                <button onClick={handleLogout} className='btnLogout'>
                  <FontAwesomeIcon icon={faSignOut} /> Logout
                </button>
                </>
                
              ) : (
                <>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faSignIn} /> Login
                  </Link>
                  <Link to="/register">
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                  </Link>
                </>
              )}
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart({state.length})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
