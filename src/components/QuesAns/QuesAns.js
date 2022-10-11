import { list } from 'postcss';
import React from 'react';
import './QuesAns.css';

const QuesAns = ({ quiz }) => {
    const { id, question, correctAnswer, options } = quiz;
    // const items = { options };
    // const render = items.map((item, index) =>
    //     <div key={index}>{item}</div>
    // );
    const a = { options };
    console.log(a);
    const render = a.options.map((item, index) => <p key={index}>{item}</p>);

    return (
        <div className='questions'>
            <h1>Question: {question}</h1>
            {/* <input type="radio">{render}</input> */}
            {/* <div>{render}</div> */}
            {/* <li>{render}</li> */}
            {/* {
                a.map((item, index) => <input type="radio" key={index}>{item}</input>)
            } */}
            {
                a.options.map(str => (
                    <li>{str}</li>

                ))
            }
        </div>
    );
};

export default QuesAns;