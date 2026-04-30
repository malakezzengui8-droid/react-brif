import { useState, useEffect } from "react";
import "./App.css";
import { X } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Better days",
      year: 2049,
      genre: "Sci-Fi",
      rating: 4,
      image: "https://pad.mymovies.it/filmclub/2006/05/236/locandina.jpg",
      description:
        "The film revolves around a girl who is being bullied at school and her relationship with a tough street kid, with whom she is implicated in the murder of a teenage girl. (Source: ScreenDaily) ~~ Based on the novel Young &amp; Beautiful by Jui Yue Xi.",
    },
    {
      id: 2,
      title: "Go Ahead",
      rating: 5,
      genre: "romance",
      image:
        "https://thumbor.prod.vidiocdn.com/RoPBvwQBiMdXmIWnXB8Y2Q698As=/filters:quality(70)/vidio-media-production/uploads/image/source/21392/9c5551.png",
      description:
        "The film revolves around a girl who is being bullied at school and her relationship with a tough street kid, with whom she is implicated in the murder of a teenage girl. (Source: ScreenDaily) ~~ Based on the novel Young &amp; Beautiful by Jui Yue Xi.",
    },
    {
      id: 3,
      title: "Matilda",
      rating: 3,
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18307_p_v8_an.jpg",
        description:"Matilda (1996) is a beloved family-comedy fantasy directed by Danny DeVito based on Roald Dahl's book. It follows Matilda Wormwood, a brilliant young girl neglected by her selfish parents and bullied by her school's tyrannical principal"
    },
     {
    id: -1,
    title: "Your Name",
    year: 2016,
    genre: "Anime / Romance",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    description:
      "Two teenagers mysteriously swap bodies and form a deep connection across time and space.",
  },
  ]);

  const bestMovie = [...movies].sort((a, b) => b.rating - a.rating)[0];
  const top3 = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const [selected,setSelected]=useState(null);
  console.log(top3);

  return (
    <div className="app">
      {/* NAVBAR */}
      <div className="navbar">
        <div>
          <h2 className="logo">Mk</h2>
          <p className="subtitle">Cinéma & Films</p>
        </div>

        <div className="nav-actions">
          <button>All Genres</button>
          <button>Min Rating</button>
          <button>+ Add Film</button>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <p className="label">___ TOP RATED FILM</p>
          <h1>{bestMovie.title}</h1>
          <h2>{bestMovie.year}</h2>
          <div className="stars">{"⭐".repeat(bestMovie.rating)}</div>

          <p className="desc">{bestMovie.description}</p>
          <div className="buttons">
            <button className="trailer_CTA">Watch Trailer</button>
            <button className="details_CTA" onClick={() => setSelected(bestMovie)}>
              View Details
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={bestMovie.image} alt="" />
        </div>
      </div>

      {/* TOP RATED */}
      <div className="top-rated">
        <h2>Top Rated</h2>
        <div className="top-list">
          {top3.map((m, i) => (
            <div key={m.id} className="top-card" onClick={()=>setSelected(m)}>
              <h3>0{i + 1}</h3>
              <img src={m.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="overlay">
          <div className="window details-card">
            <button className="close-modal" onClick={() => setSelected(null)}>
              <X />
            </button>
            <img width={200} src={selected.image} alt="" />
            <div className="details-text">
              <h1>{selected.title}</h1>
              <span>description : </span>
              <p className="description">{selected.description}</p>
              <p className="genre">{selected.genre}</p>
              <p>{selected.rating} / 5 ⭐ </p>
            </div>
          </div>
        </div>
      )}
      <h1 className="film">All Films</h1>
      <div className="images">
      {movies.map((m, i) => (
        <div key={m.id} className="top-card " onClick={()=>setSelected(m)}>
              <h3>0{i + 1}</h3>
              <img src={m.image} alt="" />
            </div>
          ))}
          </div>

    </div>
  );
}

export default App;
