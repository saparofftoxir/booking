import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { toast } from 'react-toastify';
function HotelCard({ item, rooms, person, children, price }) {
    const addToBron = () => {
        toast.success(`Assalomu aleykum! Siz ${person} kishi ${children} ta bola ${rooms} xonali joy bandladingiz! Narxi ${price}$ bo'ldi`)
    }
    return (
        <div className='w-10/12 rounded-lg bg-gray-100 flex  p-5 gap-x-5'>
            <div className=''>
                <img className='w-44 rounded-lg h-44' src={item.image} alt="" />
            </div>
            <div className='flex flex-col items-start justify-center gap-y-2'>
                <h2 className='font-bold text-2xl'>{item.title}</h2>
                <h2 className='font-bold text-xl'>Rooms: {item.rooms}</h2>
                <h2 className='font-bold text-xl'>{item.price}$</h2>
            </div>
            <div className='flex flex-1 items-end  justify-end'>
                <button onClick={addToBron} className='flex items-center px-3 gap-x-2 bg-blue-700 h-10 text-white ease-linear duration-150 hover:bg-blue-600 rounded-lg'>Bron qilish
                    <BiChevronRight />
                </button>
            </div>
        </div>
    )
}

export default HotelCard