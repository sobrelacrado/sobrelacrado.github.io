/* =====================================================================
   SOBRE LACRADO · TABLA DE DESTINOS DE LOS QR
   Cada QR impreso apunta a  https://sobrelacrado.github.io/<código>/
   Para cambiar adónde lleva un QR, cambie SOLO la dirección de la derecha
   y guarde el archivo. Los PDF ya impresos seguirán funcionando.
   Si la dirección está vacía (""), se muestra un aviso con la hoja de respaldo.
   ===================================================================== */
window.DESTINOS = {
  /* --- Caso 3 · La caja 14 (Expediente 23-M-014) --- */
  "c3/escena":   "/escenas/caja14/",          // escena del almacén (hoja 17)
  "c3/v0":       "/videos/caja14-v0/",        // película muda de presentación (alojada aquí mismo)
  "c3/v1":       "/caja14-v1/"       ,        // cilindro de la Srta. Coll (alojado aquí)
  "c3/v2":       "/caja14-v2/"       ,        // cilindro del Sr. Varela (alojado aquí)
  "c3/pistas":   "/docs/caja14/pistas.pdf",   // pistas + hoja de respaldo (versión móvil, alojada aquí)
  "c3/solucion": "/docs/caja14/solucion.pdf"  // solución (versión móvil, alojada aquí)
};
/* Texto que se muestra si un destino está vacío o la web falla */
window.RESPALDO = {
  "c3/escena": "Use la «Hoja de respaldo · Placas del agente» del PDF de pistas: contiene todo lo que hay en la escena."
};
