import React, { Component } from 'react';
import Header from '../components/Header';
import ironbeerApi from '../api/ironbeerApi';
import '../style/allBeers.css';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    ironbeerApi
      .getAllBeers()
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ allBeers: apiResponse.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.allBeers.map((beer) => (
          <Link
            key={beer._id}
            style={{ textDecoration: 'none' }}
            to={`/single-beer/${beer._id}`}
          >
            <div className="beer">
              <div className="img">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <p>{beer.first_brewed}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default AllBeers;
