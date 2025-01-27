---
# 🤓☝🏻 Gestión de Estudiantes y Cursos

Este proyecto es una aplicación web para gestionar estudiantes y cursos. Está desarrollada con 🚀 **Astro** como framework de frontend y 🎨 **Tailwind CSS** para los estilos. El backend está construido con  **Spring Boot** y se comunica con el frontend a través de una API REST para que la gestión de matrículas de estudiantes sea rápida, estilosa y funcional.

---

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

1. Esta es la pantalla de inicio de la aplicación, una chimba, ¿verdad? Desde aquí podremos navegar a las otras opciones.
<div align="center">
<img width="600" alt="index" src="https://github.com/user-attachments/assets/336c83f1-5adb-445e-ab66-317dc014a07b" />
</div>
<br>

2. Esta es la pantalla de estudiantes, aquí veremos la lista de los estudiantes matriculados, y podremos editarlos, o, eliminarlos
<div align="center">
<img width="600" alt="estudiantes" src="https://github.com/user-attachments/assets/21eee892-d293-4984-90ba-ce566a71379f" />
</div>
<br>

3. Si decidimos editar un estudiante, se nos abrirá una nueva ventana, ahí deberemos hacer los cambios que deseemos.
<div align="center">
<img width="600" alt="estu_editar" src="https://github.com/user-attachments/assets/242314f5-c75b-49f7-895d-f4b09eda0273" />
</div>
<br>

4. Si editamos, nos aparecerá una ventana de confirmación, así sabremos que la persona deja de ser quien era antes, convirtiéndose en una nueva; o solo puso mal su teléfono.
<div align="center"> 
<img width="600" alt="estu_editado" src="https://github.com/user-attachments/assets/6d698c4a-07ec-4ed3-984c-63e9a1a53a1b" />
</div>
<br>

5. Si decidimos eliminar un estudiante, nos aparecerá una pantalla de confirmación. Es una acción sería, así que, vale la pena preguntar ⚠️.
<div align="center">
<img width="600" alt="estu_eliminar" src="https://github.com/user-attachments/assets/8a312e0b-bfe9-475e-ab1c-9f9a5aa8edab" />
</div>
<br>

6. Si estamos seguro de eliminar un estudiante, nos aparecerá la pantalla con la confirmación #SeFueSeFue 😔.
<div align="center">
<img width="600" alt="estu_eliminado" src="https://github.com/user-attachments/assets/ba56109b-376d-4b4c-8015-b62d689eb639" />
</div>
<br>

7. Pero cuando una ventana se cierra, una puerta se abre, también tenemos una pantalla para poder crear un estudiante, se ve así.
<div align="center">
<img width="600" alt="creacion_estu" src="https://github.com/user-attachments/assets/643bccf0-b1fa-4aa2-8ac0-c7c7f0615c39" />
</div>
<br>

8. Ahí si creamos un estudiante, nos aparecerá la confirmación #BienvenidoAlTeam 🫂.
<div align="center">
<img width="600" alt="estu_creado" src="https://github.com/user-attachments/assets/142ee34f-1170-4404-9910-e5e99a80d9f2" />
</div>
<br>

9. Ahora, tenemos la pantalla de cursos, ahí veremos todos los cursos que tenemos disponibles.
<div align="center">
<img width="600" alt="cursos" src="https://github.com/user-attachments/assets/2f002c02-13f8-43d7-90b6-d3c525534a88" />
</div>
<br>

10. Si queremos eliminar un curso, de igual manera, aparecerá una ventana de confirmación ⚠️.
<div align="center">
<img width="600" alt="cur_eliminar" src="https://github.com/user-attachments/assets/46d1782c-4a8c-4390-8271-a697d4fea9a7" />
</div>
<br>

11. Si siempre sí, eliminamos el curso, tendremos la ventana de confirmación.
<div align="center">
<img width="600" alt="cur_eliminado" src="https://github.com/user-attachments/assets/24806d23-1aa3-43ac-ba63-3db2b7936ad6" />
</div>
<br>

12. De igual manera, si queremos crear un curso, tenemos disponible la pantalla en la que debemos llenar los datitos correspondientes.
<div align="center">
<img width="600" alt="creacion_cur" src="https://github.com/user-attachments/assets/c20a0008-0934-4392-8461-3387722247e9" />
</div>
<br>

13. Si creamos el curso, pues, recibiremos una ventana de confirmación.
<div align="center">
<img width="600" alt="cur_creado" src="https://github.com/user-attachments/assets/0974d407-b328-4b53-bc31-72398b3fb145" />
</div>
<br>

14. Ahora, como ya tenemos cursos, y tenemos estudiantes, podemos ver la pantalla de matricula, aquí tenemos dos partes, la primera, nos mostrará los cursos con los estudiantes matriculados en dicho curso.
<div align="center">
<img width="600" alt="matricula1" src="https://github.com/user-attachments/assets/bf142e77-51bf-4d8d-bedf-a5b00d6f000e" />
</div>
<br>

15. La segunda parte, tenemos un formulario, tanto para matricular, como, para desmatricular. Una belleza man!
<div align="center">
<img width="600" alt="matricula2" src="https://github.com/user-attachments/assets/304728bf-96ef-4567-b814-b5ef73e0ea6b" />
</div>
<br>

16. Si llenamos el formulario para matricular, recibiremos una ventana de confirmación.
<div align="center">
<img width="600" alt="matriculado" src="https://github.com/user-attachments/assets/39688d55-f43a-449b-9924-117f1da43a44" />
</div>
<br>

17. Pero, si llenamos el formulario para desmatricular, pues también, una ventana de confirmación.
<div align="center">
<img width="600" alt="desmatriculado" src="https://github.com/user-attachments/assets/1bea7cd0-9a6c-416c-8957-72ad1a55f39d" />
</div>
<br>

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















