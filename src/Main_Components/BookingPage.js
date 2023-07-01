import BookingForm from '../Booking_Components/BookingForm.js';

function BookingPage(props) {
    return (
        <div>
          <BookingForm availableTime={props.availableTime} dispatch={props.dispatch}/>
        </div>
    );
  }

export default BookingPage;