# Las Notas de la Boticaria

Aplicación interactiva hecha con React y Vite. Permite consultar los casos del
diario de Maomao, ver el catálogo completo y abrir un formulario de demostración.

## Ejecutar

Desde esta carpeta (`Proyecto`):

```sh
npm install
npm run dev
```

Otros comandos disponibles:

```sh
npm run build
npm run lint
npm run preview
```

## Estructura

```text
src/
├── componentes/
│   ├── Formularios/   Campos y botones usados por el formulario
│   ├── Home/          Efectos visuales reutilizables
│   ├── Orquestador/   Combina las piezas de tarjetas y formulario
│   ├── Styles/        Estilos globales, de tarjetas y formulario
│   ├── Tarjetas/      Botón de caso, imagen, título y descripción
│   └── pages/         Rutas y páginas principales
├── data.json          Datos de los casos de la boticaria
└── main.jsx           Punto de entrada de React
```

La aplicación tiene tres rutas: `/` para el diario interactivo, `/Tarjetas` para
el catálogo completo y `/Formulario` para el formulario. Los datos se mantienen
en `src/data.json` y se muestran mediante componentes reutilizables.

El formulario es una demostración local: no envía ni guarda los datos.
