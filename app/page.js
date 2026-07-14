import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  );
}
