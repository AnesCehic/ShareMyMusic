import React, { useEffect, useState } from 'react'

export default function ArtistTopTracks(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    window.DZ.api(`/artist/${props.match.params.id}/top`, (response) => {
      setData(response.data)
    });
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Top Tracks</h1>
      {data.map((e) => {
        return <div key={e.id}>
          <p>{e.title}</p>
        </div>
      })}
    </div>
  )
}