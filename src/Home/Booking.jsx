import React, { useState } from 'react'
import { MdOutlineBedroomChild } from "react-icons/md";
import { BsCalendar2DayFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hotels } from '../data/hotels';
import HotelCard from '../components/HotelCard';
function Booking() {
    const [from, setForm] = useState('')
    const [price, setPrice] = useState(100)
    const [date, setDate] = useState('')
    const [datee, setDatee] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [person, setPerson] = useState(1)
    const [children, setChildren] = useState(1)
    const [rooms, setRooms] = useState(1)
    const [hotelss, setHotelss] = useState(hotels)
    const [ress, setRess] = useState(false)

    const searchHandler = (event) => {
        event.preventDefault()
        if (date > datee) {
            return toast.warn("Iltimos sanani to'g'ri tanlang !")
        }

        const currentHotel = hotels.filter(item => item.title.toLowerCase() === from && item.rooms === rooms)
        if (currentHotel.length === 0) {
            setRess(true)
            toast.warning("Kechirasiz, bizda bunday mehmonhona yo'q!")
            return
        }
        setHotelss(currentHotel)
        // toast.success(`Assalomu aleykum! Siz ${rooms} honali ${person} kishi ${children} ta bola ${rooms} xonali joy bandladingiz! Narxi ${price}$ bo'ldi`)
    }
    const chosenHandler = () => {
        setShowForm(true)
    }
    const doneClick = () => {
        setShowForm(false)
    }
    const addRooms = () => {
        setRooms(rooms + 1)
        setPrice(price + 200)
    }
    const minusRooms = () => {
        if (rooms === 1) {
            setDisabled(true)
            return
        }
        else {

            setRooms(rooms - 1)
            setPrice(price - 200)
        }
    }
    const addPerson = () => {
        setPerson(person + 1)
        setPrice(price + 100)

    }
    const minusPerson = () => {
        if (person === 0) {
            setDisabled(true)
            return
        }
        else {
            setPerson(person - 1)
            setPrice(price - 100)
        }
    }
    const minusChildren = () => {
        if (children === 1) {
            setDisabled(true)
        }
        else {
            setChildren(children - 1)
            setPrice(price - 50)
        }
    }
    const plussChildren = () => {

        setChildren(children + 1)
        setPrice(price + 50)

    }
    return (
        <>
            <div className='w-full flex items-center  '>
                <form onSubmit={searchHandler} action="" className='w-full'>
                    <ul className='flex w-full items-center justify-between gap-x-2'>
                        <li className='flex items-center gap-x-3 hover:bg-slate-300 leading-5 ring-black ease-linear transition duration-150 h-12 rounded px-3 bg-slate-200 border-black'>
                            <MdOutlineBedroomChild className='w-6 h-6' />
                            <input required onChange={e => setForm(e.target.value)} className='flex-1 bg-transparent outline-none' type="text" placeholder='Where are you going?' />

                        </li>

                        <li className='flex w-60 items-center gap-x-3 hover:bg-slate-300 ease-linear duration-100 transition h-12 bg-slate-200 rounded px-3 border-black'>
                            <BsCalendar2DayFill className='w-5 h-5' />
                            <input required onChange={e => setDate(e.target.value)} className='flex-1 bg-transparent outline-none' type="date" />
                        </li>
                        <li className='flex w-60 items-center gap-x-3 hover:bg-slate-300 ease-linear duration-100 transition h-12 bg-slate-200 rounded px-3 border-black'>
                            <BsCalendar2DayFill className='w-5 h-5' />
                            <input required onChange={e => setDatee(e.target.value)} className='flex-1 bg-transparent outline-none' type="date" />
                        </li>
                        <li onClick={chosenHandler} className='flex min-w-60 items-center justify-between gap-x-3 ease-linear duration-150 transition hover:bg-slate-300 h-12 bg-slate-200 rounded px-3 border-black'>
                            <div className='flex items-center gap-x-2'>
                                <IoPerson className='w-6 h-6' />
                                <span className='flex items-center'>
                                    {person} adults - {children} child - {rooms} rooms
                                </span>
                            </div>
                            <BiChevronDown className='w-5 h-5' />
                        </li>

                        <button className='font-bold flex w-32 items-center bg-blue-600 justify-center gap-x-3 hover:bg-blue-500 ease-linear duration-100 cursor-pointer transition h-12 rounded px-3 border-black text-white '>Search</button>
                    </ul>
                </form>


            </div>
            <div className='w-full flex items-end flex-col relative ease-linear duration-150'>
                {
                    showForm ?

                        <div className='w-72 min-h-80 rounded-lg absolute bg-white shadow-xl mr-36 p-6 flex flex-col gap-y-2 '>
                            <div className='w-full flex items-center justify-between'>
                                <h2 className='font-semibold'>Price:</h2>
                                <h2 className='font-bold'>{price} $</h2>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='font-semibold'>Adults</span>
                                <div className='w-28 h-10 border-2 flex items-center justify-between px-4 rounded'>
                                    <button onClick={minusPerson} disabled={disabled} className='text-xl cursor-pointer font-semibold'>-</button>
                                    <span className='text-xl font-semibold'>{person}</span>
                                    <button onClick={addPerson} className='text-xl cursor-pointer font-semibold'>+</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='font-semibold'>Children</span>
                                <div className='w-28 h-10 border-2 flex items-center justify-between px-4 rounded'>
                                    <button onClick={minusChildren} className='text-xl cursor-pointer font-semibold'>-</button>
                                    <span className='text-xl font-semibold'>{children}</span>
                                    <button onClick={plussChildren} className='text-xl font-semibold'>+</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <select className='min-w-28 h-8 outline-none px-2 rounded border-2 border-red-700' name="" id="">
                                    <option value="">Age needed</option>
                                </select>

                                <p className='text-sm'>To find you a place to stay that fits your entire group along with correct pricest</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='font-semibold'>Rooms</span>
                                <div className='w-28 h-10 border-2 flex items-center justify-between px-4 rounded'>
                                    <button disabled={disabled} onClick={minusRooms} className='text-xl cursor-pointer font-semibold'>-</button>
                                    <span className='text-xl font-semibold'>{rooms}</span>
                                    <span onClick={addRooms} className='text-xl cursor-pointer font-semibold'>+</span>
                                </div>
                            </div>
                            <button onClick={doneClick} className='w-full p-1.5 border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-100 ease-linear duration-150 rounded'>
                                Done
                            </button>

                        </div> : ""}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition: Bounce
                />

                <div className='w-full flex flex-col gap-y-3 pt-12 '>


                    <div className='w-full flex flex-col gap-y-3'>
                        {hotelss.map(item => <HotelCard key={item.id} rooms={rooms} person={person} children={children} price={price} item={item} />)}
                    </div>

                </div>

            </div>
        </>

    )
}

export default Booking