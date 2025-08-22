import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Cursos from "./pages/Cursos";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { wa } from "./config";

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
       <Footer />

      {/* Botón flotante global de WhatsApp (aparece en todas las páginas) */}
      <a
        href={wa("Hola 👋, me gustaría hacer un pedido con Dulces Secretos.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con Dulces Secretos"
        className="
          fixed
          bottom-4 right-4
          md:bottom-6 md:right-6
          z-50
          inline-flex items-center justify-center
          h-14 w-14 md:h-16 md:w-16
          rounded-full
          bg-green-500 hover:bg-green-600
          text-white
          shadow-lg hover:shadow-xl
          transition
          focus:outline-none focus:ring-4 focus:ring-green-300
        "
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </Router>
  );
}
