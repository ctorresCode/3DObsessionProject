

function loadCart(){
  window.location.href = "projectdetails.html";
}

/*
function cargarUsers(){
  fetch('cartas.json')
  .then(respuesta => respuesta.json())
  .then(ids => {
      ids.forEach(id => {
        const div = document.createElement('div');
        div.innerHTML += `
            <h1>${id.title}</h1>
        `
      });
  });
}

cargarUsers();

*/

/*
const tabla = document.querySelector('#2 tbody');

function cargarUsuarios() {
    fetch('cartas.json')
        .then(respuesta => respuesta.json())
        .then(cartas => {
            cartas.forEach(carta => {
                const container = document.createElement('div');
                row.innerHTML += `
                   <h1>${carta.title}</h1>
                   <h3>${carta.description}</h3>
                `;
                tabla.appendChild(container);
            });
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();
*/

function humanDetails(){
    window.location.href = "humandetails.html";
}