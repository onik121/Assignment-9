import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {

    const navlinks = <>
        <li><NavLink>Home</NavLink></li>
        {/* <li><NavLink>Update Profile</NavLink></li> */}
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Faq</NavLink></li>
    </>

    return (
        <div className="navbar p-0 mb-3 fixed z-50 bg-white">
            <div className="navbar max-w-[1440px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <div className="w-9">
                        <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <Link to={'/login'}><button className="login">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;