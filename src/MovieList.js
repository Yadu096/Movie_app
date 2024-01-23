import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies, handleIncStars, handleDecStars, toggleCart, toggleIsFav } =
      this.props;
    return (
      <>
        {movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              incStars={handleIncStars}
              decStars={handleDecStars}
              toggleIsFav={toggleIsFav}
              toggleCart={toggleCart}
            />
          );
        })}
      </>
    );
  }
}

export default MovieList;
