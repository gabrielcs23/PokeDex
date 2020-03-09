import React, { useState } from 'react';
import ModalDetalhes from './ModalDetalhes';

const PokeDetalhes = (props) =>  {

    const { pokemon, onClose} = props;

    const [showModal, setShowModal] = useState(props.showModal);

    const closeModal = () => {
        setShowModal(false);
        onClose();
    } 

    return (

        <ModalDetalhes
            show={showModal}
            onHide={() => closeModal()}
            pokemon={pokemon}
        />
    );

}
export default PokeDetalhes;