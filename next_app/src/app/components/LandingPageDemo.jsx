'use client'
import { Box, Container, Grid, Typography, Divider } from "@mui/material";

const DemoSection = () => {

    return (
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={2} alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Demo
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  See our quick demo to learn how to use Orbital to monitor your Apache Kafka clusters.
                </Typography>
                <Box sx={{ mt: { xs: 2, md: 4 } }}>
             
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                <Divider sx={{ width: '80%', margin: 'auto', marginTop: 4, marginBottom: 4 }} />
                  <img src={'/More-Details.gif'} alt="Demo Gif Here" style={{ height: "auto", maxWidth: "100%", objectFit: "contain" }} />
                  <img src={'/topics.gif'} alt="Demo Gif Here" style={{ height: "auto", maxWidth: "100%", objectFit: "contain" }} />
                  <Divider sx={{ width: '80%', margin: 'auto', marginTop: 4, marginBottom: 4 }} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
};

export default DemoSection;
