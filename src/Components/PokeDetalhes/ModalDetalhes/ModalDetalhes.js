import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalDetalhes.css';
import Stats from './Stats';
import Types from './Types';

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
            <div className="modal-body">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img className="img-detalhe" src={pokemon.spriteUrl} alt={""} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12">
                                        <Types types={pokemon.types}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {/* TODO corrigir cor */}
                                        <Stats color={"red"} stats={pokemon.stats}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="card-body">
                        <div>
                            <span>{pokemon.altura} m</span>
                        </div>
                        <div>
                            <span>{pokemon.peso} kg</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <Button variant="outline-info" onClick={props.onHide}>Fechar</Button>
            </div>
        </Modal>
    );

}
export default ModalDetalhes;