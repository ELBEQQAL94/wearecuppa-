import React from 'react';

// Components 
import Button from './Button';

const Cart = ({src, title, alt, name, info}) => (
    
    <div className="card" style={{marginTop: 15}}>
        <img src={src} className="card-img-top" alt={alt} title={title} />
        <div className="card-body">
            <h5 className="card-title" style={{fontWeight: 'bold'}}>{name}</h5>
            <p className="card-text">{info}</p>
            <div className="btn-section">
            <Button />
            </div>
        </div>
    </div>
);

export default Cart;