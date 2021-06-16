/*
*Solicitar al visitante que ingrese su nombre de usuario
*Almacenar el nombre de usuario ingresado el una funcion
*Escenario 1: El nombre no está en la lista
*Darle la bienvenida al nuevo usuario
*Escenario 2: El nombre de usuario existe.
*Dar un aviso al usuario que el nombre de usuario se encuentra en uso
*Utilizar una función con try / catch para realizar la validación
*/

// let usuarios = ['Angel','Max','Franco','Debra'];

// let addUser = () => {
//     //guardar nombre ingresado
//     //undefine -> false
//     //null -> false
//     //""->false
//     let user = prompt("Ingrese nombre de usuario");

//     //validar que el nombre no este en la lista
//     try {
//         if(!user){
//             throw new Error("Debe ingresar un nombre de usuario");
//         }

//         for (let i = 0; i < usuarios.length; i++) {
//             if(user.trim() === usuarios[i]){
//                 throw new Error("El usuario ya existe");
//             }
//         }

//         usuarios.push(user);
//         alert(`Bienvenido ${user}`);
//     }catch (error){
//         alert(error);
//     }
// }
// addUser();

/**
 * Solicitar al visiatnte que ingrese su nombre de usuario
 * Almacenar el nombre de usuario ingresado en una función
 * Escenario 1: El nombre no está en la lista
 * Darle la bienvenida al nuevo usuario
 * Escenario 2: El nombre de usuario existe.
 * Dar un aviso al usuario que el nombre de usuario se encuentra en uso
 * Utilizar una función con try / catch para realizar la validación
 */
 class Usuario{
    constructor(nombre, apelido, email, usuario, contraseña, estado){
        this.nombre = nombre;
        this.apelido = apelido;
        this.email = email;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.estado = estado;
    }
}

let usuarios = [
    new Usuario("Angel","Verdu","angel@mail.com","angel","12345",false),
    new Usuario("Alejandro", "Perez","perez@mail.com","alejandro", "12345", true)
];

let addUser = () => {
    //guardar nombre ingresado
    //undefine => false
    //null => false
    //"" => false
    let user = prompt("Ingrese nombre de usuario");

    //validar que el nombre no este en la lista
    console.log(user);
    try{
        if (!user){
            throw new Error("Debe ingresar un nombre de usuario");
        }
        for (let i = 0; i < usuarios.length; i++) {
           if (user === usuarios[i].usuario){
                alert(`Bienvenido ${user}`);
           } 
        }
        
    }catch(error){
        alert(error);
    }
}

addUser();






