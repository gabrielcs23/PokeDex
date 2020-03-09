import React, { useState } from 'react';
import './PokeCard.css'

const PokeCard = (props) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div 
                className={`card ${hovered ? 'shadow' : 'shadow-sm'}`}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                >
                <img className="card-img-top sprite mx-auto" src={props.pokemon.img} alt={"pokemonImg"} />
                <div className="card-body pt-0">
                    <h5 className="card-title">Poke Name #nº</h5>
                    <p className="card-text">Poke Description</p>
                </div>
            </div>
        </div>
    );

}
export default PokeCard;