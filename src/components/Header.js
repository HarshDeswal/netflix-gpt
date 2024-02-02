import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView} from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
        
      }
    });
    return () => unsubscribe();
  },[]);
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img 
        className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='logo'/>
        {user && <div className='flex justify-end md:justify-normal p-2'>
          <button className='py-2 px-4 m-2 bg-black text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home":"Ask AI"}</button>
          <img 
          className='hidden md:block md:w-12 md:h-12'
          alt='userIcon' src={USER_AVATAR}/>
          <p>{user.displayName}</p>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;