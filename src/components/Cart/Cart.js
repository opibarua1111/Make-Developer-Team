import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import Name from '../Name/Name';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const [developers, setDeveloper] = useState([]);
    useEffect( () => {
        setDeveloper(cart);
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
        <div className="cart">
            <h2><FontAwesomeIcon icon={faUser}  /> Developer Added : {totalQuantity}</h2>
            <h2>Total Cost : $ {total}</h2>
            {
                developers.map(developer => <Name
                     key={developer.key}
                     developer={developer}></Name>)
            }
        </div>
    );
};

export default Cart;