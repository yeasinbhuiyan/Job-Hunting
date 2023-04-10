import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-around bg-gray-100 p-2 items-center navbar'>

            <div>
                <h1 className='font-bold text-xl'>Job <span className='text-indigo-500'>Hunting</span></h1>
            </div>

            <div className='font-semibold'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Home</NavLink>
                <NavLink to='/statics' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Statistics</NavLink>
                <NavLink to='/applyJob' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Applied Job</NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Blog</NavLink>
            </div>


            <div >
                <button className='btn btn-primary'>Start Appling</button>



            </div>

        </div>
    );
};

export default Header;