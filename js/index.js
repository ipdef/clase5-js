//4 tipos de función realizando lo mismo
function double(x){
    return x * 2;
}
console.log(double(10));

let double2 = function(x){
    return x * 2;
};
console.log(double2(10));

const double3 = (x) => {
    return x * 2;
};
console.log(double3(10));

const double4 = x => x  * 2;

//funcion inmediatemente convocada
let result = (function(x){
    return x * 2;
})(10);
console.log(result);


//scope
let scope = "Soy global";

function textScope(){
    let scope = "Soy local";
    console.log("Adentro de la function: " + scope);
}

textScope();

console.log("Afuera de la function: " + scope);



//ejemplo2
let scope2 = "Soy global";

function textScope2(){
    scope2 = "Soy local";

    console.log("Adentro de la function: " + scope2);
}

console.log("Afuera de la function: " + scope2);

textScope2();
//Se reasigna el valor de scope2 tras ejecutar la función
console.log("Afuera de la segunda función: " + scope2);

//ejemplo 3 -Hosting declaración scope 3, da error - descomentar para 
let scope3 = "Soy global";

function textScope3(){
    console.log ("Adentro de ela tercera funcion: " + scope3);
    let scope3 = "soy local";
}

textScope3();
console.log("Afuera de la tercera función: " + scope3);


//HOISTING en funciones ******
function sayHi(name){
    console.log("Hola " + name);
}
sayHi("Pedro");


sayHi2("Pepe");
function sayHi2(name){
    console.log("Hola " + name);
}


//try / catch
const secretNum = 25;
let guess = 3;
let win = 0;

//Para jugarlo comentar la linea "let guess = 3;" y la ultima linea
//linea del código y descomentar el siguiente comentario
/*do{
    let guess = prompt("Adivine el número");
    guessTheNum(secretNum,guess);
}while(win == 0);*/


function guessTheNum(secret,guess){
    try{
        if(isNaN(+guess)){
            throw new Error("No fue un número lo que se ingresó")
        }else if(guess == ''){
            throw new Error("No se ingresó un número")
        }else if(+guess > secret){
            throw new Error ("El número ingresado es muy alto");
        }else if(+guess < secret){
            throw new Error ("Elnúmero ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);
    }catch(error){
        alert(error);
    }
}
guessTheNum(secretNum, guess);


