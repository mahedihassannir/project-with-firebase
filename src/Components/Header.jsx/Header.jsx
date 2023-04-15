import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex h-20 items-center px-20 justify-between'>
                <h1>digital work</h1>
                <ul className='flex gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </nav>

        </div>
    );
};

export default Header;