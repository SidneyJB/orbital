'use client'

import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export default function RouteDocumentation({ mainTitle, routes = [] }) {
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ pb: '20px', pt: '20px' }}
        >
          {mainTitle}
        </Typography>
        <Divider
          sx={{
            backgroundColor: 'black',
            p: 0.05,
            margin: 'auto',
            marginTop: 4,
            marginBottom: 4,
          }}
        />
      </Grid>
      {routes.map(({ url, description, requiredFields, req, res }, idx) => (
        <>
          <Grid item xs={12} sm={6}>
            <Box sx={{ py: 2 }}>
              <Typography variant="h5" component="h3">
                {url}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {description}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Required Fields:
            </Typography>
            <List>
              {requiredFields?.map(field => (
                <ListItem key={field}>
                  <ListItemText primary={field} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{ bgcolor: '#1E1E1E', color: '#FFF', p: 2, borderRadius: 1 }}
            >
              <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                {`Request: ${JSON.stringify(req, null, 2)}`}
              </pre>
              <br />
              <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                {`response: ${JSON.stringify(res, null, 2)}`}
              </pre>
            </Paper>
          </Grid>
          <Divider
            sx={{
              width: '80%',
              margin: 'auto',
              marginTop: 4,
              marginBottom: 4,
            }}
          />
        </>
      ))}
    </Grid>
  );
}
