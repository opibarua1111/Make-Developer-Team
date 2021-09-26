import React from 'react';
import './Name.css';

const Name = (props) => {
    const {name} = props.name;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Name;