import { Container, Typography, TextField, Button, Box, styled } from "@mui/material";

const PageContainer = styled(Box)({
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export default function ContactPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <PageContainer>
        <Title variant="h2" gutterBottom>
          Contact Us
        </Title>
        <Typography variant="body1" paragraph>
          Have questions, feedback, or inquiries? Please feel free to reach out to us. We'll be happy to assist you!
        </Typography>
        <form>
          <FormContainer>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </FormContainer>
        </form>
      </PageContainer>
    </Container>
  );
}

