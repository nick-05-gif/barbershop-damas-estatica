import Link from 'next/link';

export const metadata = {
  title: 'Aviso Legal | Barbershop Damas',
  description: 'Aviso legal e información sobre el titular de Barbershop Damas.',
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-barber-dark pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-barber-white/40 hover:text-barber-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold text-barber-white mb-8">Aviso Legal</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-barber-white/70 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Datos identificativos</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa al usuario de los datos del titular de esta web:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong className="text-barber-white">Nombre comercial:</strong> Barbershop Damas</li>
              <li><strong className="text-barber-white">Domicilio:</strong> Avda. Gertrudis Gómez de Avellaneda, Nº 57, 50018 Zaragoza</li>
              <li><strong className="text-barber-white">Teléfono:</strong> 976 24 03 78</li>
              <li><strong className="text-barber-white">Email:</strong> contacto@barbershopdamas.com</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Objeto y ámbito de aplicación</h2>
            <p>El presente Aviso Legal regula el uso del sitio web de Barbershop Damas, cuya finalidad es la presentación informativa del establecimiento, sus servicios y datos de contacto. El acceso y la navegación por este sitio web implican la aceptación de las condiciones aquí recogidas.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos de esta web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de Barbershop Damas o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Limitación de responsabilidad</h2>
            <p>Barbershop Damas no se hace responsable de los daños o perjuicios derivados del acceso, uso o mal uso de los contenidos de la web, ni de los que puedan deberse a la falta de veracidad, exactitud, exhaustividad y/o actualidad de los mismos.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Ley aplicable y jurisdicción</h2>
            <p>El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Zaragoza.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
