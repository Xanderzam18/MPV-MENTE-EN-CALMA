//##MPV MENTE EN CALMA

//#Problema: 
// Muchas veces como estudiante no te sientes cómodo hablando personalmente con tu 
// psicólogo, te incomoda y terminas incomodado y con las mismas frustraciones y 
// pensamientos que no le contactas a tu psicóloga. Por eso se creó el monovolumen 
// “Mente en Calma”.

//#Solución: 
// El monovolumen “Mente en Calma”. Se trata de un chat anónimo donde el usuario puede 
// tener una conversación con un profesional, (siendo los pasantes del área de psicología), 
// que al mismo tiempo de que ayudan a los estudiantes también puedan realizar sus 
// pasantías, esto será un beneficio doble, este MPV tendrá un plus, teniendo también un 
// chat extra donde la persona podrá hablar con otros usuarios, permitiendo relajarse 
// formar amistades, distraerse y despejar la mente hablando con otros usuarios.

//#Características:
//Un chat completamente anónimo donde pueden estar tranquilos.
//Cuenta con profesionales que te van ayudar en todo momento.
//Un segundo chat donde puedes hablar con otros usuarios para formar amistades y relajarse.

//#Que no va hacer: 
// Un quizz psicológico donde solo responde formularios.

//#Impacto Social: 
// Crea confianza a los usuarios que les incomoda ir al psicólogo, les permite abrirse,
//  hablar y buscar ayuda sintiéndose más tranquilos y seguros, y, lo más importante con 
// profesionales. Además, te ofrece un lugar donde podrás distraer tu mente creando nuevos
//  vínculos, mediante un chat adicional donde puedes interactuar con los demás usuarios.

//INTERFASE DE PROYECTO

interface Estudiante {
  GrupoEstudiantil: string 
  Edad: number
  Correo: string | number //Se usará para el inicio de sesión
}

interface Psicologo { 
Nombre: string 
Especialidad: string 
Experiencia: number 
CodigoCarnet: number //Clave de acceso que se le dará a los estudiantes de psicología 
                    // que vayan a hacer sus pasantias en la plataforma. 
Cedula: number 
Correo: string //Se usara para el inicio de sesión
} 

let estudiantes: Estudiante={ 
GrupoEstudiantil: "Facultad de Psicologia", 
Edad: 20, 
Correo: "correo@g,mail.com", 
}

let psicologos: Psicologo={ 
Nombre: "Dr. Pérez", 
Especialidad: "Psicología Clínica", 
Experiencia: 10, 
CodigoCarnet: 12345, 
Cedula: 123456789, 
Correo: " dr.perez@universidad.com "
}

console.log(`DATOS-DEL-estudiantes: ${JSON.stringify(estudiantes)}`)

console.log(`DATOS-DEL-psicologos: ${JSON.stringify(psicologos)}`)


//Actividad 2: Creación de la interfaz para la selección de rol
//
// Definición 
type RolUsuario = 'estudiante' | 'profesional' 

// Interfaz para las opciones de selección de rol
interface OpcionRol {
  id: RolUsuario;
  titulo: string;
  descripcion: string;
  icono: string; // Puede ser una URL o el nombre de un componente de icono
}

// Interfaz para la creación de cuenta de estudiante
interface CreaTuCuentaEstudiante {  
    edad: number
    correo: string
    contraseña: string | number
    confirmarContraseña: string | number

}


// Interfaz para la creación de cuenta de psicólogo
interface CreaTuCuentaPsicologo {
    nombre: string
    edad: number
    correo: string
    codigo: number
    contraseña: string | number
    confirmarContraseña: string | number
}



// Definición de tipos para los mensajes del chat
interface Mensaje {
  id: number;
  texto: string;
  hora: string;
  remitente: 'usuario' | 'otro';}
  