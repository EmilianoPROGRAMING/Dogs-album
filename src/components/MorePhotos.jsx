import { CircularProgress, Container, Box, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function MorePhotos() {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula 3 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box className="loader">
        <img src="animal-icon.png" alt="Cargando" style={{ width: '50px', height: '50px' }} />
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ mt: 2 }}>Cargando...</Typography>
      </Box>
    );
  }
  return (
    <>
         <Box className="photo-pic">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.04.jpg" alt="Foto 7" />
        </Box>
         <Box className="photo-pic">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.05 (4).jpg" alt="Foto 7" />
        </Box>
         <Box className="photo-pic">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.06 (2).jpg" alt="Foto 7" />
        </Box>
        <button id='boton' onClick={() => navigate('/')}>
        <img src="animal-icon.png" alt="Cargando" style={{ width: '30px', height: '30px' }} />
        Volver</button>
    </>
  )
}

export default MorePhotos