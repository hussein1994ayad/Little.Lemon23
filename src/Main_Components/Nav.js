import './Nav.css';
import Logo from "../Assets/Logo.svg";
import hamMenu from "../Assets/hamburger-menu.svg";
import { Link } from 'react-router-dom';


import React, {useRef} from 'react';

function Nav() {
    const mobileRef = useRef();

    const showMobile = () => {
        mobileRef.current.classList.toggle('mobile-menu');
    }

    const hamEvent = (e) => {
        showMobile();
        console.log(e.currentTarget.classList);
    }

    return (
        <div className='nav-background'>
            <div className="nav grid">
                <img className="logo" src={Logo} alt="Little Lemon Logo"></img>
                <ul ref={mobileRef}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutpage">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/BookingPage">Reservations</Link></li>
                    <li><Link to="orderonline">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <img onClick={hamEvent} className="mobile-menu" src={hamMenu} alt="hamburger menu button"></img>
            </div>
        </div>
    );
  }

export default Nav;