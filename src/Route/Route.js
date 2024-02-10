import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import User from "../Pages/User/User";
import UserInfo from "../Pages/User/UserInfo";
import PostUser from "../Pages/PostUser/PostUser";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<User></User>
            },
            {
                path:'/userinfo/:id',
                element:<UserInfo></UserInfo>,
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            {
                path:'/postuser',
                element:<PostUser></PostUser>
            }
        ]
    }
])