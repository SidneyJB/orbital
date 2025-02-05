'use client'

import { Box, Container, Grid, Typography, Avatar } from "@mui/material";


const LoginTechStack = () => {
  return (
    <Box sx={{ bgcolor: "#0D0818", py: 8, color: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{pb: '20px'}}>
          Meet the Team
        </Typography>
        <Grid container spacing={4} alignItems="center" sx={{display: "flex", justifyContent:"space-evenly"}}>
          <Grid item xs={6} sm={4} md={2} sx={{"&:hover":{ cursor: "pointer"} }} onClick={() => window.open('https://www.linkedin.com/in/kirill-karbutov/')}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar alt="Kirill" src={'/Kirill.jpeg'} sx={{height: "150px", width: "auto"}}/>
            </Box>
              <Typography variant="h4" sx={{textAlign: "center", pt: "10px"}}>Kirill</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2} sx={{"&:hover":{ cursor: "pointer"} }}  onClick={() => window.open('https://www.linkedin.com/in/sidney-brodsky/')} >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar alt="Kirill" src={'/Sid-pic.jpeg'} sx={{height: "150px", width: "auto"}}/>
            </Box>
            <Typography variant="h4" sx={{textAlign: "center", pt: "10px"}}>Sid</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}sx={{"&:hover":{ cursor: "pointer"} }}  onClick={() => window.open('https://www.linkedin.com/in/slava-melikov/')}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar alt="Kirill" src={'/Slava.jpg'} sx={{height: "150px", width: "auto"}}/>
            </Box>
            <Typography variant="h4" sx={{textAlign: "center", pt: "10px"}}>Slava</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2} sx={{"&:hover":{ cursor: "pointer"} }} onClick={() => window.open('https://www.linkedin.com/in/vic-gul/')}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar alt="Victor" src={'vic-pic.jpeg'} sx={{height: "150px", width: "auto"}}/>
            </Box>
            <Typography variant="h4" sx={{textAlign: "center", pt: "10px"}}>Victor</Typography>
          </Grid>
            
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginTechStack;