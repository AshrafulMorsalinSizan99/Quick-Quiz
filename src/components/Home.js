import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quizImage from '../images/quiz.jpg';
import Quiz from './Quiz/Quiz';
import './Home.css';

const Home = () => {
    const quizzes = useLoaderData().data;
    // console.log(quizzes);
    return (

        <section>
            <div>
                <h1 className='text-5xl font-bold text-center text-purple-500 mb-4 mt-4'>Welcome to Quick Quiz</h1>
                <p className='text-center font-semibold text-2xl mb-4'>Best place to check your ability on different subjects</p>
            </div>
            <div>
                <img src={quizImage} alt="" className='w-5/6 h-5/6 mx-auto mb-12' />
            </div>
            <div className='home-container'>
                <div className="quiz-container">
                    {
                        quizzes.map(quiz => <Quiz key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Home;