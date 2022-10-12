

import React, { useState } from 'react';
import Option from './Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveToDBRightAnswer, saveToDBWrongAnswer } from '../../SavetoDB';


const Questions = ({questionInfo,number}) => {
    const {correctAnswer,id, options,question} =  questionInfo;

const handleAnswer = (ans,e) => {
 
    if(correctAnswer === ans){
        console.log(e.target.parentNode.parentNode.parentNode.parentNode)
        const getNumber = saveToDBRightAnswer()
        if(getNumber){
            document.getElementById('right-answer').textContent = getNumber;
        }

     
        toast.success(`Right Answer`, {
            position: toast.POSITION.TOP_LEFT
          });
        
    }else{
        const getNumber = saveToDBWrongAnswer()
        if(getNumber){
            document.getElementById('wrong-answer').textContent = getNumber;
        }
        toast.warning(`Wrong Answer`, {
            position: toast.POSITION.TOP_RIGHT
          });

    }
}


    const  showAnswer = () => {
        toast.info(`${questionInfo.correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
          });
    }
    return (
        <div className={`col-12   text-white`}>
          
            <div className="question-info px-3 py-4">
                <div className="heading position-relative">
                <h4  className='text-center w-75 mx-auto mb-3 fw-bolder'> Quiz No {number} : {question}</h4>
                
                <span onClick={showAnswer}  className='position-absolute' style={{top:'0', right: '0', cursor:'pointer'}}><FontAwesomeIcon icon={faEye} /></span>
                <ToastContainer />

                </div>
                <div className="row">
                {
                    options.map((option, index) => <Option key={index} handleAnswer={handleAnswer}   option={option}></Option>)
                }
                </div>
            </div>
           
        </div>
    );
};

export default Questions;