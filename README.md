# Desafío Rabbit.

## Versión en español.

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

## English version.

Objective.

Develop an application that implements a pin pad.

Implementation features.

    1 Numeric pad from 0-9 and a delete key.
    2 Field where the 4-character pin is displayed.
    3 Only the last field is displayed.
    4 Button to know the test pin.
    5 The test pin is generated randomly.
    6 Floating button to access the pin pad or contact page.
    7 When you press a button you can see that event in the pin field.
    8 On the contact page, you can see the candidate's CV as well as added options such as LinkedIn profile, send an email or call by phone.
    9 If the pin is correct, the fields are cleared and a modal is displayed informing that the data is correct.
    10 If the pin is incorrect, the fields are cleared, one attempt is subtracted, and a modal is displayed reporting the error.
    11 If three attempts are reached, the user must wait 30 seconds to try again.
    12 If before three attempts the user enters the correct pin, the attempts are reset.

Requirements.

    NodeJS.
    IDE of your preference (VSC suggested).
    Web browser (Google Chrome suggested).

Run application.

    1 Download the .zip file.
    2 Unzip the file.
    3 Open the project in your IDE of your choice.
    4 Open a terminal in the root of the project.
    5 Run the npm install command.
    6 Run the npm start command.

Note: Running the last step will raise the client in the local environment and run the application in the web browser.
If you want to do the test on a mobile device, a few extra steps must be executed.

    6a) Once the server is up, open a new terminal and run the command ipconfig (on Windows) or ifconfig (on Mac) and write down the IPV4 Address value.
    6b) Make sure that both the computer equipment and your mobile device are connected to the same network. (In some cases the antivirus blocks certain ports through the Firewall, it may be necessary to disable it.)
    6c) If everything is correct, on your mobile device open a browser and write the value obtained from the IPV4 Address followed by : and the port (The ReactJS server normally works on port 3000). Example 192.160.2.5:3000 and with this you can see the project from your mobile device.