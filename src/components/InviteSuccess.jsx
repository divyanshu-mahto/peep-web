import '../styles/Home.css';
import {Link, useNavigate} from 'react-router-dom'

const InviteSuccess = () => {

    return (
        <>
            <div className="logo-home"><Link to={"/"}>peep.email</Link></div>
            <div className="invite-container-home">
                <div className="hero-section">
                    <div className="hero-lines">
                        <div className="hero-line-2">You will recieve an email with the invite link soon</div>
                        <div className="hero-line-2">Keep an eye on your inbox</div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default InviteSuccess;