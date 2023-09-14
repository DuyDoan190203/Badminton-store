import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';

export default function HomePage(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <>
      <Slider {...settings}>
          <div>
              <img src="/images/hero1.jpeg" alt="hero" style={{ display: 'block', width: '50%', height: 700, margin: '0 auto' }} />
          </div>
          <div>
              <img src="/images/hero2.jpeg" alt="hero" style={{ display: 'block', width: '50%', height: 'auto', margin: '0 auto' }} />
          </div>
          <div>
              <img src="/images/hero3.webp" alt="hero" style={{ display: 'block', width: '50%', height: 'auto', margin: '0 auto' }} />
          </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{ p: 4, mt: -2 }}  >
          <Typography variant='h1'>
              Welcome to the store!
          </Typography>
      </Box>
    </>
  )
}