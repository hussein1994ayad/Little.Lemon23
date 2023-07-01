import './Testimonials.css';
import ReviewCard from '../Card_Components/ReviewCard';
import person1 from '../Assets/user1.png';
import person2 from '../Assets/user2.png';
import person3 from '../Assets/user3.png';
import person4 from '../Assets/user1.png';

function Testimonials() {
    return (
        <div className="testimonials-background">
          <div className="testimonials">
            <h1>Testimonials</h1>
            <div className='grid'>
              <ReviewCard photo={person1} rating={4} name="ahmed ali" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person2} rating={5} name="hussein ayad" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person3} rating={4} name="Rose sm" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person4} rating={5} name="Abdulla ahmed" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
            </div>
          </div>
        </div>
    );
  }

export default Testimonials;