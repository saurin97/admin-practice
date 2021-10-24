import React from 'react';
import {Modal} from 'react-bootstrap';

interface Props {
    show : boolean
    closeModel : () => void;
    heading? : string
}

const model: React.FC<Props> = props => {
  return (
    <>
      <Modal show={props.show} size="lg" onHide={props.closeModel}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </>
  );
}
  

export default model