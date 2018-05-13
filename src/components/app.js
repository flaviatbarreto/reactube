import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import { API_KEY } from '../constants/business.constants';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('ski');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, videos =>
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        );
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
        
        return (
          <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
          </div>
        );
    }
}
