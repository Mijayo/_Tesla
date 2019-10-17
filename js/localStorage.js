/* LOCAL STORAGE 'la caché' = guarda datos, perdura en el tiempo. Cerramos el navegador y se mantienen los datos. 
Es un mecanismo para guardar informacion 'puenteando' el uso de una base de datos. 
SESSION STORAGE = guarda los datos conforme la sesion esta iniciada. Cerramos el navegador y se pierden los datos. */
localStorage.clear();

// Para guardar cosas en localStorage se hace con setItem()
localStorage.setItem('curso1', 'Comida Vegetariana');
localStorage.setItem('curso2', 'Ajedrez');

// SessionStorage para añadir informacion
sessionStorage.setItem('libro1', 'PHP');
sessionStorage.setItem('libro2', 'Python');

// Eliminar el item en localStorage o sessionStorage
localStorage.removeItem('curso1');

// Obtener informacion del localStorage para trabajar en JS
const curso = localStorage.getItem('curso2');
console.log(curso);