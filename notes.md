# CLASe JS 03 Functions / Guía

## 1. Ejercicio Funciones: FX incrementar

- Crear una página web con un párrafo que contenga el número 0 y 3 botones, uno con el texto aumentar en 1, otro aumentar en 2, y otro con aumentar 10.
- Crear la función incrementar con el valor por defecto de 1.
- Dentro de la función buscar el elemento y modificar el contenido actualizando su
  cantidad
- No es necesario pasar el id del elemento ya que siempre buscaremos el mismo párrafo
- Debes convertir el valor a número, de otra forma al sumar 0 con 1 obtendrás 01 y luego 011

## Clarificación de instrucciones y paso a paso

1. Crear elementos html

   - Crear un p que parta en el valor 0.
   - Crear 3 botones con aumentar 1, 2 y 10 respectivemente.

2. Crear función incrementaCuenta

   - La función debe tener param por defecto de 1.
   - Debe buscar ele y modificar su contenido actualizando cantidad
   - Debes convertir el valor a numero

## Flujo completo del código

- Cuando haces clic en un botón, el atributo onclick llama a la función incrementar y le pasa un valor (por ejemplo, 1, 2, o 10).

- La función selecciona el párrafo cuyo texto contiene el número actual.

- Convierte el contenido del párrafo en un número.

- Suma el número actual con el valor recibido.

- Actualiza el contenido del párrafo con el nuevo número.

<!-- ## Conocimientos de esta clase/ejercicio

### Definición de Función

Las funciones son conjuntos de instrucciones que podemos programar una vez y utilizarlas cada vez que necesitemos, a veces ocuparemos funciones creadas por otros, así como también bien frecuentemente tendremos que crear las nuestras.

---

### Diferencias entre parametros y argumentos

- Parámetro: Es la variable "de entrada" que defines al crear la función. Es como un "espacio reservado" que recibirá valores cuando llames a la función.
  Ejemplo:

`function getBkgColor(selector) //selector es el parametro{
    //bloque de código
}`

- Argumento: Es el valor real que proporcionas cuando llamas a la función. Este valor se asigna al parámetro.

`getBkgColor("#el-1"); // "#el-1" es el argumento.
`

---

Los terminos “argumentos” y “parámetros” son típicamente confundidos en los primeros pasos de un desarrollador. Su diferencia es el momento en el que se escriben, cuando estamos definiendo una función, el término que ocupamos es **_parámetros_**, y cuando estamos ejecutando una función, los valores que asignados entre los paréntesis se conocen como **_argumentos_**.
 -->
