'use client'

import { Box, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import RouteDocumentation from './components/RouteDocumentation';
import { routes } from './data/routes';

export default function Docs() {
  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: 'white', py: 8, color: 'black' }}>
        <Container maxWidth="md">
          {routes.map(route => (
            <RouteDocumentation key={route.mainTitle} {...route} />
          ))}
        </Container>
      </Box>
    </>
  );
}
