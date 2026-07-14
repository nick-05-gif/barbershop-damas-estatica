import Link from 'next/link';

export const metadata = {
  title: 'Política de Cookies | Barbershop Damas',
  description: 'Información sobre el uso de cookies en la web de Barbershop Damas.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-barber-dark pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-barber-white/40 hover:text-barber-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold text-barber-white mb-8">Política de Cookies</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-barber-white/70 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-barber-white">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Cookies propias</h2>
            <p><strong className="text-barber-white">Esta web no utiliza cookies propias</strong> de sesión, autenticación ni rastreo. Al ser una página de presentación de carácter estático, no se genera ninguna cookie de origen propio al navegar por ella.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Cookies de terceros</h2>
            <p>El mapa integrado de <strong className="text-barber-white">Google Maps</strong> puede establecer cookies propias del servicio de Google al cargar el contenido incrustado. Barbershop Damas no tiene control sobre dichas cookies. Para más información, consulte la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-barber-gold hover:underline">política de privacidad de Google</a>.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Gestión de cookies</h2>
            <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se intente establecer una. A continuación encontrará enlaces a las instrucciones de los navegadores más comunes:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-barber-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-barber-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-barber-gold hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-barber-gold hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
