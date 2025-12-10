# Intro Section with Dropdown Navigation

## 📋 Descripción del Proyecto

Este proyecto es una landing page moderna y responsive que presenta una sección de introducción con navegación desplegable. La página está diseñada para promover el trabajo remoto y la productividad en equipo, con el mensaje principal "Make remote work" (Haz que el trabajo remoto funcione).

## 🎯 Características Principales

### Navegación Interactiva
- **Menú desplegable responsive** con submenús para "Features" y "Company"
- **Navegación móvil** con menú hamburguesa animado
- **Accesibilidad mejorada** con atributos ARIA y soporte completo de teclado
- **Cierre inteligente** de menús al hacer clic fuera o presionar ESC

### Diseño Responsive
- **Mobile-first approach** con diseño adaptativo
- **Imágenes optimizadas** (desktop y mobile) usando el elemento `<picture>`
- **Breakpoints** que se ajustan perfectamente en diferentes dispositivos

### Tecnologías Utilizadas
- **HTML5** semántico con estructura accesible
- **SASS/SCSS** con arquitectura modular:
  - Variables y mixins para reutilización
  - Componentes separados (header, main, initial)
  - Sistema de estilos organizado y mantenible
- **JavaScript vanilla** para interactividad:
  - Toggle de menús móviles
  - Gestión de submenús desplegables
  - Eventos de teclado para accesibilidad
  - Responsive handlers

## 🗂️ Estructura del Proyecto

```
pagina/
│
├── index.html              # Página principal
├── main.js                 # Lógica de interacción
│
├── sass/                   # Estilos SASS
│   ├── style.scss          # Archivo principal
│   ├── _variables.scss     # Variables de diseño
│   ├── _mixins.scss        # Mixins reutilizables
│   ├── _initial.scss       # Estilos base y reset
│   ├── _header.scss        # Estilos del header
│   ├── _main.scss          # Estilos del contenido principal
│   └── style.css           # CSS compilado
│
├── images/                 # Recursos gráficos
│   ├── logo.svg
│   ├── image-hero-desktop.png
│   ├── image-hero-mobile.png
│   ├── client-*.svg        # Logos de clientes
│   └── icon-*.svg          # Iconos de interfaz
│
├── documents/
│   └── README.md           # Este archivo
│
└── design/                 # Archivos de diseño

```

## 🚀 Contenido de la Página

### Hero Section
- **Título principal**: "Make remote work"
- **Descripción**: Mensaje sobre sincronización de equipos y productividad
- **Call-to-Action**: Botón "Learn more"
- **Logos de clientes**: Databiz, Audiophile, Meet, Maker

### Menú de Navegación
- **Features**: Todo List, Calendar, Reminders, Planning
- **Company**: History, Our Team, Blog
- **Enlaces directos**: Careers, About
- **Botones de usuario**: Login, Register

## ✨ Características de Accesibilidad

- Etiquetas ARIA para navegación asistida
- Soporte completo de teclado (ESC para cerrar menús)
- Imágenes con textos alternativos descriptivos
- Semántica HTML correcta con roles ARIA
- Controles de navegación con estados expandidos/colapsados

## 🎨 Características de Diseño

- Interfaz limpia y moderna
- Navegación intuitiva con dropdown menus
- Transiciones suaves en las interacciones
- Diseño mobile-first completamente responsive
- Backdrop oscuro para el menú móvil

## 📱 Compatibilidad

El proyecto está optimizado para funcionar en:
- Dispositivos móviles (viewport < 768px)
- Tablets y dispositivos medianos
- Pantallas desktop (≥ 1024px)

## 🔧 Instalación y Uso

1. Clonar el repositorio
2. Abrir `index.html` en un navegador web
3. Para desarrollo con SASS, compilar los archivos .scss:
   ```bash
   sass --watch sass/style.scss:sass/style.css
   ```

## 👨‍💻 Desarrollo

Este proyecto utiliza una arquitectura modular de SASS que facilita el mantenimiento y la escalabilidad del código. La separación de componentes permite trabajar en diferentes secciones de manera independiente.


