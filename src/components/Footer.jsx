"use client";

import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart } from "lucide-react";
import { BUSINESS, wa } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  const IG_URL =
    "https://www.instagram.com/dulces_secretos.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  // Link entregado por ti para "Facebook" (redirige desde Instagram a la web antigua)
  const FB_URL =
    "https://l.instagram.com/?u=https%3A%2F%2Fdulcessecretos.cl%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafLMmFf2kfm5e9Rg2Sb5i6vMbPi2hCDXpSlmqxaMrhWWfwJDMwjTSeOJr3SBw_aem_d6QdmQbQoShyVrqOBGl8WQ&e=AT3WsVYlZZIp0ueVv0vnyXOCV9hJ76vgeDocNFn2ShT9QgbbAwN_JwS1-_y79FdyjDQ4fgeXuMF2bkgkx7hyZ8vidONwoMEP5zPMtpQ";

  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    image: `${BUSINESS.site}/fondoweb1.jpg`,
    url: BUSINESS.site,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cancagua con Gerónimo de Alderete",
      addressLocality: "La Florida",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    sameAs: [IG_URL, FB_URL],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }}
      />
      <footer className="relative text-white">
        {/* Fondo con imagen */}
        <div className="absolute inset-0 bg-[url('/dulces1.jpg')] bg-cover bg-center" aria-hidden="true" />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" aria-hidden="true" />

        {/* Contenido */}
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Marca */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold mb-3">Dulces Secretos</h2>
              <p className="text-gray-200 max-w-xl">
                Repostería artesanal en <strong>La Florida, Santiago</strong>. Tortas, postres y cursos hechos con amor.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="Instagram de Dulces Secretos"
                  title="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="Facebook de Dulces Secretos"
                  title="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href={wa("¡Hola! Me gustaría hacer un pedido o resolver una duda.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
                  aria-label="WhatsApp de Dulces Secretos"
                  title="WhatsApp"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 flex-shrink-0" />
                  <a href={`tel:${BUSINESS.phoneE164}`} className="hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:underline">
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 flex-shrink-0" />
                  <span>{BUSINESS.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 flex-shrink-0" />
                  <span>Lun–Vie 09:00–19:00 · Sáb 09:00–15:00</span>
                </li>
              </ul>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <a href="/" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/productos" className="hover:underline">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="/cursos" className="hover:underline">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea inferior */}
          <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              © {year} Hecho con <Heart className="inline-block -mt-1 h-4 w-4" /> Por Maurizio Caballero.
            </p>
            
          </div>
        </div>
      </footer>
    </>
  );
}
