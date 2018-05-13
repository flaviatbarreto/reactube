import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import { API_KEY } from '../constants/business.constants';
import SearchBar from './search_bar';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'ski'}, videos => this.setState({ videos }));
    }

    render() {
        return (
          <div>
            <SearchBar />
          </div>
        );
    }
}
