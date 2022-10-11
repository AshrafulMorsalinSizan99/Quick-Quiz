import { list } from 'postcss';
import React from 'react';
import './QuesAns.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';

const QuesAns = ({ quiz }) => {
    const { id, question, correctAnswer, options } = quiz;
    // const items = { options };
    // const render = items.map((item, index) =>
    //     <div key={index}>{item}</div>
    // );
    // console.log(quiz.correctAnswer)
    const a = { options };
    const res = quiz.correctAnswer;
    // console.log(res)
    // 
    // console.log(a)
    const render = a.options.map((item, index) => <p key={index}>{item}</p>);
    const handleIcon = (res) => {
        console.log(res.correctAnswer)
        toast.info('Correct Answer:'{ res.correctAnswer }'', { autoClose: 500 });
    }

    return (
        <div className='questions'>
            <h1 className='font-bold'>Question: {question}</h1>
            {/* <FontAwesomeIcon icon="faEye"></FontAwesomeIcon> */}
            <button onClick={() => handleIcon(quiz)}>
                <i class="fa-solid fa-eye"></i>
            </button>
            {/* <input type="radio">{render}</input> */}
            {/* <div>{render}</div> */}
            {/* <li>{render}</li> */}
            {/* {
                a.map((item, index) => <input type="radio" key={index}>{item}</input>)
            } */}
            {
                a.options.map((str) => (
                    <li>{str}</li>
                    // <input type="radio" name="{radio-1}" className="radio" />, { str }

                ))
            }
        </div>
    );
};

export default QuesAns;