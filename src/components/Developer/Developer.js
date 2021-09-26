import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Developer.css';

const Developer = (props) => {
    const {name, level, developer, country, img, salary} = props.developer;
    return (
        <div className="developer">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="info">
               <h4>Name: <span>{name}</span></h4>
               <h4>Expert: <span>{developer}</span></h4>
               <h4>Expertness: <span>{level}</span></h4>
               <h4>Country: <span>{country}</span></h4>
               <h4>Salary: <span>$ {salary}</span></h4>
               <button 
               onClick={() => props.handleAddToCart(props.developer)}
               className="btn" type="submit"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
               
            </div>
        </div>
    );
};

export default Developer;