import './Abouts.css'
import about1 from '../Assets/about1.jpg';
import about2 from '../Assets/about2.jpg';


function Abouts() {
    return (
      <div className="abouts-background">
        <div className="abouts grid">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="white-font">Little lemon" is an exceptional restaurant with a welcoming ambiance, attentive service, and a delightful menu featuring high-quality ingredients. It's a must-visit for a remarkable dining experience. </p>
          </div>
          <img src={about2} alt="a chef preparing some foods"></img>
          <img src={about1} alt="2 chefs talking"></img>
        </div>
      </div>
    );
  }

export default Abouts;