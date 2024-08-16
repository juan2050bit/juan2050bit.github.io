document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Por favor, complete todos los campos.';
    } else {
        // Aquí iría la lógica para autenticar al usuario (enviar al servidor, etc.)
        alert('Inicio de sesión exitoso');
        document.getElementById('error-message').textContent = '';
    }
});