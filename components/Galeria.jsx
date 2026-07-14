const FOTOS_GALERIA = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
    alt: 'Corte de pelo degradado en Barbershop Damas',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop',
    alt: 'Arreglo y perfilado de barba',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    alt: 'Acabado profesional en barbería',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    alt: 'Detalle de corte moderno',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    alt: 'Afeitado con navaja en barbería',
  },
];

export default function Galeria() {
  return (
    <section className="py-20 sm:py-28 bg-barber-dark relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-barber-dark-lighter to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-barber-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-barber-white mb-4">
            Nuestro Trabajo
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-barber-gold to-barber-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FOTOS_GALERIA.map((foto, i) => (
            <div
              key={foto.id}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: i === 0 ? '400px' : '190px' }}
              />
              <div className="absolute inset-0 bg-barber-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-barber-white text-xs font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {foto.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
