import React from 'react'
import { FormatNumber } from '../../Utils/NumberFormat';

export default function ArtistProfile(props) {
  return (
    <div className="profile">
      <img
        style={{ borderRadius: "50%" }}
        src={props.artist.picture_medium}
        alt={props.artist.name} />

      <div>
        <p>{props.artist.name}</p>
        <p>Fans: {FormatNumber(props.artist.nb_fan)}</p>
        <a href={props.artist.link}>Deezer Link</a>
      </div>
    </div>
  )
}