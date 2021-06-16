/*Escribe una función arrow que reciba como parámetro
un array y calcule el promedio de los elementos tipo númerico.
*/

const list = [2,2,2,"a"];
const averageCalculator = data => {
    let sum = 0;
    let numericElementCounter = 0;

    for(let i = 0; i<data.length; i++){
        const number = parseInt(data[i]);

        if (!isNaN(number)){
            sum += number;
            numericElementCounter++;
        }
    }
    let average = sum / numericElementCounter;
    return average;
}

//Pitacora
//recibe un parámetro y retorna si es mayor a cero, menosr o igual a cero
let mayor_numero = numero => {
    if (numero > 0){
        r = 'Mayor';
    }else if(numero < 0){
        r = 'Menor';
    }else{
        r = 'Cero';
    }
    return r;
}
