import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import VideoList from './VideoList';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchField: '',
      sort: '', // updates state with the search term
    };
  }

  state = {
    videos: [],
    searchField: '',
  };

  searchVideo = (event) => {
    // method
    event.preventDefault();
    request
      .get('https://lingumi-take-home-test-server.herokuapp.com/videoTutorials')
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ videos: [...data.body] });
      });
  };

  handleSearch = (event) => {
    // method
    console.log(event.target.value); // verifies search term capture
    this.setState({ searchField: event.target.value }); // value is text typed into search
  };

  handleSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  cleanData = (data) => {
    // default value for missing data
    const cleanedData = data.body.map((video) => {
      // if(video.hasOwnProperty('averageUserRating') === false) {
      //   video['averageUserRating'] = 0000;
      // }
      // else if(video.hasOwnProperty('imageLinks') === false) {
      //   video['imageLinks'] = { thumbnail: .\images\video.thumbnail.jpg }
      // }

      return video;
    });

    return cleanedData;
  };

  render() {
    const sortedVideos = this.state.videos.sort((a, b) => {
      if (this.state.sort === 'Top 20') {
        return a.averageUserRating < b.averageUserRating ? 1 : -1;
      }
    });
    return (
      <div>
        <SearchArea
          searchVideo={this.searchVideo}
          handleSearch={this.handleSearch} // passed in as a prop
          handleSort={this.handleSort}
        />
        <VideoList videos={sortedVideos} />
      </div>
    );
  }
}

export default Videos;
