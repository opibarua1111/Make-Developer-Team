import React from 'react';
import './Name.css';

const Name = (props) => {
    const {name, img} = props.developer;//destructuring
    return (
        <div className="member">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Name;