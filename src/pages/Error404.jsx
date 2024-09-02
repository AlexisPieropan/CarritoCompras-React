import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', mb: 2 }}>
        😞
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Error 404 - Página no encontrada
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Volver al inicio
      </Button>
    </Box>
  );
};

export default Error404;
