import React from 'react';

const Title = (props) => {

    return (
        <div style={{color: "#1995AD"}}>
            <p className="fw-light text-center">— {props.title} —</p>
            <h2 className="fw-bold text-center">{props.children}</h2>
        </div>
    )
}

export default Title ;