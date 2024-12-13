import { CircularProgress, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../index.css'; // Para la animación de fondo

function Home() {
  // Simulación de la carga de la página
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
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        <p className='title'>Yuliana Photos</p>
      </Typography>
      <Box className="gallery-container">
        {/* Aquí puedes agregar las imágenes */}
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.34.09 (1).jpg" alt="Foto 1" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.34.09.jpg" alt="Foto 2" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.03 (2).jpg" alt="Foto 3" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.03.jpg" alt="Foto 4" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.04 (1).jpg" alt="Foto 5" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.04 (2).jpg" alt="Foto 6" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.05 (1).jpg" alt="Foto 9" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.05 (2).jpg" alt="Foto 10" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.05 (3).jpg" alt="Foto 11" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.05.jpg" alt="Foto 14" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.06 (1).jpg" alt="Foto 15" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.06 (3).jpg" alt="Foto 17" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.06.jpg" alt="Foto 18" />
        </Box>
        <Box className="photo">
          <img src="public/DOGS/WhatsApp Image 2024-06-11 at 11.35.07 (2).jpg" alt="Foto 19" />
        </Box>
        <Box className="photo">
          <img src="DOGS/WhatsApp Image 2024-06-11 at 11.35.07.jpg" alt="Foto 20" />
        </Box>
      </Box>
      <button 
      id='boton' 
      onClick={() => navigate('/more-photos')}>
        <img src="animal-icon.png" alt="Cargando" style={{ width: '30px', height: '30px' }} />
        Mas fotos aqui</button>
    </Container>
  );
}

export default Home;
