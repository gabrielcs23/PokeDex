import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalDetalhes.css';
import BodyDetalhes from './BodyDetalhes';

const ModalDetalhes = (props) => {

    const { pokemon } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-header">
                <h5 className="modal-title">
                    {pokemon.name} #{pokemon.id}
                </h5>
                <Button className="close" data-dismiss="modal" aria-label="Close" onClick={props.onHide}>
                    <span aria-hidden="true">&times;</span>
                </Button>
            </div>
            <BodyDetalhes pokemon={pokemon} />
            <div className="modal-footer">
                <Button variant="outline-info" onClick={props.onHide}>Fechar</Button>
            </div>
        </Modal>
    );

}
export default ModalDetalhes;