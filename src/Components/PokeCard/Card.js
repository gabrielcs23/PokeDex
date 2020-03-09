import React, { useState } from 'react'

const Card = (props) => {

    const formatName = (name) => {
        return name.replace(/^\w/, c => c.toUpperCase())
    }

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <div
            className={`card ${hovered ? 'shadow' : 'shadow-sm'}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <img className="card-img-top sprite mx-auto" src={props.pokemon.spriteUrl} alt={""} />
            <div className="card-body text-center pt-0 pb-1">
                <h5>{formatName(props.pokemon.name)}</h5>
                <p>#{props.pokemon.id}</p>
            </div>
        </div>
    )
}
export default Card;