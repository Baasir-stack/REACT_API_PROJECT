import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';

const MovieCard = ({movie}) => {
    // https://via.placeholder.com/400
    console.log(movie.Poster)

    return (
  
    
    <div className='card' >
        <Card sx={{ maxWidth: 345 , borderRadius: '12px'}} >
      <CardActionArea >
        <CardMedia
            className='cardmedia'
          component="img"
          height="330"
          image={movie.Poster !== 'N/A'? movie.Poster : "https://via.placeholder.com/400"}
          alt="green iguana"
        />
        <CardContent className='CardContent' sx={{fontFamily:('Raleway, sans-serif')}}>
         
          <Typography variant="body1" className='typography' sx={{color:"whitesmoke"}}>
           {(movie.Type).toUpperCase()}
          </Typography>
          <Typography variant="h5" className="typo-h5">
                {movie.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions  className='card-actions'>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </div>
  )
}

export default MovieCard