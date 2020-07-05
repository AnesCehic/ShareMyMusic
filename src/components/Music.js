import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './Item';
import deezer from '../axios';

import '../styles/Music.scss';
import { Link, Route } from 'react-router-dom';
import SearchSons from './Search/SearchSongs';

export default class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      songs: [],
      total: 0,
      index: 0,
      hasMore: true,
      type: "",
      playlists: [],
      id: 3135556
    }
  }

  componentDidMount() {
    deezer.get('/playlists')
      .then(res => {
        this.setState({
          playlists: res.data.playlists
        }, () => {
          console.log(this.state.playlists)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // TODO: Ne radi na back dugme. Testirati jos malo
  getNextSearch = () => {
    window.DZ.api(`/search/${this.state.type}?q=${this.state.search}&index=${this.state.index}`, (response) => {
      let sum = this.state.songs.length + response.data.length;
      let total = response.total

      this.setState({
        songs: [...this.state.songs, ...response.data],
        index: this.state.index + 25,
        hasMore: sum === total ? false : true
      }, () => console.log(this.state.songs.length))
    })
  }

  beginSearch = async (e) => {
    e.preventDefault();

    await this.setState({
      index: 0,
      total: 0,
      songs: [],
      hasMore: false
    });

    this.getNextSearch();
  }

  setSong = (id) => {

  }

  render() {
    return(
      <div className="music">
        <div>
          <i className="fas fa-search"></i>
          <form onSubmit={this.beginSearch}>
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.search}
              placeholder="Search your music"
              name="search" />
            
            <select onChange={this.handleSearch} name="type">
              <option value="track">Track</option>
              <option value="artist">Artist</option>
              <option value="albums">Albums</option>
            </select>
          </form>
        </div>

        <div>
          {
            this.state.search === "" ? <h1>No search term</h1> :
            <InfiniteScroll
              dataLength={this.state.songs.length}
              next={this.getNextSearch}
              hasMore={this.state.hasMore}
              loader={<h2>Loading...</h2>}
              endMessage={<p style={{ textAlign: "center", padding: "15px", fontSize: "30px" }}>The End</p>}
            >
              <div>
                {this.state.total !== 0 ? <p>Tracks: {this.state.total}</p> : null}
                {this.state.songs.map((e, index) => {
                  return <div key={index}><Item playlists={this.state.playlists} song={e} /></div>
                })}
              </div>
            </InfiniteScroll>
          }
        </div>
      </div>
    )
  }
}