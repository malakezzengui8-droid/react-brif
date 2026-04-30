export default function Hero({ movie }) {
  return (
    <div className="hero">
      
      <div className="hero-left">
        <p className="label">__ TOP RATED FILM</p>
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>

        <div className="stars">
          {"⭐".repeat(movie.rating)}
        </div>

        <p className="desc">{movie.description}</p>
      </div>

      <div className="hero-right">
        <img src={movie.image} alt={movie.title} />

        <div className="buttons">
          <button>Watch Trailer</button>
          <button>View Details</button>
        </div>
      </div>

    </div>
  );
}