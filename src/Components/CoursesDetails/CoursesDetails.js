import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Question';
import {  faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CoursesDetails.css';

const CourseDetails = () => {
    const getCourseData = useLoaderData();
    const {id, logo, name,questions, total} = getCourseData.data;
  

   
    
    return (
        <div className='course-details py-5'>
             <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                <div className="border border-3 border-dark d-flex align-items-center">
            <img src={logo} width="150px" className='rounded' alt="" />
            <div className="details ms-3">
                <h1 className='fw-bolder'>Course Name: {name}</h1>
                <p>Total Questions: {total}</p>
                </div>
            </div>
                </div>
            </div>
            </div>
          <section className='bg-dark pt-5 mt-5'>
          <div className="container">
               <div className="row">
               {
                    questions.map((question,index) => <Questions number={index+1} key={question.id} questionInfo={question}></Questions>)
                }
               </div>
            </div>
          </section>
          <div className='fixed-side-bar text-dark text-white  d-inline-block'>
                <div id className='d-flex p-3 rounded bg-success align-items-center fs-3 mb-3'>
                <FontAwesomeIcon icon={faSquareCheck} />
                <h5 id='right-answer' className='ms-3'> 0</h5>
                </div>
                <div className='d-flex p-3 rounded bg-danger align-items-center fs-3'>
                <FontAwesomeIcon icon={faSquareXmark} />
                <h5 id='wrong-answer' className='ps-3'> 0</h5>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;