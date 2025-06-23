import '../styles/Login.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/invite`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: email
            });

            if(!response.ok){
                setEmail("");
            }
            else{
                navigate("/success");
                setEmail("");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
         <div className="logo-home"><Link to={"/"}>peep.email</Link></div>
            <div className="invite-container-home">
                <div className="hero-section">
                    <div className="hero-lines">
                        <div className="hero-line-1">We're alpha testing</div>
                        <div className="hero-line-2">Tell us your email, we will send you an invite soon!</div>
                        <div className='invite-section'>
                            <input type='email' placeholder='@gmail.com' className='input-box' onChange={(e) => setEmail(e.target.value)}></input>
                            <button className='enter-button' onClick={() => window.location.href = '/success'}>→</button>
                        </div>
                    </div>
                </div>
                <div className='get-started-section'>
                    <button className="get-started-button">Already got the invite</button>
                </div>
            </div>
        </>
    );
}

export default Login;