import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const titleStyles = {
    fontSize: '2.5rem',         // Slightly smaller font size
    fontWeight: 'bold',        // Bold text
    color: '#333',             // Dark gray color
    textAlign: 'center',       // Center align
    margin: '20px 0',          // Margin on top and bottom
    letterSpacing: '1px',      // Slight letter spacing
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="/Images/Hero1.jpg" alt="JumpSmash" style={{ display: 'block', width: '100%', maxHeight: 600 }} />
        </div>
        <div>
          <img src="/Images/Hero2.jpg" alt="shuttles" style={{ display: 'block', width: '100%', maxHeight: 600 }} />
        </div>
        <div>
          <img src="/Images/badminton.jpg" alt="Badminton-Court" style={{ display: 'block', width: '100%', maxHeight: 600 }} />
        </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{ p: 4, mt: -2 }}>
        <Typography variant='h1' sx={titleStyles}>
          Welcome to the store!
        </Typography>
      </Box>
    </>
  );
}
