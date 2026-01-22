# 🎵 Taller Práctico: Backend de "Streamify" (Música)

**Objetivo:** Construir la lógica central para una nueva aplicación de streaming de música utilizando estándares modernos de JavaScript (ES6+).

**Instrucciones Generales:**

* Crea un archivo JavaScript (`app.js`) para escribir tu código.
* Sigue los pasos en orden.
* Utiliza `console.log()` para verificar que cada paso funcione correctamente.
* **Requisito:** Debes aplicar estrictamente las características de ES6+ solicitadas en cada punto (no utilices sintaxis antigua como `var` o `function` tradicional a menos que sea necesario por diseño).

---

## 1. Configuración del Perfil de Usuario (Variables y Strings)

Para comenzar, necesitamos gestionar la información básica del usuario que está escuchando música.

* Declara una variable constante para el **Nombre de la Aplicación** (ej. "Streamify").
* Declara una variable mutale para el **Usuario Actual** (ej. "Invitado") que luego cambiará cuando inicie sesión.
* Crea una **Función Flecha** llamada `crearMensajeBienvenida` que reciba el nombre de un usuario y el plan de suscripción.
* Debe retornar un saludo utilizando **Template Literals** (comillas invertidas) que incluya ambos datos.
* Ejemplo de salida: *"Bienvenido Juan a Streamify, tu plan es Premium."*



## 2. Gestión de Listas de Reproducción (Funciones y Arrays)

Vamos a crear herramientas para manejar las canciones.

* Crea una **Función Flecha** llamada `calcularDuracionTotal`.
* Debe recibir un número indefinido de duraciones de canciones (en minutos) usando el **Operador Rest**.
* Debe retornar la suma total de estos minutos.


* Crea una función `agregarCancion` que reciba:
* El nombre de la canción.
* El artista.
* Un parámetro para la "playlist" destino. Configura este parámetro con un **Valor por Defecto** de "Favoritos" (por si el usuario no especifica la lista).
* La función debe imprimir: *"Agregando [Cancion] de [Artista] a la lista [Playlist]"*.


* Tienes dos arrays de canciones: `popHits` y `rockClassics`. Crea un nuevo array llamado `mixFiesta` que combine ambos arrays utilizando el **Operador Spread**.

## 3. Procesamiento de Datos (Destructuring)

Recibimos datos crudos de las canciones desde el servidor y necesitamos extraer lo importante.

* Crea un objeto llamado `infoCancion` con las propiedades: `id`, `titulo`, `artista`, `album` y `duracion`.
* Utiliza **Desestructuración de Objetos** para extraer el `titulo` y el `artista` en variables individuales.
* Imprime una frase usando esas variables extraídas.

## 4. Arquitectura de Medios (Clases y Herencia)

El núcleo de la aplicación se basa en objetos inteligentes.

* Define una clase `PistaAudio`.
* Debe tener propiedades para `titulo` y `artista`.
* Debe tener un **Campo Privado** para almacenar el `conteoReproducciones` (inicializado en 0).
* Incluye un método `reproducir()` que aumente el conteo privado e imprima *"Reproduciendo..."*.
* Incluye un método para ver el conteo actual (ya que es privado, necesitas un método público para leerlo).


* Crea una clase hija llamada `Podcast` que herede de `PistaAudio` (`extends`).
* Añade una propiedad única: `episodio` (número).
* Sobrescribe el método `reproducir()`: debe llamar al método del padre (`super`) y además imprimir *"Este es el episodio número [X]"*.



## 5. Colecciones Únicas y Mapas (Estructuras de Datos)

Necesitamos organizar los géneros musicales y los perfiles de los artistas.

* Crea un **Set** para almacenar "Géneros Escuchados".
* Añade varios géneros (ej: "Rock", "Pop", "Jazz").
* Intenta añadir "Pop" nuevamente y verifica (imprimiendo el tamaño del Set) que no se hayan creado duplicados.


* Crea un **Map** para asociar Artistas con su "Número de Seguidores".
* La clave debe ser el nombre del artista y el valor el número de seguidores.
* Añade dos artistas y luego obtén e imprime los seguidores de uno de ellos.



## 6. Simulación de Descarga (Asincronía)

Finalmente, simularemos la descarga de una canción desde la nube.

* Crea una función `descargarCancion(titulo)` que retorne una **Promesa**.
* Usa `setTimeout` para simular una espera de 2 segundos.
* Si el título existe (es un string no vacío), la promesa debe resolverse con el mensaje *"Descarga completada: [titulo]"*.
* Si no, debe rechazarse con un error.


* Crea una función asíncrona (`async`) llamada `ejecutarPlayer`.
* Dentro, utiliza `await` para llamar a `descargarCancion` con un título válido.
* Imprime el resultado.




---
