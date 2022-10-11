import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" className='bg-black' />
            <p className='font-bold m-2'>Name: {name}</p>
            <p className='font-semibold m-2'>Total Ques: {total}</p>
            <Link to={`/quiz/${id}`}>
                <button className='border rounded-full border-blue-500 text-purple-900 bg-purple-700 px-4 py-2 m-2 text-black btn'>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Quiz;