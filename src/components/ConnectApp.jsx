import '../styles/ConnectApp.css';

const ConnectApp = () => {

    return (
        <>
         <div className="logo">peep.email</div>
         <div className="user-email">username123@gmail.com</div>
         <div className="main-container">
            <div className="heading">Follow these steps to start receiving notification</div>
            <div className="step-1">
                <div className="step-text">1. Download the peep app</div>
                <button className="download-app-button">
                    <div className="app-icon"></div>
                    <div className="download">Download</div>
                </button>
            </div>
            <div className="step-2">
                <div className="step-text">2. Scan the below QR code with your phone or click here</div>
                <div className="qr-code"></div>
            </div>
            <div className="step-3">
                <div className="step-text">3. Send a test notification</div>
                <button className="test-noti-button">Get a hi from peep</button>
            </div>
            <div className="move-next">
                <button className="next-button">→</button>
            </div>
         </div>
        </>
    );

}

export default ConnectApp;