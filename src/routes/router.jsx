import {
    createBrowserRouter
  } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Aboutpage from "../Pages/Aboutpage";
import Footer from "../componenets/Footer";
import Userlayout from "../layouts/Userlayout";



// exporting the const route for using it elsewhere
export  const route = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Homepage/>,
    // },
  
    // {
    //   path: "/about",
    //   element: <Aboutpage/>,
    // },
  
    // {
    //   path: "/profile",
    //   element: <h1>Profile</h1>,
    // },

    // {
    //     path: "/footer",
    //     element: <Footer/>,
    //   }


    // c-here first the userlayout will be rendered
    {
        path: '/',
        element:<Userlayout/>,
        // we will be rendering the other components like Homepage,aboutpage contents as child
        // as there will be many such children or child components we will be giving it as array 
        // and inside the array we will pass them as objects
        
        children:[
            {
                path:'',
                element:<Homepage/>
            },

            {
                path:'about',
                element:<Aboutpage/>
            },

            {
                path:'profile',
                element: <h3>Give your Profile</h3>
            }
    
            
        ]

    },

// here the userlayout will not be affected as it is outside and it is seperate
    {
        
            path:'login',
            element: <h3>Please login</h3>
        
    }
  
]);