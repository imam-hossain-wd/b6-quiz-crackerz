import React from 'react';

const Info = () => {
    return (
        <div className="container pt-5">
        <div className="border row border-4 text-lg-start text-md-center text-center border-dark align-items-center">
       <div className="col-md-4">
       <img src="coder.jpg" className='rounded img-fluid my-sm-3 my-3' alt="" />
       </div>
        <div className="details col-md-8">
           <div className="div ps-lg-3 ps-md-0 ps-0 ms-3 my-2">
           <h4>Name: Imam Hossain</h4>
            <h5>MERN Stack Developer</h5>
            <p className='mb-0'>MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.
                </p>
           </div>
            </div>
        </div>
        </div>
    );
};

export default Info;