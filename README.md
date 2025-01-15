# ImgProcessor

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.7 y Vite. La aplicación permite procesar imágenes, buscar registros de imágenes entre fechas y obtener la cantidad de imágenes procesadas agrupadas por horas. Además, cuenta con un sistema de login y registro, y las rutas están protegidas.

## Funcionalidades

1. **Procesar imágenes:**
   - Recibir una imagen en formato JPG o JPEG.
   - Convertir la imagen a PNG.
   - Guardar la imagen (PNG) en disco duro o en un servicio en la nube.
   - Guardar en una colección de una base de datos MongoDB:
     - Fecha y hora de subida.
     - Nombre de la persona que la subió.
     - URL de la imagen guardada.

2. **Buscar registros de imágenes entre fechas:**
   - Seleccionar dos fechas y ver el listado de las imágenes que se han subido en ese rango de fechas.

3. **Obtener cantidad de imágenes procesadas agrupadas por horas:**
   - Ver la cantidad de imágenes que se han subido por hora.

## Requisitos

- Node.js versión 23.0.0
- MongoDB

## Clonar el repositorio

Para clonar el repositorio, ejecuta:

```bash
git clone https://github.com/freiman-uribe/imgProcessor.git
cd ImgProcessor
```

#### Para visualizar la estructura mas claramente ingresa a: 
- `https://gitingest.com/freiman-uribe/imgProcessor`


## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Paquetes utilizados

- Angular Animations: ^19.0.0
- Angular CDK: ^19.0.5
- Angular Common: ^19.0.0
- Angular Compiler: ^19.0.0
- Angular Core: ^19.0.0
- Angular Forms: ^19.0.0
- Angular Material: ^19.0.5
- Angular Platform Browser: ^19.0.0
- Angular Platform Browser Dynamic: ^19.0.0
- Angular Platform Server: ^19.0.0
- SweetAlert2: ^11.4.20


## Configuración de variables de entorno

Crea un archivo `environment.development.ts` en la raíz del proyecto y agrega las siguientes variables de entorno:

```env
apiUrl='http://tu-api-url'
```

Asegúrate de reemplazar `http://tu-api-url` con la URL de tu API.


## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

## Sistema de Login y Registro

La aplicación cuenta con un sistema de login y registro. Las rutas están protegidas y se utiliza el almacenamiento local (local storage) para almacenar el token de autenticación.

## Generación de componentes

Angular CLI incluye herramientas de generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para obtener una lista completa de los esquemas disponibles (como `components`, `directives` o `pipes`), ejecuta:

```bash
ng generate --help
```

## Construcción

Para construir el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de construcción en el directorio `dist/`. Por defecto, la construcción de producción optimiza tu aplicación para rendimiento y velocidad.
