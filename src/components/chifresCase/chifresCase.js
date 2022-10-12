import React from 'react';

const chifresCase = (props) => {

    return (
            <div style={{width: "100%", padding: "20px", margin: "auto", borderRadius: "40px 40px 40px 10px", ...props.style}}>
                <p className='text-center fw-bold text-white fs-4 lh-1'>{props.numbers}</p>
                <p className='text-center fw-bold text-white lh-1'>{props.title}</p>
            </div>
    )
}

export default chifresCase ;