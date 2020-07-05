import React, { useState, useEffect } from 'react';
import '../styles/Item.scss';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import deezer from '../axios';

function Item(props) {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const handleSelectPlaylist = (e, song) => {
    console.log(song)
    let p_id = props.playlists.filter(t => t.name == e.value)[0].id;

    
    deezer.put(`/playlists/${p_id}`, song)
      .then(res => {
        console.log("Saljemo")
        alert("Song added");
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    console.log("Props", props)
  }, [])

  const playlistsNames = props.playlists.map(e => {
    return e.name;
  })

  console.log(playlistsNames);

  return (
    <div key={props.song.id} className="item">
      <img src={props.song.album.cover_small} alt="Metallica album" />
      <div className="songDetails">
        <p className="songTitle">{props.song.title}, {props.song.album.title}</p>
        <p className="artistName">
          Artist: <Link to={`/artist/${props.song.artist.id}`}>{props.song.artist.name}</Link>,
          Duration: { Math.floor(props.song.duration / 60) }:{ props.song.duration % 60 }
        </p>
        <Dropdown
          options={playlistsNames}
          onChange={(e) => handleSelectPlaylist(e, props.song)}
          placeholder="Select playlist" />
      </div>
    </div>
  )
}

export default Item;