import React, { useState, useEffect } from 'react';

const IMAGE_API = "http://img.omdbapi.com/?apikey=16d9b9cf&"

const FEATURED_API = "http://www.omdbapi.com/?apikey=16d9b9cf&"

interface Props {
    // Title: string;
    // Poster: string;
    // Type: string;
    // Year: number;
    imdbID: string;

}

interface thumbProps {
    Title: string;
    Poster: string;
    Type: string;
    Year: number;
}

//  interface movieComponentState {}

const MovieComp: React.FC<Props> = ({ imdbID }) => {

    const [info, setInfo] = useState<thumbProps>({
        Title: '',
        Poster: '',
        Type: '',
        Year: 0
    });


    console.log(FEATURED_API + "&i=" + imdbID)

    useEffect(() => {
        fetch(FEATURED_API + "&i=" + imdbID)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setInfo(
                {
                    Title: data.Title,
                    Poster: data.Poster,
                    Type: data.Type,
                    Year: data.Year
                }
            );
        });
    }, [imdbID])


    console.log(info);

    return (<div className="movie">
        <img src={info.Poster} alt={info.Title} />
        <div className="movieInfo">
            <h3>{info.Title}</h3>
            <span>{info.Year}</span>
        </div>
    </div>);
}



export default MovieComp;