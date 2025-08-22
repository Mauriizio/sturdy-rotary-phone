"use client"

import { useState } from "react"
import { MessageCircle, Filter, Heart, Eye } from "lucide-react"

export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas")
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const handleWhatsAppOrder = (producto) => {
    const phoneNumber = "56935626296" // Reemplaza con el número real
    const message = `¡Hola! Me interesa ordenar algo similar a: "${producto.nombre}" 🍰

📝 *Detalles del producto que me gustó:*
- Categoría: ${producto.categoria}
- Estilo: ${producto.descripcion}

Me gustaría cotizar algo similar. ¿Podrían ayudarme con los detalles y precios?`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

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
      ]

  const productos = [

    // Tortas para Caballero
    {
      id: 1,
      nombre: "Torta de Cumpleaños Cervecera",
      categoria: "caballeros",
      descripcion: "Torta con Cerveza Corona y Chocolates para Caballero",
      imagen: "/Tortas/caballero1.jpg",
      tags: ["Cumpleaños", "Cervezas", "Caballero"],
    },

    {
      id: 2,
      nombre: "Torta de Cumpleaños Adulto Butrercream",
      categoria: "caballeros",
      descripcion: "Torta con emote cervecero para Caballero",
      imagen: "/Tortas/caballero2.jpg",
      tags: ["Buttercream", "Cervezas", "Caballero"],
    },
    
    {
      id: 3,
      nombre: "Torta de Cumpleaños para Caballero",
      categoria: "caballeros",
      descripcion: "Torta con emote para Caballero",
      imagen: "/Tortas/caballero3.jpg",
      tags: ["Buttercream", "Caballero"],
    },

    {
      id: 4,
      nombre: "Torta Pablo Escobar y Dolares",
      categoria: "caballeros",
      descripcion: "Torta de Pablo Escobar y Dolares en Fondant",
      imagen: "/Tortas/caballero4.jpg",
      tags: ["Pablo Escobar", "Dolares", "Caballero"],
    },

    {
      id: 5,
      nombre: "Torta de Chocolate y Whiskey Jack Daniels",
      categoria: "caballeros",
      descripcion: "Torta de cumpleaños de Chocolate y Whiskey Jack Daniels",
      imagen: "/Tortas/caballero5.jpg",
      tags: ["Whiskey", "Jack Daniels", "Caballero"],
    },

    {
      id: 6,
      nombre: "Torta Whiskey Jack Daniels",
      categoria: "caballeros",
      descripcion: "Torta de Whiskey Jack Daniels",
      imagen: "/Tortas/caballero6.jpg",
      tags: ["Whiskey", "Jack Daniels", "Caballero"],
    },
    


    // Tortas Tradicionales
    {
      id: 7,
      nombre: "Torta Imposible",
      categoria: "tradicional",
      descripcion: "Torta Imposible Quesillo-Biscocho",
      imagen: "/Tortas/quesillo1.jpg",
      tags: ["Cumpleaños", "Clásica", "Fresas"],
    },
    {
      id: 8,
      nombre: "Torta Tres Leches",
      categoria: "tradicional",
      descripcion: "Deliciosa torta empapada en tres leches",
      imagen: "/Tortas/tresleches2.jpg",
      tags: ["Tres Leches", "Canela", "Tradicional"],
    },
    {
      id: 9,
      nombre: "Torta de Quesillo",
      categoria: "tradicional",
      descripcion: "Postre Quesillo Tradicional",
      imagen: "/Tortas/quesillo2.jpg",
      tags: ["Quesillo", "Tradicional", "Cream Cheese"],
    },

    // Tortas Infantil
    {
      id: 10,
      nombre: "Torta Paw Patrol",
      categoria: "infantil",
      descripcion: "Torta temática Paw Patrol",
      imagen: "/Tortas/infantil3.jpg",
      tags: ["Plin Plin", "Infantil"],
    },
    {
      id: 11,
      nombre: "Torta Payasito Plin Plin",
      categoria: "infantil",
      descripcion: "Torta temática Payasito Plin Plin",
      imagen: "/Tortas/infantil11.jpg",
      tags: ["Plin Plin", "Infantil"],
    },

    {
      id: 12,
      nombre: "Torta Dragon Ball",
      categoria: "infantil",
      descripcion: "Torta de Dragon Ball Chocolate",
      imagen: "/Tortas/infantil12.jpg",
      tags: ["Dragon Ball", "Chocolate", "Infantil"],
    },

    {
      id: 13,
      nombre: "Torta Dragon Ball 2",
      categoria: "infantil",
      descripcion: "Torta de Dragon Ball Chantilly",
      imagen: "/Tortas/infantil1.jpg",
      tags: [ "DragonBall", "Infantil"],
    },

    {
      id: 14,
      nombre: "Torta Cumpleaños Infantil",
      categoria: "infantil",
      descripcion: "Torta de niña Chantilly",
      imagen: "/Tortas/infantil13.jpg",
      tags: [ "Cumpleaños", "Infantil"],
    },

    {
      id: 15,
      nombre: "Torta niña Minnie Mouse",
      categoria: "infantil",
      descripcion: "Torta de niña Minni Mouse",
      imagen: "/Tortas/infantil14.jpg",
      tags: [ "Cumpleaños", "Infantil"],
    },

    {
      id: 16,
      nombre: "Torta infantil Buttercream",
      categoria: "infantil",
      descripcion: "Torta de cumpleaños infantil",
      imagen: "/Tortas/infantil15.jpg",
      tags: [ "Cumpleaños", "Infantil"],
    },

    {
      id: 17,
      nombre: "Torta infantil Leo el Camion",
      categoria: "infantil",
      descripcion: "Torta de cumpleaños infantil de Leo el Camion",
      imagen: "/Tortas/infantil16.jpg",
      tags: [ "Cumpleaños", "Leo el Camion", "Infantil"],
    },

    {
      id: 18,
      nombre: "Torta infantil Hakuna Matata",
      categoria: "infantil",
      descripcion: "Torta infantil Hakuna Matata",
      imagen: "/Tortas/infantil17.jpg",
      tags: [ "Cumpleaños", "Hakuna Matata", "Infantil"],
    },

    {
      id: 19,
      nombre: "Torta infantil de Futbol",
      categoria: "infantil",
      descripcion: "Torta infantil tematica Futbol",
      imagen: "/Tortas/infantil18.jpg",
      tags: [ "Cumpleaños", "Futbol", "Infantil"],
    },

    {
      id: 20,
      nombre: "Torta de Masha y el Oso",
      categoria: "infantil",
      descripcion: "Torta infantil tematica Masha y el Oso",
      imagen: "/Tortas/infantil19.jpg",
      tags: [ "Cumpleaños", "Masha y el Oso", "Infantil"],
    },

     {
      id: 21,
      nombre: "Torta de Futbol 2",
      categoria: "infantil",
      descripcion: "Torta infantil tematica de Futbol",
      imagen: "/Tortas/infantil20.jpg",
      tags: [ "Cumpleaños", "Futbol", "Infantil"],
    },

    {
      id: 22,
      nombre: "Torta de One Piece Chantilly",
      categoria: "infantil",
      descripcion: "Torta de Chantilly Tematica One Piece",
      imagen: "/Tortas/infantil2.jpg",
      tags: ["Chantilly", "Infantil", "One Piece"],
    },

    {
      id: 23,
      nombre: "Torta de Gato con Botas",
      categoria: "infantil",
      descripcion: "Torta del Gato con botas",
      imagen: "/Tortas/infantil21.jpg",
      tags: ["Chantilly", "Infantil", "Gato con Botas"],
    },

    {
      id: 24,
      nombre: "Torta de Stitch",
      categoria: "infantil",
      descripcion: "Torta infantil de Stitch",
      imagen: "/Tortas/infantil22.jpg",
      tags: ["Infantil", "Stitch"],
    },
    {
      id: 25,
      nombre: "Torta de Corazon Hello Kitty",
      categoria: "infantil",
      descripcion: "Torta infantil de Hello Kitty",
      imagen: "/Tortas/infantil23.jpg",
      tags: ["Infantil", "Hello Kitty"],
    },
    {
      id: 26,
      nombre: "Torta Granja de Zenon",
      categoria: "infantil",
      descripcion: "Torta Granja de Zenon Chantilly",
      imagen: "/Tortas/infantil4.jpg",
      tags: ["Chantilly", "Infantil", "Granja Zenon"],
    },

     {
      id: 27,
      nombre: "Torta 44 Cats",
      categoria: "infantil",
      descripcion: "Torta diseño 44 Cats",
      imagen: "/Tortas/infantil5.jpg",
      tags: ["Chantilly", "Infantil", "44 Cats"],
    },

    {
      id: 28,
      nombre: "Torta Stranger Things",
      categoria: "infantil",
      descripcion: "Torta diseño Stranger Things",
      imagen: "/Tortas/infantil7.jpg",
      tags: [ "Infantil", "Stranger Things"],
    },

    {
      id: 29,
      nombre: "Torta Lol Surprise",
      categoria: "infantil",
      descripcion: "Torta diseño Lol Surprise",
      imagen: "/Tortas/infantil9.jpg",
      tags: ["Fondant", "Infantil", "Lol Surprise"],
    },

    {
      id: 30,
      nombre: "Torta Pokemon Fondant",
      categoria: ["infantil", "fondant"],
      descripcion: "Torta diseño Pokemon",
      imagen: "/Tortas/infantil10.jpg",
      tags: [ "Infantil", "Pokemon"],
    },
    

    // Tortas Buttercream
    {
      id: 31,
      nombre: "Torta Feliz Aniversario",
      categoria: "buttercream",
      descripcion: "Torta Buttercream Aniversario",
      imagen: "/Tortas/aniversario1.jpg",
      tags: ["Buttercream", "Aniversario"],
    },
    {
      id: 32,
      nombre: "Torta Corazon Buttercream",
      categoria: "buttercream",
      descripcion: "Torta Corazon Buttercream",
      imagen: "/Tortas/corazon1.jpg",
      tags: ["Buttercream", "Corazon"],
    },
    {
      id: 33,
      nombre: "Pucca Buttercream",
      categoria: "buttercream",
      descripcion: "Torta Pucca Buttercream deliciosa",
      imagen: "/Tortas/buttercream3.png",
      tags: ["Buttercream", "Pucca"],
    },

    // Chocolates
    {
      id: 34,
      nombre: "Torta Chocolate Cumpleaños",
      categoria: "chocolate",
      descripcion: "Torta Garnache Chocolate  Cumpleaños",
      imagen: "/Tortas/chocolate1.png",
      tags: ["Garnache", "Chocolate", "Cumpleaños"],
    },
     {
      id: 35,
      nombre: "Torta Chocolate Oreo",
      categoria: "chocolate",
      descripcion: "Torta de Chocolate  con galleta oreo",
      imagen: "/Tortas/chocolate2.png",
      tags: ["Oreo", "Chocolate"],
    },
    {
      id: 36,
      nombre: "Torta Harry Potter Chocolate",
      categoria: "chocolate",
      descripcion: "Torta inspirada en Harry Potter garnache de chocolate",
      imagen: "/Tortas/chocolate3.png",
      tags: ["Harry Potter", "Chocolate"],
    },



    //Chantilly

     {
      id: 37,
      nombre: "Torta de Chantilly Paw Patrol",
      categoria: "chantilly",
      descripcion: "Torta inspirada en Paw Patrol de Chantilly",
      imagen: "/Tortas/chantilly1.png",
      tags: ["Paw Patrol", "Chantilly"],
    },
    {
      id: 38,
      nombre: "Torta de Chantilly Tropical",
      categoria: "chantilly",
      descripcion: "Torta tematica tropical de Chantilly",
      imagen: "/Tortas/chantilly2.jpg",
      tags: ["Tropical", "Chantilly"],
    },

    // Tortas Fondant
    {
      id: 39,
      nombre: "Happy Birthday Princesa Fondant ",
      categoria: "fondant",
      descripcion: "Torta de cumpleaños con fondant, corona y decoraciones elegantes",
      imagen: "/Tortas/fondant1.jpg",
      tags: ["Princesa", "Cumpleaños", "Fondant"],
    },
    {
      id: 40,
      nombre: "Jordan Fondant ",
      categoria: "fondant",
      descripcion: "Torta de cumpleaños con fondant tematica de Jordan",
      imagen: "/Tortas/fondant2.jpg",
      tags: ["Jordan", "Cumpleaños", "Fondant"],
    },


    // Postres
    {
      id: 41,
      nombre: "Marquesanas Variadas",
      categoria: "postres",
      descripcion: "Cremosas Marquesanas variadas con distintos sabores",
      imagen: "/Tortas/postres.jpg",
      tags: ["Marquesanas", "Cremosas"],
    },
    {
      id: 42,
      nombre: "Arreglo de Brownies Gourmet",
      categoria: "postres",
      descripcion: "Auténticas delicias de chocolate para compartir",
      imagen: "/Tortas/postres2.jpg",
      tags: ["Chocolate", "Postres"],
    },
    {
      id: 43,
      nombre: "Bizcocho mas Bombones 27th ",
      categoria: "postres",
      descripcion: "Delicado arreglo para cumpleaños de chocolate",
      imagen: "/Tortas/postres3.jpg",
      tags: ["Cumpleaños", "Postre", "Ligero"],
    },


    
    // Helados
    {
      id: 44,
      nombre: "Tetis Tradicionales Venezolanas",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de variados sabores",
      imagen: "/Tortas/helados.jpg",
      tags: ["Tetis", "Tradicional", "Venezolano"],
    },
    {
      id: 45,
      nombre: "Tetis de Coco",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Coco",
      imagen: "/Tortas/helados1.jpg",
      tags: ["Tetis", "Coco", "Venezolano"],
    },
    {
      id: 46,
      nombre: "Tetis de Galleta Maria",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Galleta Maria",
      imagen: "/Tortas/helados3.jpg",
      tags: ["Tetis", "Galleta", "Venezolano"],
    },
    {
      id: 47,
      nombre: "Tetis de Choco - Manjar",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Chocolate y Manjar",
      imagen: "/Tortas/helados4.jpg",
      tags: ["Tetis", "Choco-Manjar", "Venezolano"],
    },
    {
      id: 48,
      nombre: "Tetis de Choco - Maní",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Chocolate y Maní",
      imagen: "/Tortas/helados5.jpg",
      tags: ["Tetis", "Choco-Maní", "Venezolano"],
    },

    {
      id: 49,
      nombre: "Tetis de Fresas",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Fresa",
      imagen: "/Tortas/helados6.jpg",
      tags: ["Tetis", "Fresa", "Venezolano"],
    },

    {
      id: 50,
      nombre: "Tetis de Ron con Pasas",
      categoria: "helados",
      descripcion: "Tradicionales tetis venezolanas de Ron con Pasas",
      imagen: "/Tortas/helados7.jpg",
      tags: ["Tetis", "Ron con Pasas", "Venezolano"],
    },
    
  ]

  const productosFiltrados =
    categoriaActiva === "todas" ? productos : productos.filter((p) => p.categoria === categoriaActiva)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[url(/Tortas/bg-1.jpg)] bg-cover bg-[position] bg-bottom from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Descubre nuestro portafolio de creaciones únicas. Cada producto es personalizado según tus gustos, tamaño y
            ocasión especial.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-lg">
              💡 <strong>Productos Personalizados:</strong> Todos nuestros productos se adaptan a tus necesidades
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categorías */}
<section className="py-3 px-4 bg-white shadow-sm sticky top-0 z-10">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-3">
      <Filter className="text-gray-600" size={18} />
      <h3 className="text-base font-semibold text-gray-800">Filtrar por categoría:</h3>
    </div>

    {/* carrusel horizontal, texto reducido en móvil */}
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


      {/* Galería de Productos */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {categoriaActiva === "todas"
                ? "Todos Nuestros Productos"
                : `${categorias.find((c) => c.id === categoriaActiva)?.emoji} ${
                    categorias.find((c) => c.id === categoriaActiva)?.nombre
                  }`}
            </h2>
            <p className="text-xl text-gray-600">
              Mostrando {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Imagen del producto */}
                <div className="relative overflow-hidden">
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setProductoSeleccionado(producto)}
                      className="bg-white text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-gray-100"
                    >
                      <Eye size={16} />
                      Ver Detalles
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="text-pink-600" size={16} />
                    </button>
                  </div>
                </div>

                {/* Información del producto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{producto.descripcion}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {producto.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botón de contacto */}
                  <button
                    onClick={() => handleWhatsAppOrder(producto)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Ordenar Similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones Especiales */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestras Especialidades</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tortas Personalizadas */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-6xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tortas Personalizadas</h3>
              <p className="text-gray-600 mb-6">
                Creamos la torta perfecta para tu ocasión especial. Elige sabor, tamaño, decoración y tema.
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
                    descripcion: "Torta completamente personalizada según mis especificaciones",
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Postres & Dulces</h3>
              <p className="text-gray-600 mb-6">
                Deliciosos postres individuales perfectos para eventos, reuniones o para consentirte.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>🧁 Cupcakes y muffins gourmet</li>
                <li>🍮 Postres en copa y individuales</li>
                <li>🍫 Brownies y cookies artesanales</li>
                <li>🥧 Tartas y cheesecakes</li>
              </ul>
              <button
                onClick={() =>
                  handleWhatsAppOrder({
                    nombre: "Postres Variados",
                    categoria: "postres",
                    descripcion: "Selección de postres y dulces para mi evento",
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Helados Tetis</h3>
              <p className="text-gray-600 mb-6">
                Auténticos helados tetis venezolanos, cremosos y refrescantes, perfectos para cualquier momento.
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
                    descripcion: "Helados tetis tradicionales venezolanos",
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

      {/* Información Importante */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">¿Cómo Funciona?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Elige tu Inspiración</h3>
              <p className="text-gray-600">
                Navega por nuestro portafolio y encuentra el estilo que más te guste como inspiración.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Personaliza tu Pedido</h3>
              <p className="text-gray-600">
                Contáctanos por WhatsApp y cuéntanos tus preferencias: tamaño, sabores, decoración y ocasión.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Recibe tu Creación</h3>
              <p className="text-gray-600">
                Creamos tu producto personalizado con amor y lo entregamos en la fecha acordada.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-pink-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Importante</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Todos nuestros productos son <strong>completamente personalizados</strong>. Los precios varían según el
              tamaño, ingredientes, complejidad del diseño y cantidad. Contáctanos para recibir una cotización
              personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Viste algo que te gustó?</h2>
          <p className="text-xl mb-8">
            Contáctanos ahora y creemos juntos el producto perfecto para tu ocasión especial
          </p>

          <button
            onClick={() =>
              handleWhatsAppOrder({
                nombre: "Consulta General",
                categoria: "consulta",
                descripcion: "Me interesa conocer más sobre sus productos personalizados",
              })
            }
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle size={24} />
            Hacer Consulta
          </button>
        </div>
      </section>

      {/* Modal de Producto (opcional) */}
      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{productoSeleccionado.nombre}</h3>
                <button
                  onClick={() => setProductoSeleccionado(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={productoSeleccionado.imagen || "/placeholder.svg"}
                alt={productoSeleccionado.nombre}
                className="w-full object-contain max-h-[60vh] rounded-lg mb-4"
              />

              <p className="text-gray-600 mb-4">{productoSeleccionado.descripcion}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {productoSeleccionado.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  handleWhatsAppOrder(productoSeleccionado)
                  setProductoSeleccionado(null)
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
  )
}
