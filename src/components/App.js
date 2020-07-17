import React, { Component } from 'react'; 
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends Component {
  constructor(props) {
     super(props)
   }
    state = { images: [] };
    onSearchSubmit = (term) => {
      unsplash.get('/search/photos', {
        params: { query: term },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
