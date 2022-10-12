import React from 'react';

const Option = ({option,index, handleAnswer}) => {
    

    return (
        <div  className='col-md-6'>
            <label htmlFor={index} className="w-100 my-2">
            
            <div className="option  py-3 px-3 rounded border borer-2 d-flex border-white">
                
                    <input  onClick={(e) => handleAnswer(option,e)}  className='me-3' name="option" value={index} type='radio' /> <span>{option}</span>
            </div>
                </label>
                
                  
                
        </div>
    );
};

export default Option;