import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex justify-around bg-gray-100 p-2 items-center navbar'>

            <div>
                <h1 className='font-bold text-xl'>Job <span className='text-indigo-500'>Hunting</span></h1>
            </div>

            <div className='font-semibold md:flex hidden'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Home</NavLink>
                <NavLink to='/statics' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Statistics</NavLink>
                <NavLink to='/applyJob' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Applied Job</NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Blog</NavLink>
            </div>

            <div >
                <button className='btn btn-info'>Start Appling</button>



            </div>
            <Bars3Icon onClick={() => setIsOpen(!isOpen)} className='md:hidden w-6 h-6'></Bars3Icon>
            {isOpen &&
                <div className='duration-300 font-semibold gap-6 flex flex-col left-0 absolute top-0  bg-gray-300 p-6 md:hidden'>

                    <div className="mr-32">
                        <XMarkIcon onClick={() => setIsOpen(!isOpen)} className='w-6 h-6'></XMarkIcon>

                    </div>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Home</NavLink>
                    <NavLink to='/statics' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Statistics</NavLink>
                    <NavLink to='/applyJob' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Applied Job</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Blog</NavLink>
                </div>
            }




        </div>
    );
};

export default Header;