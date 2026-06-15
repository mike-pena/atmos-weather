# Atmos

Atmos es una aplicación del clima con una experiencia visual y cinematográfica, creada con React. Permite buscar cualquier ciudad y explorar sus condiciones meteorológicas actuales mediante una interfaz inmersiva con fondos dinámicos, detalles del clima y pronósticos.

## Demo

[Ver proyecto en vivo](https://atmos-weather-frontend.vercel.app/)

## Sobre el proyecto

Atmos fue diseñado para hacer que la información del clima se sienta más visual, clara y atmosférica. En lugar de mostrar únicamente números e íconos, la aplicación adapta su apariencia según la condición climática actual y la hora del día.

El usuario puede buscar una ciudad y consultar el clima actual, pronóstico por hora, pronóstico semanal, índice UV, viento, humedad, sensación térmica, amanecer, atardecer y fondos dinámicos relacionados con el clima.

## Funcionalidades

* Búsqueda del clima por ciudad
* Temperatura actual y condición climática
* Fondos dinámicos según clima y día/noche
* Carrusel de pronóstico por hora
* Pronóstico de 7 días
* Información de amanecer y atardecer
* Índice UV
* Velocidad y dirección del viento
* Humedad
* Sensación térmica
* Cambio entre unidades de temperatura
* Diseño responsive para desktop y móvil
* Transiciones suaves entre páginas
* Mensaje de error para ubicaciones no encontradas

## Tecnologías utilizadas

* React
* Vite
* React Router
* JavaScript
* CSS
* Open-Meteo API
* Vercel

## API

Atmos utiliza la [Open-Meteo API](https://open-meteo.com/) para obtener datos de geolocalización y clima.

No requiere API key.

## Instalación y uso local

Para ejecutar el proyecto localmente:

```bash
git clone https://github.com/mike-pena/atmos-weather.git
cd atmos-weather
npm install
npm run dev
```

Después, abre en el navegador la URL local que aparece en la terminal.

## Scripts disponibles

```bash
npm run dev
```

Ejecuta el proyecto en modo desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Permite previsualizar localmente la versión de producción.

## Estructura del proyecto

```bash
src/
├── assets/
│   ├── animations/
│   ├── icons/
│   └── images/
├── components/
├── data/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Páginas principales

### Home

Página inicial con la experiencia de búsqueda principal.

### Explorer

Página de resultados donde el usuario puede consultar el clima actual, pronósticos y detalles meteorológicos.

### About

Página con información sobre el concepto y propósito de Atmos.

## Aprendizajes

Durante el desarrollo de Atmos practiqué:

* Estructurar una aplicación de React con componentes reutilizables
* Consumir datos desde una API externa
* Transformar respuestas de API en datos listos para la interfaz
* Manejar rutas con React Router
* Crear layouts responsive con CSS
* Aplicar estilos dinámicos basados en datos
* Manejar estados de carga y error
* Desplegar una aplicación React en Vercel

## Mejoras futuras

* Agregar ciudades favoritas
* Optimizar aún más los videos de fondo
* Agregar más animaciones climáticas
* Mejorar la accesibilidad
* Guardar preferencias del usuario
* Agregar más detalles meteorológicos

## Autor

Creado por Mike Peña.

## Licencia

Este proyecto fue creado para el proyecto final del programa TripleTen, con fines educativos y de portafolio.