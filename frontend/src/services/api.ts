// Definición de tipos para los datos de estudiantes y cursos
export interface Estudiante {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: string;
  telefono: string;
}

export interface Curso {
  id?: number;
  nombre: string;
  descripcion: string;
  creditos: number;
  cursoEstudiantes?: CursoEstudiante[];

}

export interface CursoEstudiante{
  id: number;
  estudiante_id: number;
}

// URLs base de los microservicios
const BASE_URL_ESTUDIANTES = "http://localhost:8002/api/estudiantes";
const BASE_URL_CURSOS = "http://localhost:8003/api/cursos";

// Funciones para estudiantes
export const getEstudiantes = async (): Promise<Estudiante[]> => {
  const response = await fetch(BASE_URL_ESTUDIANTES);
  return await response.json();
};

export const getEstudianteById = async (id: number): Promise<Estudiante> => {
  const response = await fetch(`${BASE_URL_ESTUDIANTES}/${id}`);
  if (!response.ok) throw new Error("Estudiante no encontrado");
  return await response.json();
};

export const createEstudiante = async (estudiante: Estudiante): Promise<Estudiante> => {
  const response = await fetch(BASE_URL_ESTUDIANTES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(estudiante),
  });
  if (!response.ok) throw new Error("Error al crear el estudiante");
  return await response.json();
};

export const updateEstudiante = async (id: number, estudiante: Estudiante): Promise<Estudiante> => {
  const response = await fetch(`${BASE_URL_ESTUDIANTES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(estudiante),
  });
  if (!response.ok) throw new Error("Error al actualizar el estudiante");
  return await response.json();
};

export const deleteEstudiante = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL_ESTUDIANTES}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar el estudiante");
};

// Funciones para cursos
export const getCursos = async (): Promise<Curso[]> => {
  const response = await fetch(BASE_URL_CURSOS);
  return await response.json();
};

export const getCursoById = async (id: number): Promise<Curso> => {
  const response = await fetch(`${BASE_URL_CURSOS}/${id}`);
  if (!response.ok) throw new Error("Curso no encontrado");
  return await response.json();
};

export const createCurso = async (curso: Curso): Promise<Curso> => {
  const response = await fetch(BASE_URL_CURSOS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(curso),
  });
  if (!response.ok) throw new Error("Error al crear el curso");
  return await response.json();
};

export const updateCurso = async (id: number, curso: Curso): Promise<Curso> => {
  const response = await fetch(`${BASE_URL_CURSOS}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(curso),
  });
  if (!response.ok) throw new Error("Error al actualizar el curso");
  return await response.json();
};

export const deleteCurso = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL_CURSOS}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar el curso");
};


// Función para matricular un estudiante a un curso
// export const matricularEstudianteEnCurso = async (cursoId: number, estudiante: Estudiante): Promise<Estudiante> => {
//   const response = await fetch(`${BASE_URL_CURSOS}/matricular-estudiante/${cursoId}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(estudiante),
//   });
//   if (!response.ok) throw new Error("Error al matricular el estudiante al curso");
//   return await response.json();
// };

// Función para matricular un estudiante a un curso
export const matricularEstudianteEnCurso = async (cursoId: number, estudiante: Estudiante): Promise<{ id: number }> => {
  const response = await fetch(`${BASE_URL_CURSOS}/matricular-estudiante/${cursoId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(estudiante),
  });
  if (!response.ok) throw new Error("Error al matricular el estudiante al curso");
  return await response.json();
};


// Función para desmatricular un estudiante de un curso
export const desmatricularEstudianteDeCurso = async (cursoId: number, estudianteId: number): Promise<{ mensaje: string }> => {
  const response = await fetch(`${BASE_URL_CURSOS}/desmatricular-estudiante/${cursoId}/estudiante/${estudianteId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: estudianteId }),
  });
  if (!response.ok) throw new Error("Error al desmatricular el estudiante del curso");
  return await response.json();
};

// Nuevas funciones para


// ESTA FUNCION YA NO SE USA PORQUE USABA EL METODO PUT

// export const asignarEstudianteACurso = async (cursoId: number, estudianteId: number): Promise<Estudiante> => {
//   const response = await fetch(`${BASE_URL_CURSOS}/asignar-estudiante/${cursoId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ id: estudianteId }),
//   });
//   if (!response.ok) throw new Error("Error al asignar el estudiante al curso");
//   return await response.json();
// };