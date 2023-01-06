# Documentación de la aplicación de formulario de inscripción

Esta aplicación fue desarrollada utilizando React y Bootstrap para la interfaz de usuario. Se utilizó React-Router para el enrutamiento y Firebase como base de datos.

## Características principales

- El formulario de inscripción se genera a partir de un archivo .json que contiene información sobre los campos que se deben mostrar.
- La información registrada en el formulario se guarda en Firebase y se utiliza para cargar el componente de tabla.
- El formulario cuenta con validaciones basadas en la información especificada en el archivo .json.

## Requisitos previos

Para utilizar esta aplicación, es necesario tener instalado lo siguiente en su entorno de desarrollo:

- Node.js y npm (viene incluido con la instalación de Node.js)
- Una cuenta de Firebase y un proyecto creado en la consola de Firebase

## Instalación y configuración

1. Descargue o clone el repositorio de la aplicación en su máquina local.
2. Abra una consola de comandos y diríjase al directorio de la aplicación.
3. Ejecute `npm install` para instalar todas las dependencias necesarias.
4. Copie la cadena de conexión a su base de datos de Firebase en el archivo `src/firebase.js`.
5. Ejecute `npm start` para iniciar la aplicación en modo de desarrollo. La aplicación se abrirá en su navegador predeterminado.

## Uso

Al abrir la aplicación en su navegador, se le presentará el formulario de inscripción. Complete los campos según corresponda y haga clic en el botón "Enviar" para guardar la información en la base de datos de Firebase.

Para ver la información registrada en la tabla, haga clic en el botón "Ver tabla" en la barra de navegación superior. Esto le llevará al componente de tabla donde podrá ver toda la información registrada.

## Personalización

Si desea modificar el formulario de inscripción o las validaciones, puede hacerlo editando el archivo .json correspondiente. Asegúrese de seguir el formato especificado en el archivo para que la aplicación pueda procesar correctamente la información.
