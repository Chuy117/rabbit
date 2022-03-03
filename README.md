# Desafío Rabbit.

Objetivo.

Desarrollar una aplicación que implemente un pin pad.

Características de la implementación.

    1 Pad numérico del 0-9 y una tecla de borrado.
    2 Campo donde se muestra el pin de 4 caracteres.
    3 Solo el último campo se muestra.
    4 Botón para conocer el pin de prueba.
    5 El pin de prueba se genera al azar.
    6 Botón flotante para acceder a la página de pin pad o contacto.
    7 Al momento de pulsar un botón se puede ver en el campo del pin ese evento.
    8 En la página de contacto, se puede ver el CV del candidato así como de opciones añadidas como perfil de LinkedIn, enviar un email o llamar por teléfono.
    9 Si el pin es correcto, se limpian los campos y se muestra un modal informando que el dato es correcto.
    10 Si el pin es incorrecto, se limpian los campos, se resta un intento y se muestra un modal informando del error.
    11 Si se llega a los tres intentos, el usuario debe esperar 30 segundos para volver a intentarlo.
    12 Si antes de los tres intentos el usuario introduce el pin correcto, se resetean los intentos.

Requerimientos.

    NodeJS.
    IDE de su preferencia (se sugiere VSC).
    Navegador web (se sugiere Google Chrome).

Ejecutar aplicación.

    1 Descargar el archivo .zip.
    2 Descomprimir el archivo.
    3 Abrir el proyecto en tu IDE de tu preferencia.
    4 Abrir una terminal en la raíz del proyecto.
    5 Ejecutar el comando npm install.
    6 Ejecutar el comando npm start.

Nota: Al ejecutar el último paso, se levantará el cliente en el ambiente local y se ejecutará la aplicación en el navegador web. 
Si quieres hacer la prueba en un dispositivo móvil se deben ejecutar unos pasos extra.

    6a) Una vez levantado el servidor, abre una terminal nueva y ejecuta el comando ipconfig (en Windows) o ifconfig (en Mac) y anotar el valor de Dirección IPV4.
    6b) Asegurarse que tanto el equipo de cómputo como tu dispositivo móvil se encuentran conectados en la misma red. (En algunos casos el antivirus bloquea a través del Firewall ciertos puertos, puede que sea necesario desactivarlo.)
    6c) Si todo está correcto, en tu dispositivo móvil abre un navegador y escribe el valor obtenido de la Dirección IPV4 seguido de : y el puerto (El servidor de ReactJS normalmente trabaja en el puerto 3000). Ejemplo 192.160.2.5:3000 y con esto podrás ver el proyecto desde tu dispositivo móvil.
