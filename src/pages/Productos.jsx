"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Filter, Heart, Eye, X } from "lucide-react";
import { wa } from "../config";

export default function Productos() {
  // ---------------- SEO (React 19 Document Metadata) ----------------
  const SEO = (
    <>
      <title>Productos | Dulces Secretos — Tortas y postres personalizados</title>
      <meta
        name="description"
        content="Explora nuestro catálogo de tortas, postres y helados (tetis) 100% personalizados. Guarda tus favoritos y cotiza por WhatsApp al instante."
      />
      <link rel="canonical" href="https://dulcessecretos.online/productos" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dulces Secretos" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:title" content="Productos | Dulces Secretos — Tortas y postres personalizados" />
      <meta
        property="og:description"
        content="Catálogo de tortas y postres personalizados. Guarda favoritos y cotiza por WhatsApp sin registrarte."
      />
      <meta property="og:url" content="https://dulcessecretos.online/productos" />
      <meta property="og:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
      <meta property="og:image:alt" content="Catálogo de Dulces Secretos" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Productos | Dulces Secretos — Tortas y postres personalizados" />
      <meta
        name="twitter:description"
        content="Explora, guarda favoritos y cotiza por WhatsApp. Sin cuentas, sin complicaciones."
      />
      <meta name="twitter:image" content="https://dulcessecretos.online/fondoweb1.jpg" />

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": productosFiltrados.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.nombre,
        "url": `https://dulcessecretos.online/productos#${p.id}`
      }))
    }),
  }}
