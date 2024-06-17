const formulario = document.getElementById('formu');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const mensaje = document.getElementById('message');
const botonEnviar = document.getElementById('botonEnviar');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  if (!validarEmail(email.value)) {
    alert('El email ingresado no es válido.');
    email.focus();
    return;
  }
  
  alert('¡Formulario enviado correctamente!');
  formulario.submit();

});

function validarEmail(email) {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)com$/;
  return regex.test(email);
}
