# Flyper - Study Timer ✈️📚

Flyper es una aplicación web interactiva diseñada para transformar tus sesiones de estudio en una experiencia de vuelo inmersiva. Planifica tu trayecto, organiza tus tareas y "despega" hacia la productividad.

## 🚀 Cómo Empezar

Simplemente visita [flyper.app](https://flyper.app/) en cualquier navegador web moderno. No requiere instalación ni servidores externos.

## 🚀 Características Principales

### 🏆 Novedades: Logros y Estadísticas (Nuevo)
- **Sistema de Progresión:** Desbloquea más de 15 logros únicos como "Primer Despegue", "Trotamundos" o "Sin Escalas".
- **Centro de Estadísticas:** Visualiza tu rendimiento histórico: horas totales de vuelo, tasa de éxito, aeropuertos visitados y rachas de estudio.
- **Rachas Diarias:** Mantén tu constancia volando días consecutivos y observa cómo crece tu fuego.
- **Feedback Visual:** Barras de progreso para los logros pendientes y notificaciones especiales al desbloquear medallas.

### 🛫 Planificación de Vuelo
- **Selección de Ruta:** Elige entre más de 50 aeropuertos internacionales reales para definir tu trayecto. La duración del vuelo se calcula en función de la distancia real.
- **Hangar Personal:** Guarda tus itinerarios frecuentes en el almacenamiento local para cargarlos rápidamente en futuras sesiones.

### ⏱️ Gestión del Tiempo y Productividad
- **Gamificación:** Tu sesión de estudio es un vuelo. El progreso en el mapa refleja tu tiempo de estudio completado.
- **Lista de Tareas:** Define qué harás durante el vuelo. Asigna porcentajes de tiempo a cada tarea y el sistema te avisará cuando debas cambiar.
- **Persistencia Inteligente:** ¿Cerraste la pestaña por error? No hay problema. Flyper guarda automáticamente el estado de tu vuelo. Al volver a abrirlo, continuarás exactamente donde lo dejaste.
- **Modo Pausa:** Tómate un descanso con el botón de pausa. El tiempo de vuelo se detiene para que puedas relajarte sin afectar tus estadísticas de arribo.

### 🤝 Compartir e Importar
- **Compartir Vuelo:** Genera un enlace único para cualquier itinerario en tu Hangar con un solo clic.
- **Importación Directa:** Abre un enlace compartido para cargar automáticamente el plan de estudio completo, incluyendo origen, destino y desglose de tareas.
- **Privado y Ligero:** Los datos viajan codificados en la propia URL, sin necesidad de bases de datos ni cuentas de usuario.

### 🎧 Atmósfera Inmersiva
- **Mapa en Vivo:** Visualiza tu avión cruzando el mundo en tiempo real sobre un mapa interactivo.
- **Radio a Bordo:** Sintoniza estaciones de Lofi, Piano o Sonidos de Lluvia integradas directamente en la interfaz.
- **Feedback Auditivo:** Efectos de sonido para notificaciones y celebraciones.

## 🛠️ Tecnologías Utilizadas

- **HTML5 / CSS3 (Tailwind CSS)** para la estructura y estilos modernos (soporte Dark Mode).
- **JavaScript (Vanilla)** para la lógica de la aplicación.
- **Leaflet.js** para el motor de mapas 2D.
- **Tom Select** para la búsqueda inteligente de aeropuertos.
- **SortableJS** para la gestión de tareas mediante arrastrar y soltar.
- **Canvas-confetti** para las celebraciones visuales.
- **LocalStorage** para la persistencia de datos (Hangar y Vuelo Activo).

## 📂 Estructura del Proyecto

- `index.html`: La aplicación principal.
- `src/airports.js`: Base de datos de aeropuertos y coordenadas.
- `src/sounds/`: Recursos de audio para efectos y notificaciones.

---
*Desarrollado con ❤️ para estudiantes que quieren elevar su productividad.*