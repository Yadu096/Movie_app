import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import moviesData from "./moviesData";

class App extends React.Component {
  constructor() {
    //call the constructor of the parent clas
    super();
    //define state of the component
    this.state = {
      movies: moviesData,
      cartCount: 0,
    };
  }
  //create an arrow function, so that 'this' is always bound to the object
  handleIncStars = (movie) => {
    const { movies } = this.state;

    //get the index of the movie
    const index = movies.indexOf(movie);

    //Do not increase rating above 5 stars
    if (movies[index].stars >= 5) {
      return;
    }

    //update the state
    movies[index].stars += 0.5;

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;

    //get the index of the movie
    const index = movies.indexOf(movie);

    //Do not decrease beyond 0
    if (movies[index].stars <= 0) {
      return;
    }

    //update the state
    movies[index].stars -= 0.5;

    this.setState({
      movies,
    });
  };

  toggleIsFav = (movie) => {
    const { movies } = this.state;
    //get the index of movie
    const index = movies.indexOf(movie);
    //toggle the isFav of movie
    movies[index].isFav = !movies[index].isFav;

    this.setState({
      movies,
    });
  };

  toggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    //get the index of movie
    const index = movies.indexOf(movie);
    //toggle the isFav of movie
    movies[index].inCart = !movies[index].inCart;
    //toggle the cart-count as well
    if (movies[index].inCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          handleIncStars={this.handleIncStars}
          handleDecStars={this.handleDecStars}
          toggleCart={this.toggleCart}
          toggleIsFav={this.toggleIsFav}
        />
      </>
    );
  }
}

export default App;
