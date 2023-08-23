'use client';
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
} from '@mui/material';
import { Grid } from '@mui/material';
import space from '/public/Space.jpg';

const LandingPageHero = () => {
  return (
    <Box
      sx={{
        background: `url(${space.src})`,
        color: 'white',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" gutterBottom>
              Orbital
            </Typography>
            <Typography variant="h5" gutterBottom>
              The ultimate solution for monitoring Apache Kafka clusters. Get
              real-time insights and alerts on key metrics to optimize
              performance and troubleshoot issues quickly.
            </Typography>
            <Box mt={5}>
              <Button variant="contained" color="secondary">
                Get started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageHero;
