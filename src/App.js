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
    <div>
      <h1>App</h1>

      <button className="btn btn-warning" onClick={fetchAscending}>Asc</button>
      <button className="btn btn-warning" onClick={fetchDescending}>Desc</button>

      {playlist.map((item, index) => (
        <div key={index}>
          <img src={item.album.cover_big} alt={item.title} />
          <p>Artist: {item.artist.name}</p>
          <p>Album: {item.album.title}</p>
          <p>Title: {item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
