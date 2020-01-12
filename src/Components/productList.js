import React from 'react';

import ProductCard from './productCard';

import './style.css';



const Cards = (props) => {
    const list = props.products.map((prod) =>
        <ProductCard 
            className='card'
            key={prod.id}
            product={prod} 
            />);
    return (
        <div className='layout'>
            {list}
        </div>
    );
}



export default Cards;