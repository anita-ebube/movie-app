import { useState, useEffect } from "react";
import "./moviebox.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Moviebox() {
  const movieId = useParams();
  console.log(movieId.id);

  const [movieData, setMovieData] = useState(undefined);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId.id}`,
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhhZWEzMWUxMTY3ZDI0YjFkYTViODNkMmQ1MmMxYSIsInN1YiI6IjY1MDU3NzA3MTA5ZGVjMDE0ZjQwODExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MPM7BChfqer8Fqy4wSxTQ3B_rVI8WLOcgQ8OY_jC9fI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(movieData);
  let poster_path;
  let overview;
  if (movieData !== undefined) {
    ({ poster_path,overview } = movieData);
  }
  console.log(poster_path);
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="logos">
          <img src="assets/icons/tv.png" alt="" />
          <h2>MovieBox</h2>
        </div>
        <div className="menulink">
          <img src="./assets/icons/Home.png" alt="" />
          <p>Home</p>
        </div>
        <div className="menulink">
          <img src="./assets/icons/MovieProjector.png" alt="" />
          <p>Movies</p>
        </div>
        <div className="menulink">
          <img src="./assets/icons/TVShow.png" alt="" />
          <p>Tv Series</p>
        </div>
        <div className="menulink">
          <img src="./assets/icons/Calendar.png" alt="" />
          <p>Upcoming</p>
        </div>
        <div className="textbox">
          <p>
            Play movie quizes and earn <br /> free tickets
          </p>
          <span>50k people are playing now</span>
          <p className="btn">Start playing</p>
        </div>
        <div className="menulink">
          <img src="./assets/icons/Logout.png" alt="" />
          <p>Logout</p>
        </div>
      </div>
      <div className="triller">
        <div className="shortclip">
          <img src={`${imgUrl}${poster_path}`} alt="" />
        </div>
        <div className="overview">
          <div className="cast">
            <p>
              {overview}
            </p>

            <p>
              Director <span>Joseph kosinski</span>
            </p>
            <p>
              Writers <span>Jim Cash,Jack Epps Jr,Peter Craig</span>
            </p>
            <p>
              Stars: <span> Tom Cruise, Jennifer Connelly, Miles Teller</span>
            </p>
            <img src="assets/img/toprated.png" alt="" />
          </div>
          <div className="details_rating">
            <div>
              <img src="assets/img/rating.png" alt="" />
            </div>
            <img src="assets/img/Group 52.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
