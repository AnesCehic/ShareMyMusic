import React, { Component } from 'react';
import '../../styles/Artist.scss';
import ArtistProfile from './ArtistProfile';
import ArtistAlbums from './ArtistAlbums';

import '../../styles/RelatedArtists.scss';
import ArtistRelated from './ArtistRelated';
import { Route, NavLink } from 'react-router-dom';
import ArtistTopTracks from './ArtistTopTracks';

export default class Artist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artist: {},
      related: [],
      albums: [],
    }
  }

  componentDidMount() {
    window.DZ.api(`/artist/${this.props.match.params.id}`, (response) => {
      this.setState({
        artist: response
      });
    });

    window.DZ.api(`/artist/${this.props.match.params.id}/related`, (response) => {
      this.setState({
        related: response.data
      });
    });
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <div className="custom-wrapper profile-page">
        <ArtistProfile artist={this.state.artist} />

        <ul className="artist-nav">
          <li>
            <NavLink activeStyle={{ fontWeight: 700 }} to={`/artist/${id}`} >Discography</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ fontWeight: 700 }} to={`/artist/${id}/related`}>Related artist</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ fontWeight: 700 }} to={`/artist/${id}/topTracks`}>Top tracks</NavLink>
          </li>
        </ul>

        <Route exact path="/artist/:id" component={ArtistAlbums} />

        <Route path="/artist/:id/topTracks" component={ArtistTopTracks} />

        <Route path="/artist/:id/related">
          <ArtistRelated related={this.state.related} />
        </Route>
      </div>
    )
  }
}