"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Cake,
  Home,
  Candy,
  Phone,
  Book,
  Users,
  MessageCircle,
} from "lucide-react";
import logo from "../assets/logo2.jpg";
import { wa } from "../config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 shadow-md transition-all duration-300">
      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-3 md:px-8">
        {/* Logo + Título + Botón hamburguesa */}
        <div className="flex items-center justify-between lg:justify-start lg:flex-1">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo || "/placeholder.svg"}
              alt="Logo Dulces Secretos"
              className="h-16 w-auto object-contain rounded shadow-md"
            />
          </div>

          {/* Título */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none flex items-center gap-2 lg:ml-4">
            <Cake className="w-7 h-7 text-pink-400" />
            <span className="text-xl md:text-2xl font-bold text-pink-600">
              Dulces Secretos
            </span>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none lg:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú desktop */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Home className="w-5 h-5" /> Inicio
          </Link>
          <Link
            to="/productos"
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Candy className="w-5 h-5" /> Productos
          </Link>
          <Link
            to="/cursos"
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Book className="w-5 h-5" /> Cursos
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Users className="w-5 h-5" /> Nosotros
          </Link>
          <Link
            to="/contacto"
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Phone className="w-5 h-5" /> Contacto
          </Link>

          {/* CTA WhatsApp directo */}
          <a
            href={wa("Hola, me interesa hacer un pedido con Dulces Secretos")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm"
            aria-label="Chatea con nosotros por WhatsApp"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-center">
          <div className="lg:hidden w-full px-4 pb-4 pt-2 flex flex-col items-center bg-pink-50 rounded-b-lg shadow-inner space-y-2">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <Home className="w-5 h-5" /> Inicio
            </Link>
            <Link
              to="/productos"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <Candy className="w-5 h-5" /> Productos
            </Link>
            <Link
              to="/cursos"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <Book className="w-5 h-5" /> Cursos
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <Users className="w-5 h-5" /> Nosotros
            </Link>
            <Link
              to="/contacto"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <Phone className="w-5 h-5" /> Contacto
            </Link>

            {/* CTA WhatsApp móvil */}
            <a
              href={wa("Hola, me interesa hacer un pedido con Dulces Secretos")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm"
              aria-label="Chatea con nosotros por WhatsApp"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
