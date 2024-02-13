import React from "react"
import { AppContext } from "../Context"
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    
    const { count } = React.useContext(AppContext);

    const activeStyle = {
        textDecoration: 'underline underline-offset-4',
    }



    return(
        <nav className='flex justify-between items-center fixed z-10 w-screen top-0 py-5 px-8 text-sm font-light'>
            <ul className=' flex items-center gap-3'>

                <li className=' font-semibold text-xl '>
                    <NavLink  to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className=' flex items-center gap-3 '>
                <li className=' text-black/50 '>
                    @Fantaxmin
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        My Accounts
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒{ count }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;