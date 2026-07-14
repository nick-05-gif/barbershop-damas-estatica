export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Foto del interior del local como fondo */}
      <img
        src="/images/local-interior.png"
        alt="Interior de Barbershop Damas"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-barber-dark/75 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,95,0.4)_0%,_transparent_60%)] z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,16,46,0.15)_0%,_transparent_50%)] z-[2]" />

      {/* Líneas decorativas tipo barber pole en los laterales */}
      <div className="absolute top-0 left-8 sm:left-16 w-[2px] h-full opacity-10 z-[3]">
        <div className="w-full h-full bg-[repeating-linear-gradient(180deg,_#C8102E_0px,_#C8102E_20px,_#F5F5F5_20px,_#F5F5F5_40px,_#1E3A5F_40px,_#1E3A5F_60px)]" />
      </div>
      <div className="absolute top-0 right-8 sm:right-16 w-[2px] h-full opacity-10 z-[3]">
        <div className="w-full h-full bg-[repeating-linear-gradient(180deg,_#1E3A5F_0px,_#1E3A5F_20px,_#F5F5F5_20px,_#F5F5F5_40px,_#C8102E_40px,_#C8102E_60px)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-barber-white leading-[0.95] tracking-tight mb-6 animate-slide-up">
          BARBERSHOP
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-barber-red via-barber-white to-barber-blue">
            DAMAS
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-barber-white/60 font-light italic mb-12 animate-slide-up-delay tracking-wide">
          El corte que te mereces, en el barrio que conoces
        </p>

        <div className="animate-slide-up-delay-2">
          <a
            href="tel:+34684113157"
            className="group relative inline-flex items-center gap-3 bg-barber-gold text-barber-dark font-bold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-6 rounded-2xl transition-all duration-300 hover:bg-barber-gold-hover hover:scale-105 hover:shadow-2xl hover:shadow-barber-gold/30 active:scale-100"
          >
            <span className="absolute inset-0 rounded-2xl bg-barber-gold/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              RESERVAR CITA
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-16 sm:mt-24 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-barber-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}