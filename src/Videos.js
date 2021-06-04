import React, { Component } from "react";
import SearchArea from "./SearchArea";
import request from "superagent";
import VideoList from './VideoList';

class Videos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        videos: [],
        searchField: "", // updates state with the search term
      };
    }

  state = {
    videos: [],
    searchField: "",
  };

  searchVideo = (event) => { // method
    event.preventDefault();
    request
      .get("https://lingumi-take-home-test-server.herokuapp.com/videoTutorials")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ videos: [...data.body]})
      });
  };

  handleSearch = (event) => { // method
    console.log(event.target.value); // verifies search term capture
    this.setState({ searchField: event.target.value }); // value is text typed into search
  };

  render() {
    return (
      <div>
        <SearchArea
          searchVideo={this.searchVideo}
          handleSearch={this.handleSearch} // passed in as a prop
        />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default Videos;
