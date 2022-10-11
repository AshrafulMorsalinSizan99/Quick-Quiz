import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuesAns from '../QuesAns/QuesAns';

const QuizDetails = () => {
    const quizzes = useLoaderData().data.questions;
    console.log(quizzes);
    return (
        <div>
            {/* <h2>Ques: {quiz.question}</h2> */}
            {
                quizzes.map(quiz => <QuesAns
                    key={quiz.id}
                    quiz={quiz}
                ></QuesAns>)
            }
        </div>
    );
};

export default QuizDetails;