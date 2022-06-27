import React, { useState, useEffect } from 'react';
import MovieComp from '../movieComponent/movieComponent'
import Button from 'react-bootstrap/Button';

export default function Movies() {

    interface movieProps {
        Poster: string;
        Title: string;
        Type: string;
        Year: number;
        imdbID: string;

    }



    const FEATURED_API = "http://www.omdbapi.com/?apikey=16d9b9cf&"

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState<String>("");

    useEffect(() => {
        fetch(FEATURED_API + "&s=star wars&type=movie")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.Search);
            });

    }, []);

    

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> )=> {
        
        setSearch( e.target.value);
        
    }
    
    const handleClick = ()=>{
        fetch(FEATURED_API + `&s=${search}&type=movie`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.Search);
            });
        
        
    }




    return (
    <div>
        <label htmlFor="search" className="m-2">
            Title:
            <input id="search" type="text" onChange={handleSearch} />
        </label>

        <Button variant="primary" onClick={handleClick}>Search</Button>{' '}

        <div className="movie-container">{movies.length > 0 && movies.map((movie: movieProps) => <MovieComp imdbID={movie.imdbID} />)}</div>
    </div>
    );
}