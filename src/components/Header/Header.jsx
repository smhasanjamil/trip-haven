import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Handle Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful.');
            }).catch((error) => {
                console.log('An error happened.', error);
            });
    }

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/trip'>Trip</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">TripHaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/trip'>Trip</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex flex-row gap-2">
                    {!user && <Link to='/login' className="btn btn-neutral btn-xs md:btn-sm">Login</Link>}
                    {!user && <Link to='/register' className="btn btn-neutral btn-xs md:btn-sm">Register</Link>}

                    {user && <span>{user.email}</span>}

                    {user && <button onClick={handleLogout} className="btn btn-neutral btn-xs md:btn-sm">Logout</button>}
                </div>
            </div>

        </div>
    );
};

export default Header;