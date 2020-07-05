import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import '../../styles/AlbumImage.scss'
import '../../styles/Album.scss'
import { Link } from 'react-router-dom';

export default class ArtistAlbums extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    window.DZ.api(`/artist/${this.props.match.params.id}/albums`, (response) => {
      this.setState({
        albums: response.data
      })
    });
  }

  render() {
    return (
      <Container className="album-container">
        <Row>
          {this.state.albums.map(e => {
            return (
              <Col key={e.id} style={{ display: "flex", justifyContent: "center" }} xs={12} md={4}>
                <div id="album-info">
                  <img
                    onClick={() => { window.location.href = e.link }}
                    className="album-image"
                    src={e.cover_medium}
                    alt={e.title} />
                  <p id="album-title">{e.title}</p>
                  <p>{e.release_date}</p>
                  <Link to={`/album/${e.id}`}>Play album</Link>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}