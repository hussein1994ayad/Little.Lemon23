import Photo from '../Assets/restauranfood.jpg';
import './Main.css';
import {Link} from 'react-router-dom';

function Main() {
    return (
        <div className="main-background">
          <div className="main grid">
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="white-font">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              <Link to="/reservations"><span className="button-bright">Reserve a Table</span></Link>
            </div>
            <img src={Photo} alt="Man holding some delicious food"></img>
          </div>
        </div>
    );
  }

export default Main;