import React, { Component } from 'react'
import Axios from 'axios';
import deezer from '../../axios';

export default class PlaylistDetails extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      songPlaying: 0,
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    deezer.get(`/playlists/${id}/songs`)
      .then(res => {
        this.setState({
          songs: res.data.songs,
          songPlaying: res.data.songs[0].id
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return(
      <div style={{ marginTop: "50px", padding: "35px" }}>
        <h1>Playlist details:</h1>

        {
          this.state.songs.map(s => {
            return <div style={{ padding: "20px", display: "flex", flexDirection: "row" }}>
              <p style={{ display: "flex", justifyContent: "center" }} key={s.id}>{s.song_name}</p>
              <button
                className="btn btn-primary"
                onClick={() => this.setState({ songPlaying: s.id })}
              >
                Play song
              </button>
            </div>
          })
        }

        <iframe
          scrolling="no" 
          frameborder="0"
          allowTransparency="true"
          src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${this.state.songPlaying}`}
          width="700"
          height="350"></iframe>
      </div>
    )
  }
}