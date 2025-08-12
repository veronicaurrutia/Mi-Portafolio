# Portafolio de Verónica Urrutia

Portafolio personal de Verónica Urrutia, desarrolladora web frontend especializada en React, JavaScript, HTML, CSS y Tailwind CSS.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework de CSS para diseño responsivo
- **EmailJS** - Servicio para envío de emails desde el formulario de contacto
- **React Icons** - Iconos para la interfaz
- **CSS3** - Animaciones y estilos personalizados

## 📋 Características

- ✅ Diseño responsivo para móviles y escritorio
- ✅ Navegación suave entre secciones
- ✅ Formulario de contacto funcional con EmailJS
- ✅ Animaciones CSS personalizadas
- ✅ Optimizado para producción
- ✅ Accesibilidad mejorada con alt tags descriptivos

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/veronicaurrutia/Mi-Portafolio.git

# Navegar al directorio del proyecto
cd Mi-Portafolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### Construcción para Producción

```bash
# Crear build optimizado
npm run build
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Fork o clona** este repositorio
2. **Conecta tu cuenta** de GitHub a [Vercel](https://vercel.com)
3. **Importa el proyecto** desde GitHub
4. **Deploy automático** - Vercel detectará que es un proyecto React y lo configurará automáticamente

#### Configuración manual en Vercel:
- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Netlify

1. **Build del proyecto**:
   ```bash
   npm run build
   ```

2. **Arrastra la carpeta `build`** a [Netlify Drop](https://app.netlify.com/drop)

#### O conecta desde GitHub:
1. **Conecta tu repositorio** en Netlify
2. **Configuración de build**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18

### GitHub Pages

```bash
# Deploy a GitHub Pages
npm run deploy
```

Esto creará una rama `gh-pages` y desplegará automáticamente.

## 📁 Estructura del Proyecto

```
src/
  ├── Components/
  │   ├── About.js          # Sección "Sobre mí"
  │   ├── Contact.js        # Formulario de contacto
  │   ├── Home.js           # Página principal
  │   ├── Jobs.js           # Experiencia laboral
  │   ├── Navbar.js         # Navegación
  │   ├── Projects.js       # Portafolio de proyectos
  │   ├── Skills.js         # Habilidades técnicas
  │   ├── ScrollToTopButton.js # Botón scroll to top
  │   └── img/              # Imágenes del portafolio
  ├── App.js               # Componente principal
  ├── App.css              # Estilos y animaciones
  ├── index.js             # Punto de entrada
  └── index.css            # Estilos globales y Tailwind
```

## ⚙️ Configuración de EmailJS

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla de email
4. Actualiza las credenciales en `src/Components/Contact.js`:
   ```javascript
   emailjs.sendForm(
     'TU_SERVICE_ID',
     'TU_TEMPLATE_ID', 
     formRef.current,
     'TU_PUBLIC_KEY'
   )
   ```

## 🎨 Personalización

### Colores (Tailwind Config)
Los colores personalizados están definidos en `tailwind.config.js`:
- `customBrown`: Color principal del tema
- `brownDrak`: Color de fondo oscuro
- `darkFond`: Color de fondo alternativo

### Animaciones
Las animaciones personalizadas están en `src/App.css` y pueden modificarse según necesidades.

## 📱 Responsividad

El portafolio está optimizado para:
- **Móviles**: 320px en adelante
- **Tablets**: 768px en adelante  
- **Desktop**: 1024px en adelante

## 🐛 Solución de Problemas

### Build Failures
```bash
# Limpiar cache de npm
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Problemas de Routing
Este proyecto usa navegación de una sola página (SPA) con anclas. No requiere React Router.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 👩‍💻 Contacto

- **Email**: vero.urrutia.b@gmail.com
- **LinkedIn**: [linkedin.com/in/veronica-urrutia](https://www.linkedin.com/in/veronica-urrutia/)
- **Portfolio**: [veronicaurrutia.github.io/Mi-Portafolio](https://veronicaurrutia.github.io/Mi-Portafolio)

---

**Desarrollado con ❤️ por Verónica Urrutia**
