import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Quiz.css'


const Quiz = ({quiz}) => {
    const {id, logo, name, total} = quiz;
    return (
        <div className='col-md-6 col-lg-3 mb-lg-0 mb-md-5 mb-sm-5 mb-5 position-relative'>
            <div className="quiz border border-3 border-dark p-2 shadow-lg">
                <img src={logo} className="img-fluid shadow-lg" alt="" />
                <div className="start-course d-flex mt-2 align-items-center justify-content-between">
                    <h5>{name}</h5> <Link to={`/coursedetails/${id}`}><Button className='bg-dark border-0'>Start {name}</Button></Link>
                </div>
            </div>
            <span title={`This ${name} course has ${total} Questions`} id="quiz_count" className='align-items-center bg-dark d-flex d-inline-block justify-content-center position-absolute rounded-circle text-white' style={{width:'80px', height:'80px', top: '-40px', left: '50%', transform: 'translateX(-50%)'}}>
                {total} Quiz
            </span>
        </div>
    );
};

export default Quiz;