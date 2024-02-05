import React, { useEffect }                           from 'react' ;
import { LogoImage }                                  from '../utilit/photos';
import { getAuth, onAuthStateChanged, signOut }       from "firebase/auth";
import { useNavigate}                                 from 'react-router';
import { useDispatch, useSelector }                   from 'react-redux';
import { addUser, removeUser }                        from '../utilit/userSlice';
import { toggleGptSearchView }                        from '../utilit/gptSlice';
import { SUPPORTED_LANGUAGES }                        from '../utilit/languageConstants';
import { changeLanguage } from '../utilit/configSlice';

const Header = () => {

// Hooks
  const user            = useSelector(store => store.user) 
  const showGptSearch   = useSelector(store => store.gpt.showGptSearch)
  const navigate        = useNavigate() ;
  const dispatch        = useDispatch() ;

// functions
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
    .then(() => { // Sign-out successful.
    })
    .catch((error) => { // An error happened.
      navigate("/error")
    });
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  } 

  const handleGptSearchClick = () => {
    console.log("before",showGptSearch)
    dispatch(toggleGptSearchView())
    console.log("after",showGptSearch)
  }

  useEffect( ()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => { // imp you will not able to move to one component to another  like browse to login manually this thing controlled by this line 

        if (user) { // User is Sign Up this will called, Sign In this will call
            
            const {uid,email,displayName,photoURL} = user; // this is user object and it have data of uid,name,displayName like  
            dispatch( addUser({ //add userData to Store
                id          : uid,
                email       : email,
                displayName : displayName ,
                photoURL    : photoURL 
            }))
            navigate("/browse")
        } 
        else { // User is signed out
            dispatch(removeUser())
            navigate("/")
        }
    });
    return () => unsubscribe() ;
},[])
  return (
    <div className='z-20 w-screen absolute bg-gradient-to-b from-black flex justify-between hover:cursor-pointer'>
      <img
        className='w-48 '
        src={LogoImage} alt='logo'
      />

      
      { user && <div className='flex'> {/* dispaying only if my user have value that mean sign in or sign out */}

        {!showGptSearch && <select className='h-10 self-center m-4 bg-red-700 text-white'
                onChange={handleLanguageChange}>

          {SUPPORTED_LANGUAGES.map( (lan) => 
            <option key={lan.identifier} value={lan.identifier}> 
              {lan.name} 
            </option >  )
          }
        
        </select>}

        <button className='text-white bg-red-700 w-40 h-10 self-center cursor-pointer'
            onClick={handleGptSearchClick} >
          { showGptSearch ? "GPT Search" : "Home" }       
        </button>

        <img className='self-center m-5 w-9 object-cover object-center' src={user?.photoURL} alt='poto' />
        <button
          onClick={handleSignOut}
          className='m-5 text-xl text-red-600'>Sign Out</button>
      </div> }
    </div>
  )
}

export default Header