import React, { useEffect, useState } from 'react';
import AreaChart2 from '../AreaChart/AreaChart';
import RenderLIneChart from '../LineChart/LIneChart';
import RenderPieChart from '../PieChart/RenderPieChart';

const Dashboard = () => {

    const [data, setData] = useState([]);
    // console.log(data)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className='grid grid-col-1 md:grid-cols-2 2xl:grid-cols-3'>
            <div className='flex flex-col m-4 p-4 items-center bg-[#FAFAFA]'>
                <h1 className='text-center text-4xl font-bold'>SELL</h1>
                <RenderLIneChart data={data}></RenderLIneChart>
            </div>
            <div className='flex flex-col m-4 p-4 items-center bg-[#FAFAFA]'>
                <h1 className='text-center text-4xl font-bold'>INVESTMENTS</h1>
                <AreaChart2 data={data}></AreaChart2>
            </div>
            <div className='flex flex-col m-4 p-4 items-center bg-[#FAFAFA]'>
                <h1 className='text-center text-4xl font-bold'>INVEST VS REVENUE</h1>
                <RenderPieChart data={data}></RenderPieChart>
            </div>
        </div>
    );
};

export default Dashboard;