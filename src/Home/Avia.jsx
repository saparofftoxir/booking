import React, { useState } from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BsCalendar2DayFill } from "react-icons/bs";
function Avia() {
    const [from, setForm] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')
    const [datee, setDatee] = useState('')
    const searchHandler = () => {
        console.log(from, to, date, date)
    }
    return (
        <div className='w-full py-20 px-20  '>
            <h1 className='text-2xl py-10 font-bold'>Search hundreds of flight sites at once.</h1>

            <ul className='flex w-full items-center justify-between gap-x-2'>
                <li className='flex items-center gap-x-3 hover:bg-slate-300 leading-5 ring-black ease-linear transition duration-150 h-12 rounded px-3 bg-slate-200 border-black'>
                    <GiCommercialAirplane className='w-6 h-6' />
                    <input required onChange={e => setForm(e.target.value)} className='flex-1 bg-transparent outline-none' type="text" placeholder='From ?' />

                </li>
                <li className='bg-white rounded h-12 cursor-pointer w-12 flex items-center justify-center'>
                    <TbReplace className='w-6 h-6' />
                </li>
                <li className='flex items-center gap-x-3 ease-linear duration-150 transition hover:bg-slate-300 h-12 bg-slate-200 rounded px-3 border-black'>
                    <GiCommercialAirplane className='w-6 h-6' />
                    <input required onChange={e => setTo(e.target.value)} className='flex-1 bg-transparent outline-none' type="text" placeholder='To ?' />
                </li>
                <li className='flex w-60 items-center gap-x-3 hover:bg-slate-300 ease-linear duration-100 transition h-12 bg-slate-200 rounded px-3 border-black'>
                    <BsCalendar2DayFill className='w-5 h-5' />
                    <input required onChange={e => setDate(e.target.value)} className='flex-1 bg-transparent outline-none' type="date" />
                </li>
                <li className='flex w-60 items-center gap-x-3 hover:bg-slate-300 ease-linear duration-100 transition h-12 bg-slate-200 rounded px-3 border-black'>
                    <BsCalendar2DayFill className='w-5 h-5' />
                    <input required onChange={e => setDatee(e.target.value)} className='flex-1 bg-transparent outline-none' type="date" />
                </li>
                <button onClick={searchHandler} className='font-bold flex w-32 items-center bg-blue-600 justify-center gap-x-3 hover:bg-blue-500 ease-linear duration-100 cursor-pointer transition h-12 rounded px-3 border-black text-white '>Search</button>
            </ul>

        </div>
    )
}

export default Avia