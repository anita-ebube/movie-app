import { useState, useEffect } from "react";
import "./movies.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movieList, setMovieList] = useState(undefined);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
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
        console.log(response.data.results);
        
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="seriesMovie">
      <div className="mode">
        {movieList?.slice(0,10).map((movie) => {
         const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
         console.log(year);
          return (
            <div className="movieList" key={movie.id}>
             <Link to={`movie/${movie.id}`}>
             <div className="movieCard" data-testid="movie-card" >
                <div className="poster" data-testid="movie-poster" >
                  <div className="posterCard">
                    <img src={`${imgUrl}${movie?.backdrop_path}`} alt="" />
                  </div>
                  <div className="poster_text">
                    <p className="country"datatestid="movie-release-date" >USA,{year}</p>
                    <p className="movieName" data-testid="movie-title">{movie.title}</p>
                  </div>
                  <div className="rating">
                  <div className="imdb">
                    <img src="assets/img/imob.png" alt="" />
                    <p>84.0 / 100</p>
                  </div>
                  <div className="tomatoe">
                    <img src="assets/icons/tomatoes.png" alt="" />
                    <p>{movie.vote_average*10}%</p>
                  </div>
                </div>
                <p className="description">Action, Adventure, Drama</p>
                </div>
              
                
              </div>
             </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="mode">
            <div className="movieList">
                <div className="movieCard">
                    <div className="poster">
                        <div className="posterCard">
                            <img src="assets/img/dune.png" alt="" />
                        </div>
                        <p className="country">USA, 2021</p>
                        <p className="movieName">Dune</p>
                    </div>
                    <div className="rating">
                        <div className="imdb">
                            <img src="assets/img/imob.png" alt="" />
                            <p>84.0 / 100</p>
                        </div>
                        <div className="tomatoe">
                            <img src="assets/icons/tomatoes.png" alt="" />
                            <p>75%</p>
                        </div>
                        
                    </div>
                    <p className='description'>Action, Adventure, Drama</p>
                </div>
            </div>
            <div className="movieList">
                <div className="movieCard">
                    <div className="poster">
                        <div className="posterCard">
                            <img src="assets/img/noTime.png" alt="" />
                        </div>
                        <p className="country">USA, 2021</p>
                        <p className="movieName">No Time To Die</p>
                    </div>
                    <div className="rating">
                        <div className="imdb">
                            <img src="assets/img/imob.png" alt="" />
                            <p>76.0 / 100</p>
                        </div>
                        <div className="tomatoe">
                            <img src="assets/icons/tomatoes.png" alt="" />
                            <p>68%</p>
                        </div>
                        
                    </div>
                    <p className='description'>Action, Adventure,Thriller</p>
                </div>
            </div>
            <div className="movieList">
                <div className="movieCard">
                    <div className="poster">
                        <div className="posterCard">
                            <img src="assets/img/shang-chi.png" alt="" />
                        </div>
                        <p className="country">USA, 2021</p>
                        <p className="movieName">Shang-Chi and the Legend of the Ten Rings</p>
                    </div>
                    <div className="rating">
                        <div className="imdb">
                            <img src="assets/img/imob.png" alt="" />
                            <p>79.0 / 100</p>
                        </div>
                        <div className="tomatoe">
                            <img src="assets/icons/tomatoes.png" alt="" />
                            <p>71%</p>
                        </div>
                        
                    </div>
                    <p className='description'>Action,Adventure,Fantasy</p>
                </div>
            </div>
            <div className="movieList">
                <div className="movieCard">
                    <div className="poster">
                        <div className="posterCard">
                            <img src="assets/img/breathe.png" alt="" />
                        </div>
                        <p className="country">USA, 2021</p>
                        <p className="movieName">Dont Breathe 2</p>
                    </div>
                    <div className="rating">
                        <div className="imdb">
                            <img src="assets/img/imob.png" alt="" />
                            <p>61.0 / 100</p>
                        </div>
                        <div className="tomatoe">
                            <img src="assets/icons/tomatoes.png" alt="" />
                            <p>46%</p>
                        </div>
                        
                    </div>
                    <p className='description'>Action, Adventure, Horror</p>
                </div>
            </div>
        </div> */}
    </div>
  );
}
