import React from 'react'
import Booking from './Booking'

function Home() {
    return (
        <div className='w-full  flex flex-col pl-20'>
            <div className='flex flex-col '>
                <h1 className='text-2xl py-10 font-semibold'>
                    <span className='text-4xl font-bold'>
                        Find your next stay <br />
                    </span>
                    Search deals on hotels, homes, and much more...
                </h1>
            </div>
            <div className='w-full pr-20'>
                <Booking />
            </div>
        </div>
    )
}

export default Home;