/>



    </>
  );

  // ---------------- Estado principal ----------------
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Favoritos (persistencia en localStorage)
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const raw = localStorage.getItem("favoritos");
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(arr);
    } catch {
      return new Set();
    }
  });
  const [drawerAbierto, setDrawerAbierto] = useState(false);

  useEffect(() => {
    // Persistir cambios en localStorage
    localStorage.setItem("favoritos", JSON.stringify(Array.from(favoritos)));
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isFavorito = (id) => favoritos.has(id);

  // ---------------- Lógica de WhatsApp ----------------
  const handleWhatsAppOrder = (producto) => {
    const message = `¡Hola! Me interesa ordenar algo similar a: "${producto.nombre}" 🍰

📝 Detalles del producto que me gustó:
- Categoría(s): ${
      Array.isArray(producto.categoria) ? producto.categoria.join(", ") : producto.categoria
    }
- Estilo: ${producto.descripcion}

¿Podrían ayudarme con la cotización y los detalles?`;
    window.open(wa(message), "_blank");
  };

  // ---------------- Datos ----------------
  const categorias = [
    { id: "todas", nombre: "Todas", emoji: "🍰" },
    { id: "caballeros", nombre: "Caballeros", emoji: "🎩" },
    { id: "infantil", nombre: "Infantil", emoji: "🎈" },
    { id: "tradicional", nombre: "Tradicional", emoji: "🎂" },
    { id: "chocolate", nombre: "Chocolate", emoji: "🍫" },
    { id: "fondant", nombre: "Fondant", emoji: "🎨" },
    { id: "buttercream", nombre: "Buttercream", emoji: "🌸" },
    { id: "chantilly", nombre: "Chantilly", emoji: "🎉" },
    { id: "postres", nombre: "Postres", emoji: "🧁" },
    { id: "helados", nombre: "Helados", emoji: "🍦" },
  ];

  const productos = [
    // Caballeros
    { id: 1, nombre: "Torta de Cumpleaños Cervecera", categoria: "caballeros", descripcion: "Torta con Cerveza Corona y Chocolates para Caballero", imagen: "/Tortas/caballero1.jpg", tags: ["Cumpleaños", "Cervezas", "Caballero"] },
    { id: 2, nombre: "Torta de Cumpleaños Adulto Buttercream", categoria: "caballeros", descripcion: "Torta con emote cervecero para Caballero", imagen: "/Tortas/caballero2.jpg", tags: ["Buttercream", "Cervezas", "Caballero"] },
    { id: 3, nombre: "Torta de Cumpleaños para Caballero", categoria: "caballeros", descripcion: "Torta con emote para Caballero", imagen: "/Tortas/caballero3.jpg", tags: ["Buttercream", "Caballero"] },
    { id: 4, nombre: "Torta Pablo Escobar y Dólares", categoria: "caballeros", descripcion: "Torta de Pablo Escobar y Dólares en Fondant", imagen: "/Tortas/caballero4.jpg", tags: ["Pablo Escobar", "Dólares", "Caballero"] },
    { id: 5, nombre: "Torta de Chocolate y Whiskey Jack Daniels", categoria: "caballeros", descripcion: "Torta de cumpleaños de Chocolate y Whiskey Jack Daniels", imagen: "/Tortas/caballero5.jpg", tags: ["Whiskey", "Jack Daniels", "Caballero"] },
    { id: 6, nombre: "Torta Whiskey Jack Daniels", categoria: "caballeros", descripcion: "Torta de Whiskey Jack Daniels", imagen: "/Tortas/caballero6.jpg", tags: ["Whiskey", "Jack Daniels", "Caballero"] },

    // Tradicional
    { id: 7, nombre: "Torta Imposible", categoria: "tradicional", descripcion: "Torta Imposible Quesillo-Bizcocho", imagen: "/Tortas/quesillo1.jpg", tags: ["Cumpleaños", "Clásica", "Fresas"] },
    { id: 8, nombre: "Torta Tres Leches", categoria: "tradicional", descripcion: "Deliciosa torta empapada en tres leches", imagen: "/Tortas/tresleches2.jpg", tags: ["Tres Leches", "Canela", "Tradicional"] },
    { id: 9, nombre: "Torta de Quesillo", categoria: "tradicional", descripcion: "Postre Quesillo Tradicional", imagen: "/Tortas/quesillo2.jpg", tags: ["Quesillo", "Tradicional", "Cream Cheese"] },

    // Infantil
    { id: 10, nombre: "Torta Paw Patrol", categoria: "infantil", descripcion: "Torta temática Paw Patrol", imagen: "/Tortas/infantil3.jpg", tags: ["Paw Patrol", "Infantil"] },
    { id: 11, nombre: "Torta Payasito Plin Plin", categoria: "infantil", descripcion: "Torta temática Payasito Plin Plin", imagen: "/Tortas/infantil11.jpg", tags: ["Plin Plin", "Infantil"] },
    { id: 12, nombre: "Torta Dragon Ball", categoria: "infantil", descripcion: "Torta de Dragon Ball Chocolate", imagen: "/Tortas/infantil12.jpg", tags: ["Dragon Ball", "Chocolate", "Infantil"] },
    { id: 13, nombre: "Torta Dragon Ball 2", categoria: "infantil", descripcion: "Torta de Dragon Ball Chantilly", imagen: "/Tortas/infantil1.jpg", tags: ["DragonBall", "Infantil"] },
    { id: 14, nombre: "Torta Cumpleaños Infantil", categoria: "infantil", descripcion: "Torta de niña Chantilly", imagen: "/Tortas/infantil13.jpg", tags: ["Cumpleaños", "Infantil"] },
    { id: 15, nombre: "Torta niña Minnie Mouse", categoria: "infantil", descripcion: "Torta de niña Minnie Mouse", imagen: "/Tortas/infantil14.jpg", tags: ["Cumpleaños", "Infantil"] },
    { id: 16, nombre: "Torta infantil Buttercream", categoria: "infantil", descripcion: "Torta de cumpleaños infantil", imagen: "/Tortas/infantil15.jpg", tags: ["Cumpleaños", "Infantil"] },
    { id: 17, nombre: "Torta infantil Leo el Camión", categoria: "infantil", descripcion: "Torta de cumpleaños infantil de Leo el Camión", imagen: "/Tortas/infantil16.jpg", tags: ["Cumpleaños", "Leo el Camion", "Infantil"] },
    { id: 18, nombre: "Torta infantil Hakuna Matata", categoria: "infantil", descripcion: "Torta infantil Hakuna Matata", imagen: "/Tortas/infantil17.jpg", tags: ["Cumpleaños", "Hakuna Matata", "Infantil"] },
    { id: 19, nombre: "Torta infantil de Fútbol", categoria: "infantil", descripcion: "Torta infantil temática Fútbol", imagen: "/Tortas/infantil18.jpg", tags: ["Cumpleaños", "Fútbol", "Infantil"] },
    { id: 20, nombre: "Torta de Masha y el Oso", categoria: "infantil", descripcion: "Torta infantil temática Masha y el Oso", imagen: "/Tortas/infantil19.jpg", tags: ["Cumpleaños", "Masha y el Oso", "Infantil"] },
    { id: 21, nombre: "Torta de Fútbol 2", categoria: "infantil", descripcion: "Torta infantil temática de Fútbol", imagen: "/Tortas/infantil20.jpg", tags: ["Cumpleaños", "Fútbol", "Infantil"] },
    { id: 22, nombre: "Torta de One Piece Chantilly", categoria: "infantil", descripcion: "Torta de Chantilly Temática One Piece", imagen: "/Tortas/infantil2.jpg", tags: ["Chantilly", "Infantil", "One Piece"] },
    { id: 23, nombre: "Torta de Gato con Botas", categoria: "infantil", descripcion: "Torta del Gato con Botas", imagen: "/Tortas/infantil21.jpg", tags: ["Chantilly", "Infantil", "Gato con Botas"] },
    { id: 24, nombre: "Torta de Stitch", categoria: "infantil", descripcion: "Torta infantil de Stitch", imagen: "/Tortas/infantil22.jpg", tags: ["Infantil", "Stitch"] },
    { id: 25, nombre: "Torta de Corazón Hello Kitty", categoria: "infantil", descripcion: "Torta infantil de Hello Kitty", imagen: "/Tortas/infantil23.jpg", tags: ["Infantil", "Hello Kitty"] },
    { id: 26, nombre: "Torta Granja de Zenón", categoria: "infantil", descripcion: "Torta Granja de Zenón Chantilly", imagen: "/Tortas/infantil4.jpg", tags: ["Chantilly", "Infantil", "Granja de Zenón"] },
    { id: 27, nombre: "Torta 44 Cats", categoria: "infantil", descripcion: "Torta diseño 44 Cats", imagen: "/Tortas/infantil5.jpg", tags: ["Chantilly", "Infantil", "44 Cats"] },
    { id: 28, nombre: "Torta Stranger Things", categoria: "infantil", descripcion: "Torta diseño Stranger Things", imagen: "/Tortas/infantil7.jpg", tags: ["Infantil", "Stranger Things"] },
    { id: 29, nombre: "Torta LOL Surprise", categoria: "infantil", descripcion: "Torta diseño LOL Surprise", imagen: "/Tortas/infantil9.jpg", tags: ["Fondant", "Infantil", "LOL Surprise"] },
    { id: 30, nombre: "Torta Pokémon Fondant", categoria: ["infantil", "fondant"], descripcion: "Torta diseño Pokémon", imagen: "/Tortas/infantil10.jpg", tags: ["Infantil", "Pokémon"] },

    // Buttercream
    { id: 31, nombre: "Torta Feliz Aniversario", categoria: "buttercream", descripcion: "Torta Buttercream Aniversario", imagen: "/Tortas/aniversario1.jpg", tags: ["Buttercream", "Aniversario"] },
    { id: 32, nombre: "Torta Corazón Buttercream", categoria: "buttercream", descripcion: "Torta Corazón Buttercream", imagen: "/Tortas/corazon1.jpg", tags: ["Buttercream", "Corazón"] },
    { id: 33, nombre: "Pucca Buttercream", categoria: "buttercream", descripcion: "Torta Pucca Buttercream deliciosa", imagen: "/Tortas/buttercream3.png", tags: ["Buttercream", "Pucca"] },

    // Chocolate
    { id: 34, nombre: "Torta Chocolate Cumpleaños", categoria: "chocolate", descripcion: "Torta ganache de chocolate para cumpleaños", imagen: "/Tortas/chocolate1.png", tags: ["Ganache", "Chocolate", "Cumpleaños"] },
    { id: 35, nombre: "Torta Chocolate Oreo", categoria: "chocolate", descripcion: "Torta de chocolate con galleta Oreo", imagen: "/Tortas/chocolate2.png", tags: ["Oreo", "Chocolate"] },
    { id: 36, nombre: "Torta Harry Potter Chocolate", categoria: "chocolate", descripcion: "Torta inspirada en Harry Potter, ganache de chocolate", imagen: "/Tortas/chocolate3.png", tags: ["Harry Potter", "Chocolate"] },

    // Chantilly
    { id: 37, nombre: "Torta de Chantilly Paw Patrol", categoria: "chantilly", descripcion: "Torta inspirada en Paw Patrol de Chantilly", imagen: "/Tortas/chantilly1.png", tags: ["Paw Patrol", "Chantilly"] },
    { id: 38, nombre: "Torta de Chantilly Tropical", categoria: "chantilly", descripcion: "Torta temática tropical de Chantilly", imagen: "/Tortas/chantilly2.jpg", tags: ["Tropical", "Chantilly"] },

    // Fondant
    { id: 39, nombre: "Happy Birthday Princesa Fondant", categoria: "fondant", descripcion: "Torta con fondant, corona y decoraciones elegantes", imagen: "/Tortas/fondant1.jpg", tags: ["Princesa", "Cumpleaños", "Fondant"] },
    { id: 40, nombre: "Jordan Fondant", categoria: "fondant", descripcion: "Torta con fondant temática Jordan", imagen: "/Tortas/fondant2.jpg", tags: ["Jordan", "Cumpleaños", "Fondant"] },

    // Postres
    { id: 41, nombre: "Marquesanas Variadas", categoria: "postres", descripcion: "Cremosas marquesanas variadas con distintos sabores", imagen: "/Tortas/postres.jpg", tags: ["Marquesanas", "Cremosas"] },
    { id: 42, nombre: "Arreglo de Brownies Gourmet", categoria: "postres", descripcion: "Auténticas delicias de chocolate para compartir", imagen: "/Tortas/postres2.jpg", tags: ["Chocolate", "Postres"] },
    { id: 43, nombre: "Bizcocho + Bombones 27th", categoria: "postres", descripcion: "Delicado arreglo para cumpleaños de chocolate", imagen: "/Tortas/postres3.jpg", tags: ["Cumpleaños", "Postre", "Ligero"] },

    // Helados
    { id: 44, nombre: "Tetis Tradicionales Venezolanas", categoria: "helados", descripcion: "Tetis venezolanas de variados sabores", imagen: "/Tortas/helados.jpg", tags: ["Tetis", "Tradicional", "Venezolano"] },
    { id: 45, nombre: "Tetis de Coco", categoria: "helados", descripcion: "Tetis venezolanas de Coco", imagen: "/Tortas/helados1.jpg", tags: ["Tetis", "Coco", "Venezolano"] },
    { id: 46, nombre: "Tetis de Galleta María", categoria: "helados", descripcion: "Tetis venezolanas de Galleta María", imagen: "/Tortas/helados3.jpg", tags: ["Tetis", "Galleta", "Venezolano"] },
    { id: 47, nombre: "Tetis de Choco-Manjar", categoria: "helados", descripcion: "Tetis venezolanas de Chocolate y Manjar", imagen: "/Tortas/helados4.jpg", tags: ["Tetis", "Choco-Manjar", "Venezolano"] },
    { id: 48, nombre: "Tetis de Choco-Maní", categoria: "helados", descripcion: "Tetis venezolanas de Chocolate y Maní", imagen: "/Tortas/helados5.jpg", tags: ["Tetis", "Choco-Maní", "Venezolano"] },
    { id: 49, nombre: "Tetis de Fresas", categoria: "helados", descripcion: "Tetis venezolanas de Fresa", imagen: "/Tortas/helados6.jpg", tags: ["Tetis", "Fresa", "Venezolano"] },
    { id: 50, nombre: "Tetis de Ron con Pasas", categoria: "helados", descripcion: "Tetis venezolanas de Ron con Pasas", imagen: "/Tortas/helados7.jpg", tags: ["Tetis", "Ron con Pasas", "Venezolano"] },
  ];

  // Productos favoritos derivados
  const favoritosLista = useMemo(
    () => productos.filter((p) => favoritos.has(p.id)),
    [favoritos, productos]
  );

  // Filtrado que soporta categorías múltiples
  const productosFiltrados = useMemo(() => {
    if (categoriaActiva === "todas") return productos;
    return productos.filter((p) =>
      Array.isArray(p.categoria)
        ? p.categoria.includes(categoriaActiva)
        : p.categoria === categoriaActiva
    );
  }, [categoriaActiva, productos]);

  // ---------------- UI ----------------
  return (
    <>
      {SEO}

      <div className="min-h-screen bg-gray-50">
        {/* Hero con overlay para legibilidad */}
        <section className="relative text-white py-20 px-4 bg-[url('/Tortas/bg-1.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Nuestros Productos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Descubre nuestro portafolio de creaciones únicas. Cada producto es
              personalizado según tus gustos, tamaño y ocasión especial.
            </p>
            <div className="bg-white/15 backdrop-blur-md rounded-lg p-4 inline-block">
              <p className="text-lg">
                💡 <strong>Productos Personalizados:</strong> Todos nuestros
                productos se adaptan a tus necesidades.
              </p>
            </div>
          </div>
        </section>

        {/* Barra filtros */}
        <section className="py-3 px-4 bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Filter className="text-gray-600" size={18} />
              <h3 className="text-base font-semibold text-gray-800">
                Filtrar por categoría:
              </h3>
            </div>

            <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setCategoriaActiva(categoria.id)}
                  className={`flex-shrink-0 px-3 py-1 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                    categoriaActiva === categoria.id
                      ? "bg-pink-600 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } text-lg`}
                >
                  {categoria.emoji} {categoria.nombre}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Galería + botón flotante Favoritos */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {categoriaActiva === "todas"
                  ? "Todos Nuestros Productos"
                  : `${
                      categorias.find((c) => c.id === categoriaActiva)?.emoji
                    } ${
                      categorias.find((c) => c.id === categoriaActiva)?.nombre
                    }`}
              </h2>
              <p className="text-xl text-gray-600">
                Mostrando {productosFiltrados.length} producto
                {productosFiltrados.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid de productos (foto grande, foco en la parte baja, contenido compacto, botón siempre alineado) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
  {productosFiltrados.map((producto) => (
    <article
      key={producto.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Imagen protagonista — MÁS ALTA y con object-bottom */}
      <div className="relative h-[300px] md:h-[340px] lg:h-[360px]">
        <img
          src={producto.imagen || "/placeholder.svg"}
          alt={producto.nombre}
          className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: "center bottom" }} // fallback extra
          loading="lazy"
          decoding="async"
        />

        {/* Overlay "Ver detalles" al hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <button
            onClick={() => setProductoSeleccionado(producto)}
            className="bg-white text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 hover:bg-gray-100"
            aria-label={`Ver detalles de ${producto.nombre}`}
          >
            <Eye size={16} />
            Ver Detalles
          </button>
        </div>

        {/* Favoritos */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => toggleFavorito(producto.id)}
            className="bg-white/85 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
            aria-pressed={isFavorito(producto.id)}
            aria-label={
              isFavorito(producto.id)
                ? `Quitar ${producto.nombre} de favoritos`
                : `Agregar ${producto.nombre} a favoritos`
            }
            title={isFavorito(producto.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            <Heart
              className={isFavorito(producto.id) ? "text-pink-600 fill-current" : "text-pink-600"}
              size={18}
            />
          </button>
        </div>
      </div>

      {/* Contenido compacto (menos aire) */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5">
          {producto.nombre}
        </h3>

        {/* Descripción: máximo 2 líneas */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-2"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "36px", // asegura 2 líneas sin empujar
          }}
        >
          {producto.descripcion}
        </p>

        {/* Chips pequeños para no empujar el botón */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {producto.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón SIEMPRE pegado abajo y alineado entre tarjetas */}
        <button
          onClick={() => handleWhatsAppOrder(producto)}
          className="mt-auto w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Ordenar Similar
        </button>
      </div>
    </article>
  ))}
</div>



            {/* Botón flotante para abrir Favoritos */}
            <button
              onClick={() => setDrawerAbierto(true)}
              className="fixed right-4 bottom-24 md:bottom-6 z-40 bg-white border shadow-lg hover:shadow-xl px-4 py-2 rounded-full flex items-center gap-2"
              aria-controls="drawer-favoritos"
              aria-expanded={drawerAbierto}
              title="Ver favoritos"
            >
              <Heart className="text-pink-600" size={18} />
              <span className="text-sm font-semibold text-gray-800">
                Favoritos ({favoritos.size})
              </span>
            </button>
          </div>
        </section>

        {/* Drawer de Favoritos */}
        <div
          id="drawer-favoritos"
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform ${
            drawerAbierto ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
          role="dialog"
          aria-label="Tus favoritos"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">Favoritos ({favoritos.size})</h3>
            <button
              onClick={() => setDrawerAbierto(false)}
              className="p-1 rounded hover:bg-gray-100"
              aria-label="Cerrar favoritos"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-144px)]">
            {favoritosLista.length === 0 ? (
              <p className="text-gray-600 text-sm">
                Aún no has agregado productos a favoritos. Toca el corazón ❤️ en las tarjetas.
              </p>
            ) : (
              favoritosLista.map((p) => (
                <div key={p.id} className="flex gap-3 items-center border rounded-lg p-2">
                  <img
                    src={p.imagen || "/placeholder.svg"}
                    alt={p.nombre}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-800 truncate">{p.nombre}</p>
                    <p className="text-xs text-gray-500 truncate">
                      {Array.isArray(p.categoria) ? p.categoria.join(", ") : p.categoria}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorito(p.id)}
                    className="p-1 rounded hover:bg-gray-100"
                    aria-label={`Quitar ${p.nombre} de favoritos`}
                    title="Quitar"
                  >
                    <Heart className="text-pink-600 fill-current" size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t space-y-2">
            <button
              onClick={() => {
                if (favoritosLista.length === 0) return;
                const listado = favoritosLista
                  .map(
                    (p, i) =>
                      `${i + 1}. ${p.nombre} (${Array.isArray(p.categoria) ? p.categoria.join(", ") : p.categoria})`
                  )
                  .join("\n");
                const msg = `¡Hola! Estos son mis productos favoritos de Dulces Secretos:\n\n${listado}\n\n¿Me ayudan a cotizar y elegir los definitivos?`;
                window.open(wa(msg), "_blank");
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
              disabled={favoritosLista.length === 0}
            >
              Enviar favoritos por WhatsApp
            </button>

            <button
              onClick={() => setFavoritos(new Set())}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition disabled:opacity-50"
              disabled={favoritosLista.length === 0}
            >
              Limpiar favoritos
            </button>
          </div>
        </div>

        {/* Secciones Especiales */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Nuestras Especialidades
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tortas Personalizadas */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">🎂</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Tortas Personalizadas
                </h3>
                <p className="text-gray-600 mb-6">
                  Creamos la torta perfecta para tu ocasión especial. Elige
                  sabor, tamaño, decoración y tema.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>✨ Diseños únicos y personalizados</li>
                  <li>🎨 Múltiples técnicas de decoración</li>
                  <li>📏 Todos los tamaños disponibles</li>
                  <li>🍰 Variedad de sabores y rellenos</li>
                </ul>
                <button
                  onClick={() =>
                    handleWhatsAppOrder({
                      nombre: "Torta Personalizada",
                      categoria: "personalizada",
                      descripcion:
                        "Torta completamente personalizada según mis especificaciones",
                    })
                  }
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Cotizar Torta
                </button>
              </div>

              {/* Postres y Dulces */}
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">🧁</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Postres & Dulces
                </h3>
                <p className="text-gray-600 mb-6">
                  Deliciosos postres individuales perfectos para eventos,
                  reuniones o para consentirte.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>🧁 Cupcakes y muffins gourmet</li>
                  <li>🍮 Postres en copa e individuales</li>
                  <li>🍫 Brownies y cookies artesanales</li>
                  <li>🥧 Tartas y cheesecakes</li>
                </ul>
                <button
                  onClick={() =>
                    handleWhatsAppOrder({
                      nombre: "Postres Variados",
                      categoria: "postres",
                      descripcion:
                        "Selección de postres y dulces para mi evento",
                    })
                  }
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Ver Postres
                </button>
              </div>

              {/* Helados Tetis */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">🍦</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Helados Tetis
                </h3>
                <p className="text-gray-600 mb-6">
                  Auténticos helados tetis venezolanos, cremosos y refrescantes,
                  perfectos para cualquier momento.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>🇻🇪 Receta tradicional venezolana</li>
                  <li>🥥 Sabores naturales y únicos</li>
                  <li>❄️ Textura cremosa perfecta</li>
                  <li>📦 Disponibles por unidad o paquetes</li>
                </ul>
                <button
                  onClick={() =>
                    handleWhatsAppOrder({
                      nombre: "Helados Tetis",
                      categoria: "helados",
                      descripcion:
                        "Helados tetis tradicionales venezolanos",
                    })
                  }
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Pedir Tetis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Cómo funciona? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              ¿Cómo Funciona?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-semibold mb-3">
                  Elige tu Inspiración
                </h3>
                <p className="text-gray-600">
                  Navega por nuestro portafolio y encuentra el estilo que más te
                  guste como inspiración.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-semibold mb-3">
                  Personaliza tu Pedido
                </h3>
                <p className="text-gray-600">
                  Contáctanos por WhatsApp y cuéntanos tus preferencias: tamaño,
                  sabores, decoración y ocasión.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-semibold mb-3">
                  Recibe tu Creación
                </h3>
                <p className="text-gray-600">
                  Creamos tu producto personalizado con amor y lo entregamos en
                  la fecha acordada.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-pink-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💡 Importante
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Todos nuestros productos son{" "}
                <strong>completamente personalizados</strong>. Los precios
                varían según el tamaño, ingredientes, complejidad del diseño y
                cantidad. Contáctanos para recibir una cotización personalizada.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿Viste algo que te gustó?
            </h2>
            <p className="text-xl mb-8">
              Contáctanos ahora y creemos juntos el producto perfecto para tu
              ocasión especial.
            </p>

            <button
              onClick={() =>
                handleWhatsAppOrder({
                  nombre: "Consulta General",
                  categoria: "consulta",
                  descripcion:
                    "Me interesa conocer más sobre sus productos personalizados",
                })
              }
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle size={24} />
              Hacer Consulta
            </button>
          </div>
        </section>

        {/* Modal de Producto */}
        {productoSeleccionado && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {productoSeleccionado.nombre}
                  </h3>
                  <button
                    onClick={() => setProductoSeleccionado(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                    aria-label="Cerrar modal"
                  >
                    ×
                  </button>
                </div>

                <img
                  src={productoSeleccionado.imagen || "/placeholder.svg"}
                  alt={productoSeleccionado.nombre}
                  className="w-full object-contain max-h-[60vh] rounded-lg mb-4"
                />

                <p className="text-gray-600 mb-4">
                  {productoSeleccionado.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {productoSeleccionado.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    handleWhatsAppOrder(productoSeleccionado);
                    setProductoSeleccionado(null);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Ordenar Similar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
