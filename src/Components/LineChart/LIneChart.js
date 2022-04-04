import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const RenderLIneChart = (props) => {

    const { data } = props;

    return (
        <LineChart width={500} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default RenderLIneChart;