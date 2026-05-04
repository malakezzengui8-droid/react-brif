import { useState } from "react";
import "./App.css";
import { X } from "lucide-react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Better days",
      year: 2049,
      genre: "Sci-Fi",
      rating: 4,
      image: "https://pad.mymovies.it/filmclub/2006/05/236/locandina.jpg",
      description:
        "Better Days (2019) is a critically acclaimed Mandarin romantic crime-drama directed by Derek Tsang, focusing on a bullied high school girl (Zhou Dongyu) and a young street thug (Jackson Yee) who form a protective bond while navigating the intense pressures of college entrance exams..",
    },
    {
      id: 2,
      title: "Go Ahead",
      rating: 5,
      genre: "Romance",
      image:
        "https://thumbor.prod.vidiocdn.com/RoPBvwQBiMdXmIWnXB8Y2Q698As=/filters:quality(70)/vidio-media-production/uploads/image/source/21392/9c5551.png",
      description:
        "Go Ahead (以家人之名) is a popular 2020 Chinese heartwarming drama about three troubled youths—Li Jianjian, Ling Xiao, and He Ziqiu—who, despite coming from dysfunctional backgrounds and being unrelated by blood, become a tight-knit family and support each other."
,
    },
    {
      id: 3,
      title: "Matilda",
      rating: 3,
      genre: "Comedy",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18307_p_v8_an.jpg",
      description:
        "Matilda Wormwood is the brilliant, telekinetic five-year-old protagonist of Roald Dahls Matilda. Described as a small, slim, and fragile girl with a pale, oval face and blue eyes, she possesses a genius intellect. She is extraordinarily well-read, polite, and caring, yet brave, mischievous, and ruthless when punishing adults who bully children."
,
    },
    {
      id: 4,
      title: "Your Name",
      year: 2016,
      genre: "Anime",
      rating: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
      description:
         "Your Name (Japanese: Kimi no Na wa) is a critically acclaimed 2016 Japanese animated romantic fantasy drama film written and directed by Makoto Shinkai. It is known for its breathtaking animation, emotional storytelling, and successful blend of body-swapping comedy with high-stakes drama.",
    },
  ]);

  const [selected, setSelected] = useState(null);

  // ✅ Genre filter
  const [selectedGenre, setSelectedGenre] = useState("All");

  // ✅ Rating filter
  const [minRating, setMinRating] = useState(0);

  // genres list
  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  // ✅ filter logic
  const filteredMovies = movies.filter(
    (m) =>
      (selectedGenre === "All" || m.genre === selectedGenre) &&
      m.rating >= minRating
  );

  const bestMovie = [...movies].sort((a, b) => b.rating - a.rating)[0];
  const top3 = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="app">
      {/* NAVBAR */}
      <div className="navbar">
        <div>
          <h2 className="logo">Mk</h2>
          <p className="subtitle">Cinéma & Films</p>
        </div>

        <div className="nav-actions">
          {/* GENRE */}
          <select onChange={(e) => setSelectedGenre(e.target.value)}>
            {genres.map((g, i) => (
              <option key={i} value={g}>
                {g}
              </option>
            ))}
          </select>

          {/* MIN RATING */}
          <select onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value="0">Min Rating</option>
            <option value="1">⭐ 1+</option>
            <option value="2">⭐ 2+</option>
            <option value="3">⭐ 3+</option>
            <option value="4">⭐ 4+</option>
            <option value="5">⭐ 5</option>
          </select>

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
            <button
              className="details_CTA"
              onClick={() => setSelected(bestMovie)}
            >
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
            <div
              key={m.id}
              className="top-card"
              onClick={() => setSelected(m)}
            >
              <h3>0{i + 1}</h3>
              <img src={m.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS */}
      {selected && (
        <div className="overlay">
          <div className="window details-card">
            <button
              className="close-modal"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <img width={200} src={selected.image} alt="" />

            <div className="details-text">
              <h1>{selected.title}</h1>
              <span>Description :</span>
              <p className="description">{selected.description}</p>
              <p className="genre">{selected.genre}</p>
              <p>{selected.rating} / 5 ⭐</p>
            </div>
          </div>
        </div>
      )}

      {/* ALL MOVIES */}
      <h1 className="film">All Films</h1>

      <div className="images">
        {filteredMovies.map((m, i) => (
          <div
            key={m.id}
            className="top-card"
            onClick={() => setSelected(m)}
          >
            <h3>0{i + 1}</h3>
            <img src={m.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;