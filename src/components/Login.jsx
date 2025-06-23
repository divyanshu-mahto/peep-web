import '../styles/Login.css';

const Login = () => {

    return (
        <>
         <div className="logo-home">peep.email</div>
            <div className="main-container-home">
                <div className="hero-section">
                    <div className="hero-lines">
                        <div className="hero-line-2">Peep requires read access to your gmail to identify relevant emails and send notification, rest assured we do not store your personal emails anywhere</div>
                    </div>
                </div>
                <div className='get-started-section'>
                    <button className="get-started-button">Server is offline</button>
                </div>
                <div className="bottom-text">Still in doubt ? Read our privacy policy to understand how we handle your personal data</div>
            </div>
        </>
    );
}

export default Login;