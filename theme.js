// Función para cambiar el tema
function switchTheme() {
  const body = document.querySelector('body');
  const themeSwitch = document.getElementById('theme-switch');

  if (themeSwitch.checked) {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
  } else {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
  }
}

// Verificar si hay un tema almacenado en el local storage y aplicarlo
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.querySelector('body');

  if (savedTheme === 'dark') {
      body.classList.add('dark');
      themeSwitch.checked = true;
  } else {
      body.classList.add('light');
      themeSwitch.checked = false;
  }
});

// Agregar el evento de cambio al interruptor (switch)
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', switchTheme);