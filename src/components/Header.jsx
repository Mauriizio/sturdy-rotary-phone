import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Cake,
  Home,
  Candy,
  Phone,
  Book,
  Users,
} from 'lucide-react';
import logo from '../assets/logo2.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 shadow-md transition-all duration-300">
      <div className="relative flex items-center justify-between px-4 py-3 md:px-8">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo Dulces Secretos"
            className="h-16 w-auto object-contain rounded shadow-md"
          />
        </div>

        {/* Título centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <Cake className="w-7 h-7 text-pink-400" />
          <span className="text-xl md:text-2xl font-bold text-pink-600">Dulces Secretos</span>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none md:hidden"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menú escritorio */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors">
            <Home className="w-5 h-5" /> Inicio
          </Link>
          <Link to="/productos" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors">
            <Candy className="w-5 h-5" /> Productos
          </Link>
          <Link to="/cursos" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors">
            <Book className="w-5 h-5" /> Cursos
          </Link>

          <Link to="/about" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors">
            <Users className="w-5 h-5" /> Nosotros
          </Link>

          <Link to="/contacto" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors">
            <Phone className="w-5 h-5" /> Contacto
          </Link>
        </nav>
      </div>

      {/* Menú móvil desplegable animado */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="md:hidden px-4 pb-4 pt-2 flex flex-col items-center mx-[vw/2] space-y-2 bg-pink-50 rounded-b-lg shadow-inner">
          
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
            <Home className="w-5 h-5" /> Inicio
          </Link>

          <Link to="/productos" onClick={closeMenu} className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
            <Candy className="w-5 h-5" /> Productos
          </Link>

          <Link to="/cursos" onClick={closeMenu} className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
            <Book className="w-5 h-5" /> Cursos
          </Link>

           <Link to="/about" onClick={closeMenu} className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
            <Users className="w-5 h-5" /> Nosotros
          </Link>

          <Link to="/contacto" onClick={closeMenu} className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
            <Phone className="w-5 h-5" /> Contacto
          </Link>

        </div>
      </div>
    </header>
  );
}
