import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row m-16 p-6 bg-[#FAFAFA] mb-36'>
            <div className='order-2 space-y-10 md:order-1'>
                <h1 className='text-4xl font-bold'>WH-H900N h.ear on 2 Wireless<br /> <span className='text-purple-400'>Cancelling Headphones</span></h1>
                <p>Bring harmony into your life with the colours of the h.ear range. Available in five unique shades, each one fits seamlessly with your style and your world.</p>
                <button onClick={() => navigate('/reviews')} className='bg-gray-300 px-4 py-2 mt-11 text-purple-400 font-bold rounded hover:bg-gray-400'>
                    REVIEWS
                </button>

            </div>
            <div className='order-1 md:order-2 w-[]'>
                <img height='500px' width='500px' src="https://cdn.pixabay.com/photo/2017/11/05/00/58/headphones-2919314__340.png" alt="" />
            </div>
        </div>
    );
};

export default Home;