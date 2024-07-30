// script.js

// Función para cargar datos del archivo JSON
async function cargarDatos() {
    try {
      const response = await fetch('cartas.json'); // Ajusta la ruta si es necesario
      const datos = await response.json();
      return datos;
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  }
  
  // Función para mostrar el contenido de la página
  function mostrarContenido(idCarta) {
    cargarDatos().then(datos => {
      const carta = datos.carta.find(c => c.id === idCarta);
      if (carta) {
        document.getElementById('title').innerHTML = carta.title;
        document.getElementById('description').innerHTML = carta.description;
      } else {
        console.error('Página no encontrada');
      }
    });
  }
  
  // Puedes llamar a mostrarContenido con el ID deseado cuando lo necesites
  // Por ejemplo, mostrarContenido('pagina1'); para cargar la primera página al inicio
  window.onload = () => mostrarContenido('cartas');

  function loadCart(){
     window.location.href = "projectdetails.html";
  }