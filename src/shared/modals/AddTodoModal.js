import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddTodoModal(props) {
  const addon = props.addonSelected;
  return (
    <div>
      <Modal isOpen={props.modalOpen} toggle={props.toggleModal}>
        <ModalHeader>{addon}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggleModal}>
            Add to {addon}
          </Button>
          <Button color="secondary" onClick={props.toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddTodoModal;
