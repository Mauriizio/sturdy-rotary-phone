"use client";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  MessageCircle,
  Star,
  Clock,
  Award,
  Heart,
} from "lucide-react";
import { wa } from "../config";

export default function Inicio() {
  // --- Document Metadata (SEO) ---
  const SEO = (
    <>
      <title>Dulces Secretos | Tortas personalizadas en La Florida, Santiago</title>
      <meta
        name="description"
        content="Repostería artesanal en La Florida, Santiago: tortas personalizadas, cupcakes y postres. Pedidos por WhatsApp +56 9 3562 6296. Atención personalizada."
      />
      <link rel="canonical" href="https://dulcessecretos.online/" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dulces Secretos" />
      <meta property="og:locale" content="es_CL" />
      <meta
        property="og:title"
        content="Dulces Secretos | Tortas personalizadas en La Florida, Santiago"
      />
      <meta
        property="og:description"
        content="Tortas personalizadas, cupcakes y postres artesanales en La Florida, Santiago. Pedidos por WhatsApp."
      />
      <meta property="og:url" content="https://dulcessecretos.online/" />
      <meta property="og:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
      <meta property="og:image:alt" content="Tortas y postres de Dulces Secretos" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Dulces Secretos | Tortas personalizadas en La Florida, Santiago"
      />
      <meta
        name="twitter:description"
        content="Repostería artesanal: tortas personalizadas, cupcakes y postres. Pide por WhatsApp."
      />
      <meta name="twitter:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
    </>
  );

  // --- Keyframes para gradiente animado (no requiere tocar Tailwind) ---
  const GradientCSS = (
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
  );

  // --- Autoplay/pause del video según visibilidad ---
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play();
        else video.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesa conocer más sobre sus deliciosos productos 🍰";
    window.open(wa(message), "_blank");
  };

  const productosDestacados = [
    {
      nombre: "Torta de Chocolate",
      descripcion: "Deliciosa torta de chocolate con ganache",
      imagen: "/Tortas/chocolate1.png",
    },
    {
      nombre: "Buttercream",
      descripcion: "Deliciosa ButterCream Personalizada",
      imagen: "/Tortas/buttercream1.png",
    },
    {
      nombre: "Torta Tres Leches",
      descripcion: "Torta Tres Leches Personalizada",
      imagen: "/Tortas/tresleches1.png",
    },
    {
      nombre: "Crema Chantilly",
      descripcion: "Torta de Crema Chantilly Paw Patrol",
      imagen: "/Tortas/chantilly1.png",
    },
    {
      nombre: "Fondant",
      descripcion: "Torta cubierta de fondant Happy Birthday Queen",
      imagen: "/Tortas/fondant1.jpg",
    },
    {
      nombre: "Piña Volteada",
      descripcion: "Torta de Piña Volteada",
      imagen: "/Tortas/piña1.png",
    },
  ];

  const testimonios = [
    {
      nombre: "Daniela Cortes",
      comentario:
        "Cada cumpleaños de mi hijo mando hacer su torta y postres con Dulces Secretos. ¡Son las mejores!",
      rating: 5,
    },
    {
      nombre: "Laura Pabon",
      comentario: "Excelente servicio y calidad. Mis hijos aman sus cupcakes.",
      rating: 5,
    },
    {
      nombre: "Ana Martínez",
      comentario: "Perfectos para cualquier celebración. Muy recomendados.",
      rating: 5,
    },
  ];

  return (
    <>
      {SEO}
      {GradientCSS}

      <div className="min-h-screen">
        {/* PORTADA */}
        <section
          className="
            relative
            min-h-[80vh]
            sm:min-h-[90vh]
            md:min-h-[80vh]
            lg:min-h-[70vh]
            xl:min-h-[80vh]
            2xl:min-h-[95vh]
            py-20 px-4
            overflow-hidden
            flex items-center justify-center
          "
        >
          {/* PNG principal */}
          <div
            className="
              absolute inset-0
              bg-[url('/fondomailyn.png')]
              bg-no-repeat
              bg-[length:110%] 
              sm:bg-[length:80%]
              md:bg-[length:90%]
              lg:bg-[65%]
              xl:bg-[50%]
              2xl:bg-[50%]
              bg-bottom 
              sm:bg-center
              sm:bg-[position:center-600px]
              z-10
              transition-all duration-300
            "
          />
          {/* Gradiente animado “más movido” */}
          <div
            className="
              absolute inset-0
              z-0
              bg-[length:200%_200%]
              bg-[radial-gradient(120%_120%_at_0%_0%,_#fde2e7_0%,_#fbcfe8_35%,_#f5d0fe_60%,_#e9d5ff_85%),_radial-gradient(120%_120%_at_100%_100%,_#fee2f2_0%,_#fbcfe8_40%,_#e9d5ff_70%,_#e9d5ff_95%)]
              mix-blend-normal
            "
            style={{ animation: "gradientMove 18s ease-in-out infinite" }}
          />
          {/* Superposición de degradado para contraste */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br from-pink-100/60 via-pink-200/50 to-purple-200/60
              z-0
            "
          />

          <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center gap-12 sm:gap-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 max-w-md sm:max-w-none mx-auto">
              <span className="text-pink-600">Dulces </span>
              <span className="text-pink-600">Secretos</span>
            </h1>

            <p className="text-base sm:text-xl text-back px-4 max-w-sm sm:max-w-2xl font-extrabold">
              Endulzamos tus momentos con amor y los mejores ingredientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-40 sm:mt-12 md:mt-20 ">
              <Link
                to="/productos"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg"
              >
                <ShoppingBag size={24} />
                Ver Nuestros Productos
              </Link>

              <a
                href={wa("¡Hola! Me interesa conocer más sobre sus deliciosos productos 🍰")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg"
              >
                <MessageCircle size={24} />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Productos Destacados (sin precios) con tarjetas alineadas */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Nuestros Productos Destacados
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {productosDestacados.map((producto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  {/* Imagen con altura fija para uniformidad */}
                  <div className="w-full h-64">
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido: empuja el botón al fondo */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{producto.descripcion}</p>

                    {/* Botón alineado a la misma altura en todas las cards */}
                    <div className="mt-auto">
                      <a
                        href={wa("Hola, quiero pedir este producto destacado 🍰")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        Pedir Ahora
                      </a>
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

        {/* Nuestra Historia - video object-cover */}
        <section className="py-16 px-4 bg-[url('/fondoweb2.jpg')] bg-cover bg-center bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                  Nuestra Historia
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  En Dulces Secretos, cada postre cuenta una historia de pasión
                  y dedicación. Desde hace más de 10 años, hemos estado
                  endulzando los momentos especiales de nuestros clientes con
                  recetas tradicionales y creaciones innovadoras.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Utilizamos solo los mejores ingredientes y técnicas
                  artesanales para garantizar que cada bocado sea una experiencia
                  inolvidable.
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
                <video
                  ref={videoRef}
                  className="rounded-lg shadow-lg w-full max-h-96 object-cover"
                  muted
                  playsInline
                  preload="none"
                  src="/videos/nuestra-reposteria.mp4"
                  controls
                />
              </div>
            </div>
          </div>
        </section>

        {/* Opiniones de Clientes */}
        <section className="py-16 px-4 bg-[url('/fondoweb2.jpg')] bg-contain bg-top bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Lo que Dicen Nuestros Clientes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonio.comentario}"
                  </p>
                  <p className="font-semibold text-gray-800">- {testimonio.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Endulzar tu Día?</h2>
            <p className="text-xl mb-8">
              Contáctanos ahora y descubre por qué somos la repostería favorita
              de la ciudad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={wa("Hola, quiero hacer un pedido con Dulces Secretos")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <MessageCircle size={24} />
                Hacer Pedido por WhatsApp
              </a>

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
    </>
  );
}
