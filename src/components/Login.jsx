import '../styles/Login.css';

const Login = () => {

    return (
        <>
         <div className="logo">peep.email</div>
         <div className="main-container">
            <div className="login-section">
                <div className="disclaimer">Peep requires read access to your gmail to identify relevant emails and send notification, rest assured we do not store your personal emails anywhere</div>
                <button className="login-button">Login with Google</button>
            </div>
            <div className="bottom-text">Still in doubt ? Read our privacy policy to understand how we handle your personal data</div>
         </div>
        </>
    );

}

export default Login;