import '../styles/Home.css';
import notificationSvg from '../assets/notification.svg';
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {

    return (
        <>
         <div className="logo-home"><Link to={"/"}>peep.email</Link></div>
         <div className="main-container-home">
            <div className="hero-section">
                <div className="hero-lines">
                    <div className="hero-line-1">Your gmail constantly "peeps" your phone for nothing?</div>
                    <div className="hero-line-2">Peep ensures it's always for something that matters.</div>
                </div>
            </div>
            <div className='notification-img-section'>
                <img className='notification-image' src={notificationSvg} alt='peep.email' />
            </div>
            <div className='get-started-section'>
                <button className="get-started-button" onClick={() => window.location.href = '/login'}>Get started →</button>
            </div>
         </div>
        </>
    );

}

export default Home;