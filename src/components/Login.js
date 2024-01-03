import { useRef, useState } from 'react';
import Header from './Header';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {useDispatch} from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null); 
  const dispatch = useDispatch();
  const name = useRef("Demo");
  const email = useRef(null);
  const password = useRef(null);
  const toggleChange = () => {
    setIsSignForm(!isSignInForm); 
  };
  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return ;
    if(!isSignInForm){ // Sign up
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });

    }
    else{
      //sign in
      signInWithEmailAndPassword(auth,email.current.value, 
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>
        <form 
        onSubmit={(e)=> e.preventDefault()}
        className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
            <p className='text-red-700 font-bold text-xl'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleChange}>
            {isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign Up Now..."}
            </p>
        </form>
    </div>
  )
}

export default Login;