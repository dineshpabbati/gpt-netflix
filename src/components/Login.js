import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
     
    const [isSignInForm, setIsSignInForm] = useState(true);
    const togglesignInForm= () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header/>

        <div className="absolute">
        <img 
        src ="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg"
        alt = "logo" />
        </div>
    
    
    <form className = "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className= "font-bold text-3xl py-4"> {isSignInForm? "Sign In" : "Sign up" }</h1>
        {!isSignInForm && <input type = "text" placeholder="Full Name" className = "p-4 my-4 w-full bg-gray-700" />}
        <input type = "text" placeholder="Email address" className = "p-4 my-4 w-full bg-gray-700" />
        <input type = "password" placeholder="password" className = "p-4 my-4 w-full bg-gray-700" />
        <button className='py-6 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign up"}</button>
        <p className = "py-4 cursor-pointer" onClick={togglesignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now..."}</p>
    </form>
    
    </div>
  )
}

export default Login