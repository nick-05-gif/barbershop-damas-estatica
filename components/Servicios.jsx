import { SERVICIOS } from '@/lib/servicios';

// Imagen representativa por cada servicio
const IMAGEN_POR_SERVICIO = {
  1: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&auto=format&fit=crop',
  2: '/images/jubilado.png',
  4: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&auto=format&fit=crop',
  5: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop',
  6: '/images/lavado.png',
  7: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400&auto=format&fit=crop',
};

const IMAGEN_FALLBACK = 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&auto=format&fit=crop';

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-barber-dark-lighter relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-barber-dark to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-barber-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-barber-white mb-4">
            Servicios &amp; Precios
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-barber-red to-barber-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICIOS.filter((s) => s.id !== 3).map((servicio) => (
            <a
              key={servicio.id}
              href="tel:+34684113157"
              className="group relative bg-barber-gray/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-barber-gray/80 hover:border-barber-gold/20 hover:shadow-xl hover:shadow-barber-gold/5 hover:-translate-y-1 cursor-pointer block"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={IMAGEN_POR_SERVICIO[servicio.id] || IMAGEN_FALLBACK}
                  alt={servicio.nombre}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-gray/90 via-barber-gray/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-barber-white mb-3">
                  {servicio.nombre}
                </h3>

                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-barber-gold">
                    {servicio.precio}€
                  </span>
                  {servicio.precioDomFest && (
                    <span className="text-sm text-barber-white/40 mb-1">
                      Dom: {servicio.precioDomFest}€
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-barber-gold/50 group-hover:text-barber-gold font-medium transition-colors">
                  <span>Reservar este servicio</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-barber-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>

        <p className="text-center text-barber-white/30 text-sm mt-10">
          Los precios de domingos se aplican exclusivamente los domingos. Todos los precios incluyen IVA.
        </p>
      </div>
    </section>
  );
}