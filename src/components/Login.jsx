import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "./utils/validate";
import { auth } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  };

  const toggleVisiblity = () => {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleButtonCLick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/81256459?v=4",
          })
            .then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signed in");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-semibold text-3xl py-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-md"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />
        <input
          id="pass"
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <input type="checkbox" onClick={toggleVisiblity} /> Show Password
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <button
          className="p-3 my-7 bg-red-600  w-full rounded-md"
          onClick={handleButtonCLick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-gray-500">
          {isSignIn ? "New to Netflix ?" : "Already registered ?"}

          <span className="text-white cursor-pointer" onClick={toggleSignForm}>
            {isSignIn ? " Sign Up Now" : " Sign In Now"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
