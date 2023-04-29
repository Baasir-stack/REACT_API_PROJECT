import { useEffect, useState } from 'react';

//89dee3c2
import Header from './components/Header'
import MovieCard from './components/MovieCard';

import { Grid } from '@mui/material';

const API_URL = "http://www.omdbapi.com/?apikey=89dee3c2"


function App() {

  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("superman")

  }, [])

  return (
    <div className="App">
      <Header />


      {movies.length > 0 ? (

        <Grid className='grid-con' container spacing={3}>


          {movies.map((movie) => {

            return (
              <Grid item lg={4}>
                <MovieCard movie={movie} />
              </Grid>

            )
          })}
        </Grid>
      ) : <div><h1>No movies Found</h1></div>}

      {/* <Grid className='grid' container spacing={4}>
        <Grid item lg={3}>
          <MovieCard movies={movies} />
        </Grid>
        <Grid item lg={3}>
          <MovieCard movies={movies} />
        </Grid>
        <Grid item lg={3}>
          <MovieCard movies={movies} />
        </Grid>
        <Grid item lg={3}>
          <MovieCard movies={movies} />
        </Grid>


      </Grid> */}

    </div >
  );
}

export default App;
