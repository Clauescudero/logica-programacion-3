function Operacionfactorial (num) {
    if (num == 0) {
        return 1;
    }else{
        return num * Operacionfactorial(num-1);
    }


}

function verificarNum (ingresado){
    return !isNaN(parseFloat(ingresado)) && isFinite(ingresado);
}

function iniciar(){
    let num;


    do {
        let input = prompt("ingrese un número: ")
        if(verificarNum(input)) {
            num = parseFloat(input);
        } else {
            alert("Numero no valido! ingrese otro numero!");
        }
    }while (!verificarNum(num));


    const factorial = Operacionfactorial(num);


    const resultadorElement = document.createElement("p");
    resultadorElement.textContent = `el factorial de ${num} es : ${factorial}`;
    document.body.appendChild(resultadorElement);
}


iniciar();





















