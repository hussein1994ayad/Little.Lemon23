import Main from '../Home_Components/Main.js';
import Highlights from '../Home_Components/Highlights.js'
import Testimonials from '../Home_Components/Testimonials.js';
import Abouts from '../Home_Components/Abouts.js';

function Home() {
    return(
        <div>
            <Main />
            <Highlights />
            <Testimonials />
            <Abouts />
        </div>
    )
}

export default Home;