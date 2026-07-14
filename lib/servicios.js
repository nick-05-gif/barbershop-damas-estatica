// Catálogo de servicios de Barbershop Damas.
// precioDomFest: tarifa especial para domingos. Si es null, el precio no cambia.
export const SERVICIOS = [
  { id: 1, nombre: 'Corte de pelo',      precio: 13, precioDomFest: 14 },
  { id: 2, nombre: 'Jubilados',          precio: 10, precioDomFest: 11 },
  { id: 3, nombre: 'Arreglar barba',     precio: 7,  precioDomFest: null },
  { id: 4, nombre: 'Afeitado de barba',  precio: 7,  precioDomFest: null },
  { id: 5, nombre: 'Marcar cejas',       precio: 3,  precioDomFest: null },
  { id: 6, nombre: 'Lavado pelo',        precio: 3,  precioDomFest: null },
  { id: 7, nombre: 'Tinte pelo hombres', precio: 10, precioDomFest: null },
];

// Devuelve el precio correcto de un servicio según si es domingo o no
export function getPrecio(servicio, esDomingo) {
  if (esDomingo && servicio.precioDomFest !== null) {
    return servicio.precioDomFest;
  }
  return servicio.precio;
}
