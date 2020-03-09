import React, { useState } from 'react';
import './PokeCard.css'
import ApiService from '../../Service/ApiService';

const PokeCard = (props) => {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const formatName = (name) => {
        return name.replace(/^\w/, c => c.toUpperCase())
    }

    const { pokemon } = props;

    const spriteUrl = ApiService.getSpriteUrl(pokemon.id);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div 
                className={`card ${hovered ? 'shadow' : 'shadow-sm'}`}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                >
                <img className="card-img-top sprite mx-auto" src={spriteUrl} alt={""} />
                <div className="card-body text-center pt-0 pb-1">
                    <h5>{formatName(pokemon.name)}</h5>
                    <p>#{pokemon.id}</p>
                </div>
            </div>
        </div>
    );

}
export default PokeCard;