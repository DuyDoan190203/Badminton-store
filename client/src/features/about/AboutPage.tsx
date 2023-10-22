import { Container, Typography, Box } from "@mui/material";

const pageStyles = {
  backgroundColor: "#f7f7f7",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const titleStyles = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
};

const contentStyles = {
  fontSize: "1.2rem",
  lineHeight: "1.5",
  marginBottom: "20px",
  color: "#555",
  textAlign: "center",
};

export default function AboutPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={pageStyles}>
        <Typography variant="h2" sx={titleStyles} gutterBottom>
          About Our Badminton Store
        </Typography>
        <Typography variant="body1" sx={contentStyles} paragraph>
          Welcome to Our Badminton Store, your premier destination for all things badminton. Our mission is to provide the highest quality badminton equipment and gear for players of all levels.
        </Typography>
        <Typography variant="body1" sx={contentStyles} paragraph>
          At Our Badminton Store, we believe in the power of this exhilarating sport to bring joy, fitness, and camaraderie to people's lives. That's why we are committed to offering a curated selection of rackets, shuttlecocks, apparel, and accessories to help you reach your full potential on the court.
        </Typography>
        <Typography variant="body1" sx={contentStyles} paragraph>
          Whether you're a seasoned pro or just getting started with badminton, we're here to support your journey. Our team of experts is passionate about the sport and is dedicated to helping you find the perfect equipment to match your style and level of play.
        </Typography>
        <Typography variant="body1" sx={contentStyles} paragraph>
          Thank you for choosing Our Badminton Store. We look forward to being a part of your badminton experience and helping you achieve your goals in this exciting sport.
        </Typography>
      </Box>
    </Container>
  );
}
