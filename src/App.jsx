import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Cursos from './pages/Cursos';
import Nosotros from './pages/Nosotros';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/productos" element={<Productos />} />

           <Route path="/cursos" element={<Cursos />} />

           <Route path="/about" element={<Nosotros />} />

          <Route path="/contacto" element={<Contacto />} />

        </Routes>
      </main>
    </Router>
  );
}
