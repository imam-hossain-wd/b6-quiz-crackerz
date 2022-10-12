import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart } from 'recharts';

const Statics = () => {
    const getData  = useLoaderData()

    const data01 = [];

  getData.data.map((chart,index) => data01[index] = {"name" : chart.name, 'quiz' : chart.total} )    
    const data02 = [];

  getData.data.map((chart,index) => data02[index] = {"name" : chart.name, 'quiz' : chart.total} )    

const getTotal = getData.data.map((pre) => pre.total)

const totalQuiz = getTotal.reduce((pre, curr) => pre + curr, 0);


    return (
        <div className='container py-5' style={{minHeight:'100vh'}}>
                <div className="row">
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <PieChart width={300} height={250}>
                        <Pie onClick={(e) => console.log(e.target)} data={data01} dataKey="quiz" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                
                        <Pie data={data02} dataKey="quiz" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        <h3 className="fw-bolder text-center">Total Quiz {totalQuiz}</h3>
                        </div>
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <PieChart width={300} height={250}>
                        <Pie onClick={(e) => console.log(e.target)} data={data01} dataKey="quiz" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                
                        <Pie data={data02} dataKey="quiz" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        <h3 className="fw-bolder text-center">Total Quiz {totalQuiz}</h3>
                        </div>
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <PieChart width={300} height={250}>
                        <Pie onClick={(e) => console.log(e.target)} data={data01} dataKey="quiz" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                
                        <Pie data={data02} dataKey="quiz" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        <h3 className="fw-bolder text-center">Total Quiz {totalQuiz}</h3>
                        </div>
                <div className="col-md-6 col-lg-3 col-sm-12">
                    <PieChart width={300} height={250}>
                        <Pie onClick={(e) => console.log(e.target)} data={data01} dataKey="quiz" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                
                        <Pie data={data02} dataKey="quiz" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        <h3 className="fw-bolder text-center">Total Quiz {totalQuiz}</h3>
                        </div>
                
                    </div>
                </div>
    );
};

export default Statics;