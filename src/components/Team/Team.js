import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Team.css';
const Team = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('./developers.JSON')
          .then(res => res.json())
          .then(data => setDevelopers(data)); //set developers
    },[])
    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer]; //set new developer in cart
        setCart(newCart); //set cart
    }
    return (
        <div className="team-container">
            <div className="developer-container">
               <div className="developers">
                {
                    developers.map(developer => <Developer 
                        key={developer.key} //generate key
                        developer={developer} //send props
                        handleAddToCart={handleAddToCart} //send function
                        ></Developer>)
                }
               </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} // send props
                ></Cart> 
            </div>
        </div>
    );
};

export default Team;