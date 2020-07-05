import React, { Component, useState, useEffect } from 'react'
import { Container, FormGroup, Form, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import deezerApi from '../../axios';

const animatedSelect = makeAnimated();

export default function CustomPlaylist() {
  
  const [playlistName, setPlaylistName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    deezerApi.post('/playlists', {
      name: playlistName
    }).then(res => {
      alert("Succes");
    }).catch(err => {
      console.log(err);

      alert("Error")
    })
  }

  const parseUsersData = (users) => {
    for(let i = 0; i < users.length; i++){
      users[i].label = users[i]['firstname'];
      delete users[i].id;
      users[i].value = users[i]['firstname']
      delete users[i].firstname;
      delete users[i].lastname;
    }

    setUsers(users);
  }

  useEffect(() => {
    deezerApi.get('/users/allUsers')
      .then(res => {
        parseUsersData(res.data)
        console.log(users)
      })
      .catch(err => {
        console.log(err)
      })
  }, [users])

  const handleMultiSelect = (value) => {
    setSelectedUsers([...selectedUsers, value]);
  }

  return (
    <Container style={{ paddingTop: "100px" }}>
      <h1>Crete Playlist</h1>

      <Form onSubmit={handleSubmit} style={{ margin: "50px 0" }} >
        <FormGroup>
          <Label>Playlist name:</Label>
          <Input
            type="text"
            placeholder="Playlist name"
            onChange={e => setPlaylistName(e.target.value)}
            value={playlistName} />

          <Label>Select users:</Label>
          <Select
            closeMenuOnSelect={true}
            components={animatedSelect}
            isMulti
            onChange={handleMultiSelect}
            options={[...users]} />
        </FormGroup>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}