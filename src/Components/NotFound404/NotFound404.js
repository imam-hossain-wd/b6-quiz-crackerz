import React from 'react';

const imgStyle = {
    width:'60%',
    height:'70%'
}

const NoContentFoundPage = () => {
    return (
        <div className='container text-center py-5'>
            <img src="404.jpg" className='img-fluid' style={imgStyle} alt="" />
        </div>
    );
};

export default NoContentFoundPage;