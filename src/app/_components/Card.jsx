import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

const ZoomCardMedia = styled(CardMedia)({
  transition: 'transform 0.5s ease',  // Smooth zoom transition
  '&:hover': {
    transform: 'scale(1.1)',  // Zoom in when hovered
  },
});

const CustomCard = ({ data }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300, margin: '1rem' }}>
        <CardActionArea>
          <ZoomCardMedia
            component="img"
            height="190"
            width="190"
            image={data.image ? data.image : '/images/no_image.png'}
            alt={data.name || "Image not available"}
            sx={{ objectFit: 'fill' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.name || 'No name available'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {data?.description || 'No description available'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CustomCard;
