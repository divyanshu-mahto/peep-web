import '../styles/Home.css';

const Home = () => {

    return (
        <>
         <div className="logo">peep.email</div>
         <div className="main-container">
            <div className="hero-section">
                <div className="hero-lines">
                    <div className="hero-line-1">Your gmail constantly "peeps" your phone for nothing?</div>
                    <div className="hero-line-2">Peep ensures it's always for something that matters.</div>
                </div>
                <button className="get-started-button" onClick={() => window.location.href = '/login'}>Get started →</button>
            </div>
            <div className="bottom-text">Your rules, intelligently applied. 
Get peace of mind knowing your important emails won't be missed.</div>
         </div>
        </>
    );

}

export default Home;