import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineBedroomChild } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { MdOutlineAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa6";
function Navbar() {
    return (
        <nav className='w-full py-12 flex items-center px-20 bg-blue-700'>

            <ul className='w-full flex items-center justify-start gap-x-3'>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/'}>
                        <MdOutlineBedroomChild className='w-6 h-6' />
                        Stays

                    </NavLink>
                </li>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/avia'}>
                        <IoAirplaneSharp className='w-6 h-6' />
                        Flights

                    </NavLink>
                </li>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/'}>
                        <FaCar className='w-6 h-6' />
                        Car rentals
                    </NavLink>
                </li>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/'}>
                        <MdOutlineAttractions className='w-6 h-6' />
                        Attractions
                    </NavLink>
                </li>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/'}>
                        <FaTaxi className='w-5 h-5' />
                        Airport taxi
                    </NavLink>
                </li>
                <li className='border-2 p-1.5 rounded-3xl text-white px-4'>
                    <NavLink className='flex items-center gap-x-2 font-semibold' to={'/'}>
                        {/* < className='w-5 h-5' /> */}
                        Choosens
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;