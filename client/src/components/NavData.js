import * as Fa from 'react-icons/fa';
import * as Fc from 'react-icons/fc'
import * as Cg from 'react-icons/cg';
import * as Bi from "react-icons/bi";

export const sideNavdata = [
    {
        title: 'About Us',
        path: '#aboutus',
        cName: 'nav-text',
        icon: <Cg.CgInfo/>
    },
    {
        title: 'Services',
        path: '#services',
        cName: 'nav-text',
        icon: <Fc.FcServices/>
    },
    {
        title: 'Search',
        path: '/search',
        cName: 'nav-text',
        icon: <Fa.FaSearch/>
    },
    {
        title: "Support",
        path: '/',
        cName: 'nav-text',
        icon: <Bi.BiSupport/>
    },
    {
        title: 'Login',
        path: '/login',
        cName: 'nav-text',
        icon: <Bi.BiLogIn/>
    },
    {
        title: 'Register',
        path: '/register',
        cName: 'nav-text',
        icon: <Fa.FaRegAddressCard/>
    }
]