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
          .then(data => setDevelopers(data));
    },[])
    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }
    return (
        <div className="team-container">
            <div className="developer-container">
               <div className="developers">
                {
                    developers.map(developer => <Developer 
                        key={developer.key}
                        developer={developer}
                        handleAddToCart={handleAddToCart}
                        ></Developer>)
                }
               </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;