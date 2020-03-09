import React, { useState } from 'react'

const Card = (props) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const { pokemon } = props;

    return (
        <div
            className={`card ${hovered ? 'shadow' : 'shadow-sm'}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <img className="card-img-top sprite mx-auto" src={pokemon.spriteUrl} alt={""} />
            <div className="card-body text-center pt-0 pb-1">
                <h5>{pokemon.name}</h5>
                <p>#{pokemon.id}</p>
            </div>
        </div>
    )
}
export default Card;