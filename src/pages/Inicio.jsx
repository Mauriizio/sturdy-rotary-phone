"use client"

import { Link } from "react-router-dom"
import { ShoppingBag, MessageCircle, Star, Clock, Award, Heart } from "lucide-react"

export default function Inicio() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56935626296" // Reemplaza con el número real
    const message = "¡Hola! Me interesa conocer más sobre sus deliciosos productos 🍰"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const productosDestacados = [
    {
      nombre: "Torta de Chocolate",
      descripcion: "Deliciosa torta de chocolate con ganache",
      precio: "$45.000",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      nombre: "Cupcakes Variados",
      descripcion: "Set de 6 cupcakes con diferentes sabores",
      precio: "$25.000",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      nombre: "Cheesecake de Frutos Rojos",
      descripcion: "Cremoso cheesecake con frutos rojos frescos",
      precio: "$38.000",
      imagen: "/placeholder.svg?height=200&width=200",
    },
  ]

  const testimonios = [
    {
      nombre: "María González",
      comentario: "¡Los mejores postres de la ciudad! Siempre frescos y deliciosos.",
      rating: 5,
    },
    {
      nombre: "Carlos Rodríguez",
      comentario: "Excelente servicio y calidad. Mis hijos aman sus cupcakes.",
      rating: 5,
    },
    {
      nombre: "Ana Martínez",
      comentario: "Perfectos para cualquier celebración. Muy recomendados.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Ajustes responsivos de imagen y contenido */}

<section
  className="
    relative
    min-h-screen
    py-20 px-4
    overflow-hidden
    flex items-center justify-center
  "
>
  {/* Imagen PNG como fondo */}
  <div
    className="
      absolute inset-0
      bg-[url('/fondomailyn.png')]
      bg-no-repeat
      bg-[length:140%] sm:bg-[length:auto]
      bg-left sm:bg-center
      sm:bg-[position:center_-600px]
      z-10
      transition-all duration-300
    "
  ></div>

  {/* Capa de fondo degradado detrás del PNG */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200
      z-0
    "
  ></div>

  <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center gap-6 sm:gap-8">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 max-w-md sm:max-w-none mx-auto">
      <span className="text-pink-600">Dulces </span>
      <span className="text-pink-600">Secretos</span>
    </h1>

    <p className="text-base sm:text-xl text-back px-4 max-w-sm sm:max-w-2xl font-extrabold">
      Endulzamos tus momentos con amor y los mejores ingredientes.
    </p>

    {/* Botones de Llamada a la Acción */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        to="/productos"
        className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg"
      >
        <ShoppingBag size={24} />
        Ver Nuestros Productos
      </Link>

      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg"
      >
        <MessageCircle size={24} />
        Contactar por WhatsApp
      </button>
    </div>
  </div>
</section>



      {/* Productos Destacados */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Productos Destacados</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {productosDestacados.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h3>
                  <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-600">{producto.precio}</span>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      Pedir Ahora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 inline-block"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                En Dulces Secretos, cada postre cuenta una historia de pasión y dedicación. Desde hace más de 10 años,
                hemos estado endulzando los momentos especiales de nuestros clientes con recetas tradicionales y
                creaciones innovadoras.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Utilizamos solo los mejores ingredientes y técnicas artesanales para garantizar que cada bocado sea una
                experiencia inolvidable.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="mx-auto mb-2 text-pink-600" size={32} />
                  <p className="font-semibold">10+ Años</p>
                  <p className="text-sm text-gray-600">de Experiencia</p>
                </div>
                <div className="text-center">
                  <Award className="mx-auto mb-2 text-pink-600" size={32} />
                  <p className="font-semibold">100%</p>
                  <p className="text-sm text-gray-600">Artesanal</p>
                </div>
                <div className="text-center">
                  <Heart className="mx-auto mb-2 text-pink-600" size={32} />
                  <p className="font-semibold">500+</p>
                  <p className="text-sm text-gray-600">Clientes Felices</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Nuestra repostería"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo que Dicen Nuestros Clientes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonio.comentario}"</p>
                <p className="font-semibold text-gray-800">- {testimonio.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción Final */}
      <section className="py-16 px-4 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Endulzar tu Día?</h2>
          <p className="text-xl mb-8">
            Contáctanos ahora y descubre por qué somos la repostería favorita de la ciudad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 justify-center"
            >
              <MessageCircle size={24} />
              Hacer Pedido por WhatsApp
            </button>

            <Link
              to="/contacto"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 justify-center"
            >
              Ver Información de Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
