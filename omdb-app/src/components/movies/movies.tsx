import React, {useState, useEffect} from 'react';
import MovieComp from '../movieComponent/movieComponent'

export default function Movies(){

    interface movieProps {
        Poster: string;
        Title: string;
        Type: string;
        Year: number;
        imdbID: string;
    
    }



    const FEATURED_API = "http://www.omdbapi.com/?apikey=16d9b9cf&"

    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        fetch(FEATURED_API+"&s=star wars&type=movie")
        .then((res) => res.json())
        .then((data)=> {
            console.log(data);
            setMovies(data.Search);
        });

    }, []);


    return (
        <div className="mt-3">{movies.length > 0 && movies.map((movie: movieProps) => <MovieComp imdbID= {movie.imdbID} />)}</div>
    );
}