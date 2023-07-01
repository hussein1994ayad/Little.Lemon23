import './MenuCard.css';
import {Link} from 'react-router-dom';

function MenuCard(props) {
    return(
        <div className="menu-card">
            <img src={props.photo} alt={props.name}></img>
            <div>
                <div>
                    <span className="menu-card-title">{props.name}</span>
                    <span className="menu-card-price">{props.price}</span>
                </div>
                <span>{props.desc}</span>
                <Link to="/orderonline"><span className='menu-card-order'>Order a delivery</span></Link>
            </div>
        </div>
    )
}

export default MenuCard;