import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const getQuizData = useLoaderData();
const getQuiz = getQuizData.data;
    return (
        <div className='course-details  py-5'>
            
          
            <div className="container text-center py-5">
                <h2 className='fs-1 fw-bolder'>Master in Font-End</h2>
                <p>Learn with Fun</p>
                <div className="row mt-5 pt-3">
                    {
                        getQuiz.map(quiz => <Quiz number={getQuiz[quiz]} key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;