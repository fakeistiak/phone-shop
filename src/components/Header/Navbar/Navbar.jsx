import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                         to="/"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                         }>
                            Home
                        </NavLink>;
                        
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;