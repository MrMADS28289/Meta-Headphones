import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './NavBar.css'
import { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='nav-container items-end'>
            <ul className={`links-container bg-black text-white absolute p-1 ease-out duration-500 w-full ${open ? 'top-14' : 'top-[-150px]'} md:flex md:top-2 md:items-center md:bg-white md:text-black md:justify-center`}>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </ul>
            <div onClick={() => setOpen(!open)} className='h-8 w-8 md:hidden'>
                {open ? <XIcon /> : <MenuIcon />}
            </div>
        </nav>
    );
};

export default NavBar;