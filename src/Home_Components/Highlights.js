import './Highlights.css';
import salad from '../Assets/greek salad.jpg';
import bruchetta from '../Assets/bruchetta.png';
import lemon from '../Assets/lemon.jpg';
import {Link} from 'react-router-dom';
import MenuCard from '../Card_Components/MenuCard';

function Highlights() {
    return (
        <div className='highlights'>
          <div className='grid'>
            <h1>This Weeks Specials!</h1>
            <Link to="/menu"><span className="button-bright">Online Menu</span></Link>
          </div>
          <div className='grid'>
            <MenuCard name="Greek Salad" price="$12.99" photo={salad} desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            <MenuCard name="Bruchetta" price="$5.99" photo={bruchetta} desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
            <MenuCard name="Lemon Dessert" price="$5.00" photo={lemon} desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
          </div>
        </div>
    );
  }

export default Highlights;