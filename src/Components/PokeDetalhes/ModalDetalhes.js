import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDetalhes = (props) => {

    const { pokemon } = props;

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {pokemon.name} #{pokemon.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              {/* TODO remover lorem ipsum e preencher valores corretos */}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      );

}
export default ModalDetalhes;