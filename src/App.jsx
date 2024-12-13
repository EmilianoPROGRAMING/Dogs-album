import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Tu componente principal donde están las fotos
import MorePhotos from './components/MorePhotos'; // Un nuevo componente para "más fotos"

function App() {
  return (
      <Routes>
        <Route path="" element={<Home />} /> {/* Página principal */}
        <Route path="/more-photos" element={<MorePhotos />} /> {/* Página de más fotos */}
      </Routes>
  );
}

export default App;
