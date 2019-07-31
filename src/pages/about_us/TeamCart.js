import React from 'react';

const TeamCart = ({src, alt, title, info, name}) => (
    <div className="team_cart">
        <img className="img-thumbnail rounded" src={src} alt={alt} title={title} />
        <h4>{name}</h4>
        <p>{info}</p>
    </div>
);

export default TeamCart;