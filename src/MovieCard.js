import "./moviecard.css";
import { Component } from "react";

class MovieCard extends Component {
  render() {
    //destructure the props into new, distinct variables
    const { movie, incStars, decStars, toggleIsFav, toggleCart } = this.props;
    const { title, plot, price, rating, stars, isFav, inCart, poster } =
      this.props.movie;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  className="str-btn"
                  onClick={() => {
                    decStars(movie);
                  }}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  onClick={() => {
                    incStars(movie);
                  }}
                />
                <span className="starCount">{stars}</span>
              </div>
              <button
                className={isFav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  toggleIsFav(movie);
                }}
              >
                {isFav ? "Un-Favourite" : "Favourite"}
              </button>
              <button
                className={inCart ? "remove-cart-btn" : "cart-btn"}
                onClick={() => {
                  toggleCart(movie);
                }}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
