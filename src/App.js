import React, { useState, useEffect } from 'react';
import ModalDialog from "./components/Modal";

import './App.css';

function App() {

  const [playlist, setPlaylist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://cors-anywhere.herokuapp.com/api.deezer.com/chart")
    .then((response) => response.json())
    .then((result) => setPlaylist(result.tracks.data))
    .catch((error) => console.log("error", error));
  }

  const fetchAscending = () => {
    const ascending = [...playlist].sort((a, b) => a.duration - b.duration);
    setPlaylist(ascending);
  }

  const fetchDescending = () => {
    const descending = [...playlist].sort((a, b) => b.duration - a.duration);
    setPlaylist(descending);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const selectSong = (e, id) => {
    e.preventDefault();
    const filter = playlist.filter(item => item.id === id);
    setSelectedItem(filter);
    handleOpenModal();
  }

  return (
    <div className="jumbotron text-center">
      <div className="row header">
        <h1>Top Pop</h1>
      </div>

      <div className="container filter">
        {/* <p>Filter</p> */}

        {/* <div className="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Ascending
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Decending
            </label>
          </div>
        </div> */}

        <button className="btn btn-warning" onClick={fetchData}>
          Default
        </button>
        <button className="btn btn-warning" onClick={fetchAscending}>
          Ascending
        </button>
        <button className="btn btn-warning" onClick={fetchDescending}>
          Descending
        </button>
      </div>

      <div className="row">
        {playlist.map((item, index) => (
          <div className='song' key={index} onClick={(e) => selectSong(e, item.id)}>
            <img
              className="album-cover"
              src={item.album.cover_big}
              alt={item.title}
            />
            <h6 className="artist">Artist: {item.artist.name}</h6>
            <h6 className="album">Album: {item.album.title}</h6>
            <h6 className="title">Title: {item.title}</h6>
          </div>
        ))}
      </div>
      <ModalDialog
        show={showModal}
        handleCloseModal={handleCloseModal}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default App;
