import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Cake,
  Home,
  Candy,
  Phone,
} from 'lucide-react';
import logo from '../assets/logo2.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="relative flex items-center justify-between px-4 py-3 md:px-8">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo Dulces Secretos"
            className="h-16 w-auto object-contain rounded"
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
          <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-pink-600">
            <Home className="w-5 h-5" /> Inicio
          </Link>
          <Link to="/productos" className="flex items-center gap-1 text-gray-700 hover:text-pink-600">
            <Candy className="w-5 h-5" /> Productos
          </Link>
          <Link to="/contacto" className="flex items-center gap-1 text-gray-700 hover:text-pink-600">
            <Phone className="w-5 h-5" /> Contacto
          </Link>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 py-2 text-gray-700 hover:text-pink-600">
            <Home className="w-5 h-5" /> Inicio
          </Link>
          <Link to="/productos" onClick={closeMenu} className="flex items-center gap-2 py-2 text-gray-700 hover:text-pink-600">
            <Candy className="w-5 h-5" /> Productos
          </Link>
          <Link to="/contacto" onClick={closeMenu} className="flex items-center gap-2 py-2 text-gray-700 hover:text-pink-600">
            <Phone className="w-5 h-5" /> Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
