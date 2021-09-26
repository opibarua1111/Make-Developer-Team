import React, { useEffect, useState } from 'react';
import Name from '../Name/Name';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const [names, setName] = useState([]);
    useEffect( () => {
        setName(cart);
    },[cart]);

    let totalQuantity = 0;
    let total = 0;
    for (const developer of cart) {
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        total = total + developer.salary * developer.quantity;
        totalQuantity = totalQuantity + developer.quantity;
    }
    return (
        <div>
            <h2>Developer Added : {totalQuantity}</h2>
            <h2>Total Cost : $ {total}</h2>
            {
                names.map(name => <Name
                     key={name.key}
                     name={name}></Name>)
            }
        </div>
    );
};

export default Cart;