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
      // .query({ query: this.state.searchField })
      .then((data) => {
        let result = data.body.slice(0);
        for (let element of this.state.searchField) {
          result = result.filter((body) => {
            return (
              body['videoTitle']
                .toLowerCase()
                .includes(element.toLowerCase()) ||
              body['teacherName']
                .toLowerCase()
                .includes(element.toLowerCase()) ||
              body['tags']
                .map((tag) => tag.toLowerCase())
                .includes(element.toLowerCase())
            );
          });
        }
        this.setState({ videos: [...result] });
      });
  };

  // Doesn't currently have capability to search for more than one in each category
  handleSearch = (event) => {
    // method
    console.log(event.target.value); // verifies search term capture
    this.setState({ searchField: event.target.value.split(', ') }); // value is text typed into search
  };

  handleSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  cleanData = (data) => {
    // default value for missing data
    const cleanedData = data.body.map((video) => {
      if (video.hasOwnProperty('averageUserRating') === false) {
        video['averageUserRating'] = '0.000';
      }
      return video;
    });
    return cleanedData;
  };

  render() {
    const sortedVideos = this.state.videos.sort((a, b) => {
      // let topTwenty = sortedVideos.filter((value, i) =>i<20)
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
