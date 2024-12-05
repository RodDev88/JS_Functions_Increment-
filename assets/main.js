// Declaramos fx incrementar con valor por defecto en 1
// Significa que si la fx se llama sin argumentos, el valor será igual a 1 
function incrementar(valor = 1) {
    
    // Seleccionar el párrafo
        // Con método doc.get... buscamos en el HTML ele con id "contador"
        // El resultado de esa búsqueda se almacena en const parrafo

    const parrafo = document.getElementById("contador");

    // Obtener el valor actual, convertirlo a número y sumar el valor

        //parrafo.textContent obtiene el texto que está dentro del párrafo (por ejemplo, "0").
        //parseInt(..., 10) convierte este texto en un número entero, interpretándolo como base 10 (sistema decimal).

    const numeroActual = parseInt(parrafo.textContent, 10);

    //Suma el valor actual del número (numeroActual) con el valor recibido como argumento en la función (valor).
    //El resultado de esta suma se guarda en la constante nuevoNumero.
    const nuevoNumero = numeroActual + valor;

    // Actualizar el contenido del párrafo
    parrafo.textContent = nuevoNumero;
  }
  
 /*  
function incrementar(valor = 1) {
    
    const parrafo = document.getElementById("contador");
    const numeroActual = parseInt(parrafo.textContent, 10);
    const nuevoNumero = numeroActual + valor;
    parrafo.textContent = nuevoNumero;
  } */
  