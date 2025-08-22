"use client";

import {
  Download,
  Clock,
  Users,
  Star,
  CheckCircle,
  BookOpen,
  Award,
  MessageCircle,
} from "lucide-react";
import { wa, BUSINESS } from "../config.js";

export default function Cursos() {
  // ---------- Helpers ----------
  const cleanPrice = (str) => Number.parseInt(String(str).replace(/[$.\s]/g, ""), 10) || 0;
  const toCLP = (n) =>
    n.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

  const cursos = [
    {
      id: 1,
      titulo: "Repostería Básica para Principiantes",
      descripcion:
        "Aprende los fundamentos de la repostería desde cero. Perfecto para comenzar tu aventura en el mundo de los postres.",
      precio: "$29.900",
      precioOriginal: "$45.000",
      nivel: "Principiante",
      duracion: "4–6 horas",
      estudiantes: "500+",
      rating: 4.9,
      imagen: "/placeholder.svg?height=300&width=400",
      contenido: [
        "Ingredientes básicos y sus funciones",
        "Técnicas fundamentales de mezclado",
        "5 recetas de tortas clásicas",
        "Decoración básica con crema",
        "Tips para horneado perfecto",
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
      duracion: "6–8 horas",
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
        "Convierte tu pasión en un negocio exitoso. Aprende costos, marketing, ventas y gestión de una repostería.",
      precio: "$49.900",
      precioOriginal: "$75.000",
      nivel: "Avanzado",
      duracion: "8–10 horas",
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
  ];

  // ---------- JSON-LD (se emiten en 2 scripts separados) ----------
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BUSINESS.site}/` },
      { "@type": "ListItem", position: 2, name: "Cursos", item: `${BUSINESS.site}/cursos` },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: cursos.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BUSINESS.site}/cursos#curso-${c.id}`,
      item: {
        "@type": "Course",
        name: c.titulo,
        description: c.descripcion,
        provider: {
          "@type": "Organization",
          name: BUSINESS.name,
          sameAs: BUSINESS.site,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CLP",
          price: cleanPrice(c.precio),
          url: `${BUSINESS.site}/cursos#curso-${c.id}`,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  // ---------- SEO (React 19 Document Metadata) ----------
  const SEO = (
    <>
      <title>Cursos de Repostería | Dulces Secretos — Aprende desde La Florida, Santiago</title>
      <meta
        name="description"
        content="Cursos en PDF de repostería: técnicas profesionales, recetas y soporte por WhatsApp. Descarga inmediata. Aprende con Dulces Secretos en La Florida, Santiago."
      />
      <link rel="canonical" href="https://dulcessecretos.online/cursos" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dulces Secretos" />
      <meta property="og:locale" content="es_CL" />
      <meta
        property="og:title"
        content="Cursos de Repostería | Dulces Secretos — Aprende desde La Florida, Santiago"
      />
      <meta
        property="og:description"
        content="Cursos en PDF con técnicas profesionales, recetas y soporte. Descarga inmediata."
      />
      <meta property="og:url" content="https://dulcessecretos.online/cursos" />
      <meta property="og:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
      <meta property="og:image:alt" content="Cursos de repostería — Dulces Secretos" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Cursos de Repostería | Dulces Secretos — Aprende desde La Florida, Santiago"
      />
      <meta
        name="twitter:description"
        content="Aprende repostería profesional con nuestros cursos en PDF. Descarga inmediata y soporte por WhatsApp."
      />
      <meta name="twitter:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
      {/* JSON-LD en dos bloques (más seguro) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
    </>
  );

  const handleWhatsAppClick = (curso) => {
    const message = `¡Hola! Me interesa el curso "${curso}" 📚. ¿Podrían darme más información sobre el pago y la descarga?`;
    window.open(wa(message), "_blank");
  };

  return (
    <>
      {SEO}

      <div className="min-h-screen bg-gray-50">
        {/* Hero (simplificado, sin class arbitraria conflictiva) */}
        <section className="relative text-white py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cursos de Repostería 📚</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Aprende repostería profesional desde casa con nuestros cursos en PDF. Técnicas probadas, recetas
              exclusivas y soporte personalizado.
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

        {/* Cursos */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Nuestros Cursos Disponibles
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Elige el curso perfecto para tu nivel y objetivos
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {cursos.map((curso) => {
                const ahorro = cleanPrice(curso.precioOriginal) - cleanPrice(curso.precio);
                return (
                  <article
                    id={`curso-${curso.id}`}
                    key={curso.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Imagen */}
                    <div className="relative">
                      <img
                        src={curso.imagen || "/placeholder.svg"}
                        alt={`Portada del curso: ${curso.titulo}`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ¡Oferta!
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{curso.titulo}</h3>
                        <p className="text-gray-600 text-sm mb-3">{curso.descripcion}</p>

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
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`${
                                  i < Math.floor(curso.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                                size={16}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <span
                            className="text-sm text-gray-600"
                            aria-label={`Calificación ${curso.rating} de 5`}
                          >
                            ({curso.rating})
                          </span>
                        </div>
                      </header>

                      {/* ¿Qué aprenderás? */}
                      <section className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">¿Qué aprenderás?</h4>
                        <ul className="space-y-2">
                          {curso.contenido.slice(0, 4).map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                              <span>{item}</span>
                            </li>
                          ))}
                          {curso.contenido.length > 4 && (
                            <li className="text-sm text-gray-500 italic">
                              +{curso.contenido.length - 4} temas más...
                            </li>
                          )}
                        </ul>
                      </section>

                      {/* Incluye */}
                      <section className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                        <ul className="space-y-1">
                          {curso.beneficios.map((beneficio, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="text-blue-500" size={14} />
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Precio */}
                      <footer className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-gray-800">
                              {toCLP(cleanPrice(curso.precio))}
                            </span>
                            <span className="text-lg text-gray-500 line-through ml-2">
                              {toCLP(cleanPrice(curso.precioOriginal))}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-green-600 font-semibold">
                              Ahorra {toCLP(ahorro)}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleWhatsAppClick(curso.titulo)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                          aria-label={`Comprar el curso ${curso.titulo} por WhatsApp`}
                        >
                          <MessageCircle size={20} />
                          Comprar por WhatsApp
                        </button>
                      </footer>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beneficios Generales */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              ¿Por qué elegir nuestros cursos?
            </h2>

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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Lo que dicen nuestros estudiantes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  nombre: "Laura Pérez",
                  curso: "Repostería Básica",
                  comentario:
                    "Excelente curso, muy bien explicado. Ahora hago tortas increíbles para mi familia.",
                  rating: 5,
                },
                {
                  nombre: "Miguel Torres",
                  curso: "Negocio de Repostería",
                  comentario:
                    "Gracias a este curso pude abrir mi propia repostería. ¡Muy recomendado!",
                  rating: 5,
                },
                {
                  nombre: "Carmen Silva",
                  curso: "Cupcakes Profesionales",
                  comentario:
                    "Las técnicas son fantásticas. Mis cupcakes ahora lucen como de pastelería.",
                  rating: 5,
                },
              ].map((t, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-4" aria-label={`Calificación ${t.rating} de 5`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{t.comentario}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{t.nombre}</p>
                    <p className="text-sm text-gray-500">Curso: {t.curso}</p>
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
            <p className="text-xl mb-8">
              Únete a más de 1000 estudiantes que ya están creando postres increíbles
            </p>

            <button
              onClick={() => handleWhatsAppClick("información sobre todos los cursos")}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
              aria-label="Consultar por WhatsApp todos los cursos"
            >
              <MessageCircle size={24} />
              Consultar por WhatsApp
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
