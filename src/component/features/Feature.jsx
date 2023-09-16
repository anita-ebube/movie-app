import "./feature.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Footer() {
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
    <div className="featuredMovie">
        <div className="title" data-testid="movie-title" >
            <h2>Featured Movie</h2>
            <div className="seemore">
                <a>see more </a>
                <AiOutlineArrowRight />
            </div>
        </div>
        <div className="mode">
        {movieList?.slice(0,4).map((movie) => {
         const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
         console.log(year);
          return (
            <div className="movieList" key={movie.id}>
             <Link to={`movie/${movie.id}`}>
             <div className="movieCard" data-testid="movie-card">
                <div className="poster" data-testid="movie-poster">
                  <div className="posterCard">
                    <img src={`${imgUrl}${movie?.backdrop_path}`} alt="" />
                  </div>
                  <div className="poster_text">
                    <p className="country" data-testid="movie-release-date" >USA,{year}</p>
                    <p className="movieName">{movie.title}</p>
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
        
    </div>
    
  )
}