import './ReviewCard.css';
import star from '../Assets/star.png';
import starGrey from '../Assets/starGrey.png';


function ReviewCard(props){
    return(
        <div className='reviewcard'>
            <div className='rating'>
                {[...Array(props.rating)].map((e, i) => <img src={star} key={i} alt="star"></img>)}
                {[...Array(5-props.rating)].map((e, i) => <img src={starGrey} key={i} alt="star in Grey"></img>)}
            </div>
            <div>
                <img className='reviewer-photo' src={props.photo} alt="reviewer"></img>
                <span>{props.name}</span>
            </div>
            <span>{props.reviewtext}</span>
        </div>
    )
}

export default ReviewCard;