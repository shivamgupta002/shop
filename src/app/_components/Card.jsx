import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CustomCard = () => {
  return (
   <>
   <Card sx={{ maxWidth: 345,margin:'1rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sewing machine
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           We are providing various kind of sewing machine,fans,coller,etc
             
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </>
  )
}

export default CustomCard