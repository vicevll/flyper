# Flyper - Project Overview & Instructions

Flyper is a specialized web-based study timer and productivity tool that gamifies study sessions as flight journeys. It uses real-world coordinates and flight durations to create an immersive productivity environment.

## 🎯 Purpose
To help users focus on study tasks by framing them as parts of a flight mission, providing visual and auditory feedback on progress, and managing time through an itinerary-based system.

## 🛠 Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, Tailwind CSS (via CDN).
- **Maps:** Leaflet.js for 2D map visualization.
- **Components:** Tom Select (dropdowns), SortableJS (drag-and-drop tasks), FontAwesome (icons).
- **Visual Effects:** Canvas-confetti for session completion celebrations.
- **Audio:** Native HTML5 Audio API for background music and notifications.

## 🚀 Key Features & Logic

### 1. Flight Planning
- **Mission Naming:** Users can name their study session (e.g., "Exam Prep").
- **Airport Selection:** Choose origin and destination from a global list of airports.
- **Itinerary Storage (Hangar):** 
    - Flights are automatically saved to `LocalStorage` upon confirmation.
    - The "Hangar" modal allows users to view, load, or delete previous plans.
    - Option to "Continuar sin guardar" (Continue without saving) is available.

### 2. Task Management
- **Study Plan:** Add tasks and assign time as a percentage of the total flight duration.
- **Active Task HUD:** 
    - Displays current task, local progress bar, and time remaining in Spanish ("m restantes").
    - **Overtime Logic:** When task time reaches 100%, the panel turns red (`#c1121f`), plays `ringring.mp3`, and displays a "Siguiente Tarea" button.
- **Flight List:** Sidebar access to view and manage all tasks during the flight.

### 3. Flight Experience
- **Boarding Pass:** Shows mission name, origin/destination codes, duration, and estimated arrival time/date.
- **Modular HUD:** Separated boxes for "Tiempo Restante", "Finalización" (with date), and "Progreso".
- **Responsive Layout:**
    - **Desktop (>= 1024px):** Dual sidebar layout. Active Task and Task List are stacked on the left, Music Menu on the top-right. Menus stay open simultaneously.
    - **Mobile:** Centered, toggleable menus that close each other to save space. Compact HUD.
- **Celebration:** Continuous confetti and a "¡Felicidades!" modal appear when all tasks are finished.

### 4. Audio Environment
- **Background Music:** 7 curated tracks from Pixabay (Lofi, Coffee Shop, Deep Focus, Piano, etc.).
- **Notifications:**
    - `copano.mp3`: Success sounds (task completion, final celebration).
    - `ringring.mp3`: Alert for task time completion.

## 📂 Project Structure
- `index.html`: Contains all HTML, CSS, and JS logic.
- `src/sounds/`: Local audio assets (`copano.mp3`, `ringring.mp3`, etc.).
- `GEMINI.md`: This context file.

## 🛠 Development Conventions
- **Language:** UI text and user interaction in Spanish.
- **Persistence:** Use `localStorage` with the key `flyper_hangar` for data.
- **Styles:** Use Tailwind utility classes and custom "glassmorphism" effects.
- **Audio:** Always use secure `https://` links for external assets.

## 📝 Gemini Added Memories
- Solo debo realizar commits cuando el usuario lo solicite explícitamente.
- Las tareas activas en desktop se muestran desplegadas a la izquierda por defecto.
