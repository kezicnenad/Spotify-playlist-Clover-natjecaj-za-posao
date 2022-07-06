import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDialog = ({ show, handleCloseModal, selectedItem }) => {

  const durationMinutes = selectedItem[0] && (selectedItem[0].duration - (selectedItem[0].duration % 60)) / 60;
  const durationSeconds = selectedItem[0] && selectedItem[0].duration % 60;

  return (
    <Modal show={show} onHide={handleCloseModal} className="modal">
      <Modal.Header closeButton>
        {
          <Modal.Title>
            {selectedItem[0] && "Song: " + selectedItem[0].title + " - "}
            {durationMinutes >= 10 ? durationMinutes : "0" + durationMinutes}
            {":"}
            {durationSeconds >= 10 ? durationSeconds : "0" + durationSeconds}
          </Modal.Title>
        }
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="container">
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
