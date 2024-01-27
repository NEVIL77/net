import React, { useEffect }                     from 'react'
import Login                     from "./Login" ;
import Browse                    from "./Browse" ;
import { getAuth }               from 'firebase/auth';
import { onAuthStateChanged }    from "firebase/auth";
import { RouterProvider, 
        createBrowserRouter }    from 'react-router-dom' ;
import { useDispatch }           from 'react-redux';
import { addUser, removeUser } from '../utilit/userSlice';


const Body = () => {
    const dispatch=useDispatch()
    const appRouter = createBrowserRouter ([
        {
            path : "/" ,
            element : <Login/>
        },
        {
            path : "/browse" ,
            element : <Browse/> ,
        }
    ] )

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
        
    )
} 



export default Body ;