import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function SimpleModal(props) {
  const modalTitle = props.modalTitle;
  const modalOpen = props.modalOpen;
  const toggleModal = props.toggleModal;
  const children = props.children;
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SimpleModal;
