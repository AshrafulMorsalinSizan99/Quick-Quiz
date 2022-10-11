import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    // console.log(data);
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <LineChart width={800} height={400} data={data} className='my-6'>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
        // </ResponsiveContainer>
    );
};

export default Statistics;