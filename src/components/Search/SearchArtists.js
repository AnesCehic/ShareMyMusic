import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class SearchArtist extends React.Component {

  constructor() {
    super();

    this.state = {
      songs: []
    }
  }

  getNextSearch = () => {
    window.DZ.api(`/search?q=${this.state.search}&index=${this.state.index}`, (response) => {
      let sum = this.state.songs.length + response.data.length;
      let total = response.total

      this.setState({
        songs: [...this.state.songs, ...response.data],
        index: this.state.index + 25,
        hasMore: sum === total ? false : true
      }, () => console.log(this.state.songs.length))
    })
  }

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.songs.length}
          next={this.getNextSearch}
          hasMore={this.state.hasMore}
          loader={<h2>Loading...</h2>}
          endMessage={<p>End</p>}
        >
          <div>
          {this.state.total !== 0 ? <p>Tracks: {this.state.total}</p> : null}
          {this.state.songs.map((e, index) => {
            return <div key={index}><Item song={e} /></div>
          })}</div>
        </InfiniteScroll>
      </div>
    )
  }
}