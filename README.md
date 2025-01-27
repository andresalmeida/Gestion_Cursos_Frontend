# 🤓☝🏻 Gestión de Estudiantes y Cursos
---
Este proyecto es una aplicación web para gestionar estudiantes y cursos. Está desarrollada con 🚀 **Astro** como framework de frontend y 🎨 **Tailwind CSS** para los estilos. El backend está construido con  **Spring Boot** y se comunica con el frontend a través de una API REST para que la gestión de matrículas de estudiantes sea rápida, estilosa y funcional.


## 🛠️ Tech Stack que manejamos

- **Frontend**:
  - 🌟 [Astro](https://astro.build/): El framework que te da velocidad, simplicidad y un build ligerito.
  - 🎨 [Tailwind CSS](https://tailwindcss.com/): Para que todo quede bonito con mínimo esfuerzo, porque sí, somos estéticos.
  - 📜 TypeScript: Porque nos gusta que nuestro código sea tan limpio como un cuarto recién ordenado.

- **Backend**:
  - 📦 APIs de Microservicios - Spring Boot: Consumiendo endpoints para estudiantes y cursos (hechos con amor ♥️).
  - 💾 Base de datos: Usamos MySQL y PostgreSQL, porque todo está relacionado entre sí.   
---

## 🌲 Estructura del Proyecto
Así organizamos el desorden (porque un código organizado es vida):

### 🧑🏻‍🚀 Frontend

```plaintext
📂 frontend/
├── 📂 public/          # Assets estáticos como imágenes y demás chucherías.
├── 📂 src/             
│   ├── 📂 components/  # Componentes Astro reutilizables.
│   │   ├── BackToHome.astro  # Componente que nos llevará de regreso a index.astro.
│   │   ├── CourseForm.astro  # Formulario para crear cursos.
│   │   ├── CourseList.astro  # Componente para listar los cursos disponibles.
│   │   ├── Header.astro  # Componente en donde definimos nuestro header y footer.
│   │   ├── MatriculaList.astro  # Componente para listar cursos y gestionar matrículas.
│   │   ├── UserForm.astro  # Formulario para crear estudiantes.
│   │   └── UserList.astro  # Componente para listar los estudiantes.
│   ├── 📂 styles/      # Archivos de estilos. Aquí vive nuestro `global.css` con Tailwind.
│   ├── 📂 layouts/       # Definimos la UI.
│   │   └── Layout.astro  # Plantilla para las páginas de nuestro proyecto
│   ├── 📂 pages/       # Rutas principales del proyecto.
│   │   ├── crearcursos.astro  # Aquí se consume lo que definimos en CourseForm.
│   │   ├── crearestudiantes.astro  # Aquí se consume lo que definimos en UserForm.
│   │   ├── cursos.astro  # Aquí se consume lo que definimos en CourseList.
│   │   ├── estudiantes.astro  # Aquí se consume lo que definimos en UserList.
│   │   ├── matriculas.astro  # Aquí se consume lo que definimos en MatriculaList.
│   │   └── index.astro  # La GOAT de las pages, aquí definimos las secciones para que tu hagas clic y seas redirigido a las páginas.
│   ├── 📂 services/       # Servicios disponibles.
│   │   └── api.ts          # ¡El alma de este frontend! Aquí están todas las funciones para la comunicación con las APIs.
├── 📂 node_modules/    # Dependencias mágicas de npm.
├── 📜 types.ts # Archivo de implementación de TypeScript
└── 📜 package.json     # Info del proyecto y los scripts listos pa’ correr.
```

### 🐳 Backend

La estructura del backend ya la hemos definido, la [puedes encontrar si haces clic aquí](https://github.com/andresalmeida/Microservicios-Cursos-Estudiantes)

Si fuiste al enlace, pero aún no estás seguro de cómo funciona, tranqui, aquí te lo explico:

El backend expone una API REST con los siguientes endpoints:

#### Estudiantes
- **GET** `/api/estudiantes`: Obtener la lista de estudiantes.
- **GET** `/api/estudiantes/{id}`: Obtener un estudiante por su ID.
- **POST** `/api/estudiantes`: Crear un nuevo estudiante.
- **PUT** `/api/estudiantes/{id}`: Actualizar un estudiante existente.
- **DELETE** `/api/estudiantes/{id}`: Eliminar un estudiante.

#### Cursos
- **GET** `/api/cursos`: Obtener la lista de cursos.
- **GET** `/api/cursos/{id}`: Obtener un curso por su ID.
- **POST** `/api/cursos`: Crear un nuevo curso.
- **PUT** `/api/cursos/{id}`: Actualizar un curso existente.
- **DELETE** `/api/cursos/{id}`: Eliminar un curso.
- **PUT** `/api/cursos/matricular-estudiante/{cursoId}`: Matricular a un estudiante a un curso.
- **DELETE** `/api/cursos/desmatricular-estudiante/{cursoId}/estuiante/{estudianteId}`: Desmatricular a un estudiante de un curso.

---
## 📡 APIs que usamos
Este proyecto consume microservicios de estudiantes y cursos. Estas son las joyitas:

- Estudiantes:
  `GET`, `POST`, `PUT` y `DELETE` para manejar a los estudiantes.

- Cursos:
  - Listar cursos disponibles.
  - Crear cursos.
  - Matricular estudiantes.
  - Desmatricular estudiantes.

Sí, todo esto lo controlamos desde la magia de `api.ts`. 🌟
---

## 🧩 Componentes Principales

Sí, son los que ya explicamos arriba, peeeeero, oye, no está de más explicar a detalle, ¿verdad? 🤷🏻‍♂️

### Frontend

1. **`CourseForm.astro`**:
   - Formulario para crear o editar cursos.
   - Incluye campos para el nombre, descripción y créditos del curso.

2. **`CourseList.astro`**:
   - Muestra la lista de cursos.
   - Permite matricular y desmatricular estudiantes en cada curso.

3. **`UserForm.astro`**:
   - Formulario para crear o editar estudiantes.
   - Incluye campos para el nombre, apellido, email, fecha de nacimiento y teléfono.

4. **`UserList.astro`**:
   - Muestra la lista de estudiantes.
   - Permite editar o eliminar estudiantes.

5. **`api.ts`**:
   - Contiene funciones para interactuar con la API del backend.
   - Incluye métodos para obtener, crear, actualizar y eliminar estudiantes y cursos.

### Backend

1. **`EstudianteController.java`**:
   - Controlador para manejar las solicitudes relacionadas con estudiantes.

2. **`CursoController.java`**:
   - Controlador para manejar las solicitudes relacionadas con cursos.

3. **`Estudiante.java`** y **`Curso.java`**:
   - Modelos de datos para estudiantes y cursos.

4. **`EstudianteService.java`** y **`CursoService.java`**:
   - Contienen la lógica de negocio para estudiantes y cursos.

---

---
## 💻 ¿Cómo lo corres? (En modo local, obvio)
¡Facilito, pa'! Sigue estos pasos:

### Frontend

1. Clona este repo:
   ```bash
   git clone https://github.com/andresalmeida/Gestion_Cursos_Frontend.git
   cd frontend
   ```
2. Instala las dependecias:
   ```bash
   npm install
   npm install tailwindcss @tailwindcss/vite
   ```
3. De ser necesario:
   ```bash
   npm install astro
   ```
4. Corre el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador:
   http://localhost:4321

### Backend

1. Asegúrate de tener Java y Maven instalados, si tienes IntelliJ IDEA, mucho mejor.
2. Las carpetas son micro-cursos y micro-servicios
3. Compila y ejecuta los proyectos:
   ```bash
   mvn spring-boot:run
   ```
---

## 🎨 Screenshots
¡Así luce en acción! 🔥

---

---
## 🚧 En construcción
Somos los Kubernenes 🐢, y siempre estamos mejorando este frontend, así que siéntete libre de sugerir mejoras o reportar bugs.

---

## 🦸‍♂️ Contribuye como un héroe
Si tienes ideas o quieres colaborar:

1. Haz un fork de este repo.
2. Crea una rama para tu feature:
   ```bash
   git checkout -b mi-nueva-feature
   ```
3. Haz un commit bien épico:
   ```bash
   git commit -m "Agregué la funcionalidad de ... 🚀"
   ```
4. Sube tus cambios:
   ```bash
   git push origin mi-nueva-feature
   ```
5. Abre un *Pull Request* y charlemos.
---

---
## 🙌 Créditos
- Desarrollado por los cracks de los Kubernenes 🐢, que saben combinar código, shipost y una buena partida de LoL.
- Especial shoutout a Astro y Tailwind por hacernos la vida más fácil.
---

¡Gracias por revisar este proyecto! 😊















