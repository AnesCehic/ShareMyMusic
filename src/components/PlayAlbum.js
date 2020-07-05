import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PlayAlbum() {
  let { id } = useParams();

  const [album, setAlbum] = useState({});
  const [artist, setArtist] = useState({})
  const [genres, setGenres] = useState([])

  useEffect(() => {
    window.DZ.api(`/album/${id}`, (response) => {
      console.log(response.genres)
      setGenres(response.genres.data)
      setArtist(response.artist)
      setAlbum(response)
    })
  }, [])

  return (
    <div style={{ margin: "50px", paddingTop: "35px" }}>
      <h1>Album: {album.title}</h1>

      <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=${album.id}&app_id=414002`} width="700" height="90"></iframe>

      <div style={{ marginTop: "20px" }}>
        <h2>{artist.name}</h2>
        <img src={artist.picture_medium} alt={artist.name} />
      </div>

      <br />

      <div>
        <h2>Alumb genre: </h2>

        <ul>
          {genres.map(e => {
            return <li>{e.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}