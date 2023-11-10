import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4 ">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {
            !isSignIn ? <input type="text" placeholder="Name" className="p-3 my-3 w-full bg-gray-700 rounded-md"/> : '' 
        }
        <input
          type="text"
          placeholder="Email"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <button className="p-3 my-7 bg-red-600  w-full rounded-md">
        {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-2 text-gray-500">
            {isSignIn ? 'New to Netflix ?' : 'Already registered ?'}
          
          <span className="text-white cursor-pointer" onClick={toggleSignForm}>
          {isSignIn ? ' Sign Up Now' : ' Sign In Now'}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
