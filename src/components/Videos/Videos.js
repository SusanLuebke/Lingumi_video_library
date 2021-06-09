import React, { Component } from 'react';
import SearchArea from '../SearchArea/SearchArea';
import request from 'superagent';
import VideoList from '../VideoList/VideoList';

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

  searchForTutorials = (event) => {
    // method
    event.preventDefault();
    request
      .get('https://lingumi-take-home-test-server.herokuapp.com/videoTutorials')
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

  getTopRatedTutorialsForTags = (event) => {
    // method
    console.log(event.target.value); // verifies search term capture
    this.setState({ searchField: event.target.value.split(', ') }); // value is text typed into search
  };

  handleSort = (event) => {
    this.setState({ videos: this.state.videos.slice(0, 20) });
    this.setState({ sort: event.target.value });
  };

  render() {
    const sortedVideos = this.state.videos.sort((a, b) => {
      if (this.state.sort === 'Top 20') {
        return a.averageUserRating < b.averageUserRating ? 1 : -1;
      }
      return null;
    });
    return (
      <div>
        <SearchArea
          searchForTutorials={this.searchForTutorials}
          getTopRatedTutorialsForTags={this.getTopRatedTutorialsForTags} // passed in as a prop
          handleSort={this.handleSort}
        />
        <VideoList videos={sortedVideos} />
      </div>
    );
  }
}

export default Videos;
