import React, { Component, useEffect, useState } from 'react'
import deezer from '../../axios';
import { Link } from 'react-router-dom';

export default function AllPlaylists() {

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    deezer.get('/playlists')
      .then(resp => {
        setPlaylists(resp.data.playlists);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div style={{
      marginTop: '100px'
    }}>
      <h1>List of playlists</h1>

      <ul>
        {playlists.map(e => {
          return <li key={e.id}>
            {e.name}<Link to={`/playlists/${e.id}`}>Songs</Link><button className="btn btn-danger">Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}