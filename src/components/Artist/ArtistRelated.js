import React from 'react'

export default function ArtistRelated(props) {

  return (
    <div className="row">
      {
        props.related.map((e, index) => {
          return (
            <div key={index} className="col-sm-6 col-12 col-md-4 related-artists">
              <img src={e.picture_medium} alt={e.name} />
              <p>{e.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}