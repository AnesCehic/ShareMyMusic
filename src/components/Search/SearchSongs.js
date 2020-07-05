import React, { Component } from 'react'

export default class SearchSongs extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        Search SOngs
      </div>
    )
  }
}