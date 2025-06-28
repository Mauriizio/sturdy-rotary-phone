"use client"

import { Download, Clock, Users, Star, CheckCircle, BookOpen, Award, MessageCircle } from "lucide-react"

export default function Cursos() {
  const handleWhatsAppClick = (curso) => {
    const phoneNumber = "573001234567" // Reemplaza con el número real
    const message = `¡Hola! Me interesa el curso "${curso}" 📚. ¿Podrías darme más información sobre el pago y descarga?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const cursos = [
    {
      id: 1,
      titulo: "Repostería Básica para Principiantes",
      descripcion:
        "Aprende los fundamentos de la repostería desde cero. Perfecto para quienes están comenzando su aventura en el mundo de los postres.",
      precio: "$29.900",
      precioOriginal: "$45.000",
      nivel: "Principiante",
      duracion: "4-6 horas",
      estudiantes: "500+",
      rating: 4.9,
      imagen: "/placeholder.svg?height=300&width=400",
      contenido: [
        "Ingredientes básicos y sus funciones",
        "Técnicas fundamentales de mezclado",
        "5 recetas de tortas clásicas",
        "Decoración básica con crema",
        "Tips para hornear perfectamente",
        "Solución de problemas comunes",
      ],
      beneficios: [
        "PDF de 80 páginas con ilustraciones",
        "Videos explicativos incluidos",
        "Lista de compras organizada",
        "Soporte por WhatsApp 30 días",
      ],
    },
    {
      id: 2,
      titulo: "Cupcakes y Muffins Profesionales",
      descripcion:
        "Domina el arte de los cupcakes y muffins con técnicas profesionales. Incluye decoración avanzada y sabores únicos.",
      precio: "$39.900",
      precioOriginal: "$55.000",
      nivel: "Intermedio",
      duracion: "6-8 horas",
      estudiantes: "350+",
      rating: 4.8,
      imagen: "/placeholder.svg?height=300&width=400",
      contenido: [
        "15 recetas de cupcakes gourmet",
        "10 recetas de muffins especiales",
        "Técnicas de decoración avanzada",
        "Buttercream y ganaches perfectos",
        "Fondant y modelado básico",
        "Packaging y presentación profesional",
      ],
      beneficios: [
        "PDF de 120 páginas a todo color",
        "Plantillas para decoración",
        "Calculadora de costos incluida",
        "Grupo privado de estudiantes",
      ],
    },
    {
      id: 3,
      titulo: "Negocio de Repostería Rentable",
      descripcion:
        "Convierte tu pasión en un negocio exitoso. Aprende todo sobre costos, marketing, ventas y gestión de una repostería.",
      precio: "$49.900",
      precioOriginal: "$75.000",
      nivel: "Avanzado",
      duracion: "8-10 horas",
      estudiantes: "200+",
      rating: 5.0,
      imagen: "/placeholder.svg?height=300&width=400",
      contenido: [
        "Plan de negocio para repostería",
        "Cálculo de costos y precios",
        "Marketing digital para reposteros",
        "Gestión de pedidos y clientes",
        "Aspectos legales y sanitarios",
        "Escalamiento del negocio",
      ],
      beneficios: [
        "PDF de 150 páginas + plantillas",
        "Hojas de cálculo para costos",
        "Templates para redes sociales",
        "Mentoría grupal mensual",
      ],
    },
  ]

  const testimonios = [
    {
      nombre: "Laura Pérez",
      curso: "Repostería Básica",
      comentario: "Excelente curso, muy bien explicado. Ahora hago tortas increíbles para mi familia.",
      rating: 5,
    },
    {
      nombre: "Miguel Torres",
      curso: "Negocio de Repostería",
      comentario: "Gracias a este curso pude abrir mi propia repostería. ¡Muy recomendado!",
      rating: 5,
    },
    {
      nombre: "Carmen Silva",
      curso: "Cupcakes Profesionales",
      comentario: "Las técnicas son fantásticas. Mis cupcakes ahora lucen como de pastelería.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cursos de Repostería 📚</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Aprende repostería profesional desde casa con nuestros cursos en PDF. Técnicas probadas, recetas exclusivas
            y soporte personalizado.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <Download className="text-yellow-300" size={24} />
              <span>Descarga Inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-yellow-300" size={24} />
              <span>1000+ Estudiantes</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-yellow-300" size={24} />
              <span>Certificado Incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Nuestros Cursos Disponibles</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Elige el curso perfecto para tu nivel y objetivos</p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {cursos.map((curso) => (
              <div
                key={curso.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen del curso */}
                <div className="relative">
                  <img
                    src={curso.imagen || "/placeholder.svg"}
                    alt={curso.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ¡Oferta!
                  </div>
                </div>

                <div className="p-6">
                  {/* Header del curso */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{curso.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-3">{curso.descripcion}</p>

                    {/* Información del curso */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen size={16} />
                        <span>{curso.nivel}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{curso.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{curso.estudiantes}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${i < Math.floor(curso.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            size={16}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({curso.rating})</span>
                    </div>
                  </div>

                  {/* Contenido del curso */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">¿Qué aprenderás?</h4>
                    <ul className="space-y-2">
                      {curso.contenido.slice(0, 4).map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                      {curso.contenido.length > 4 && (
                        <li className="text-sm text-gray-500 italic">+{curso.contenido.length - 4} temas más...</li>
                      )}
                    </ul>
                  </div>

                  {/* Beneficios */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                    <ul className="space-y-1">
                      {curso.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-blue-500" size={14} />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Precio y botón */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-800">{curso.precio}</span>
                        <span className="text-lg text-gray-500 line-through ml-2">{curso.precioOriginal}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-semibold">
                          Ahorra{" "}
                          {Number.parseInt(curso.precioOriginal.replace(/[$.]/g, "")) -
                            Number.parseInt(curso.precio.replace(/[$.]/g, ""))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsAppClick(curso.titulo)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      Comprar por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Generales */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">¿Por qué elegir nuestros cursos?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceso Inmediato</h3>
              <p className="text-gray-600">Descarga tu curso al instante después del pago</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contenido Premium</h3>
              <p className="text-gray-600">PDFs detallados con ilustraciones y técnicas profesionales</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte Incluido</h3>
              <p className="text-gray-600">Resolvemos tus dudas por WhatsApp</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantía Total</h3>
              <p className="text-gray-600">30 días de garantía o te devolvemos tu dinero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros estudiantes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonio.comentario}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonio.nombre}</p>
                  <p className="text-sm text-gray-500">Curso: {testimonio.curso}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar tu aprendizaje?</h2>
          <p className="text-xl mb-8">Únete a más de 1000 estudiantes que ya están creando postres increíbles</p>

          <button
            onClick={() => handleWhatsAppClick("información sobre todos los cursos")}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle size={24} />
            Consultar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  )
}
