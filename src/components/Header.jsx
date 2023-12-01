import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGPTPage } from "../utils/gptSlice";

const Header = () => {
  
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTEngine = () =>{
    dispatch(toggleGPTPage())
  }

  //This checks auth  for every time website loads and redirects according to that
  //Also we are setting our store according to the authentication of user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unscribe called when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (

          <div className="flex p-2">
            <button className="text-white bg-purple-400 mr-2 p-1 m-1 " onClick={handleGPTEngine}>GPT Search</button>
            <img
              className="w-12 h-12 mt-1 mr-1"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              //src={user?.photoURL}
              alt="usericon"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              {" "}
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
