import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDialog = ({ show, handleCloseModal, selectedItem }) => {

  const time = selectedItem[0] && new Date(selectedItem[0].duration * 1000).toISOString().slice(14, 19);

  return (
    <Modal show={show} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>{<Modal.Title></Modal.Title>}</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="container">
            <p>
              <b>
                {selectedItem[0] &&
                  "Song: " + selectedItem[0].title + " - " + time}
              </b>
            </p>
            <p>{selectedItem[0] && "Artist: " + selectedItem[0].artist.name}</p>
            <p>{selectedItem[0] && "Rank: " + selectedItem[0].rank}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-success"
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;
