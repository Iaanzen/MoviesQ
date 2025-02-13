'use client';

import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/app/types/movie';


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'b55227e56c04378810eaad96739cceb9',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        })
    }


    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            )}
            
        </ul>
    );
}