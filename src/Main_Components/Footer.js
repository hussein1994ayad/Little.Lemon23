import './Footer.css';
import {Link} from 'react-router-dom';
import logo from '../Assets/logo-vertical.png'

function Footer() {
    return (
        <div className='footer-background'>
          <div className='footer grid'>
            <img src={logo} alt="logo of little lemon"></img>
            <div>
              <span className='title'>Navigation</span>
              <ul>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/aboutpage"><li>About</li></Link>
                  <Link to="/menu"><li>Menu</li></Link>
                  <Link to="/reservations"><li>Reservations</li></Link>
                  <Link to="orderonline"><li>Order Online</li></Link>
                  <Link to="/login"><li>Login</li></Link>
              </ul>
            </div>
            <div>
              <span className='title'>Contact</span>
              <ul>
                  <li>Baghdad</li>
                  <li>07731219873</li>
                  <li>Email: hussain30gost@gmail.com</li>
              </ul>
            </div>
            <div>
              <span className='title'>Social Media Links</span>
              <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

export default Footer;