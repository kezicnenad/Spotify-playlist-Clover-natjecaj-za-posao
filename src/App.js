import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/api.deezer.com/chart")
      .then((response) => response.json())
      .then((result) => setPlaylist(result.tracks.data))
      .catch((error) => console.log("error", error));
  }, []);

  const fetchAscending = () => {
    const ascending = [...playlist].sort((a, b) => a.duration - b.duration);
    setPlaylist(ascending);
  }

  const fetchDescending = () => {
    const descending = [...playlist].sort((a, b) => b.duration - a.duration);
    setPlaylist(descending);
  };

  return (
    <div className="jumbotron text-center">
      <div className="row header">
        <h1>Top Pop</h1>
      </div>

      <div className="container filter">
        <p>Filter</p>
        <button className="btn btn-warning" onClick={fetchAscending}>
          Asc
        </button>
        <button className="btn btn-warning" onClick={fetchDescending}>
          Desc
        </button>
      </div>

      <div className="row">
        {playlist.map((item, index) => (
          <div key={index}>
            <img className="cover" src={item.album.cover_big} alt={item.title} />
            <h6 className="artist">Artist: {item.artist.name}</h6>
            <h6 className="album">Album: {item.album.title}</h6>
            <h6 className="title">Title: {item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
