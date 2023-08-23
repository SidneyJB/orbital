'use client'

import { Box, Container, Grid, Typography } from "@mui/material";

const LoginTechStack = () => {
  return (
    <Box sx={{ bgcolor: "#082948", py: 8, color: "white", minHeight: "50vh", alignItems: "center", display: "flex" }} >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{pb: '20px'}}>
          Our Tech Stack
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/react-logo.png'} alt="React logo" style={{ height: "100px" }} />
            </Box>
              <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>React</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/mui-logo.jpg'} alt="Material UI logo" style={{ height: "100px" }} />
            </Box>
            <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>Material UI</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/chartjs-logo.jpg'} alt="ChartJS logo" style={{ height: "100px" }} />
            </Box>
            <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>ChartJS</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/express-logo.jpg'} alt="Express logo" style={{ height: "100px" }} />
            </Box>
            <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>Express</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/mongodb-logo.jpg'} alt="MongoDB logo" style={{ height: "100px" }} />
            </Box>
            <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>MongoDB</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={'/prometheus-logo.png'} alt="Prometheus logo" style={{ height: "100px" }} />
            </Box>
            <Typography variant="h5" sx={{textAlign: "center", pt: "10px"}}>Prometheus</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginTechStack;