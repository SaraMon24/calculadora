function sumar () {
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = document.getElementById('resultado')
    let suma = parseFloat(numeroUno) + parseFloat(numeroDos);
    resultado.textContent = suma;
    console.log(suma);
    console.log (numeroUno);
    console.log (numeroDos);
};

function restar () {
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = document.getElementById('resultado')
    let resta = parseFloat(numeroUno) - parseFloat(numeroDos);
    resultado.textContent = resta;
    console.log(resta);
    console.log (numeroUno);
    console.log (numeroDos);
};

function multip () {
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = document.getElementById('resultado')
    let multi= parseFloat(numeroUno) * parseFloat(numeroDos);
    resultado.textContent = multi;
    console.log(multi);
    console.log (numeroUno);
    console.log (numeroDos);
};

function divis () {
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = document.getElementById('resultado')
    let divi= parseFloat(numeroUno) / parseFloat(numeroDos);
    resultado.textContent = divi;
    console.log(divi);
    console.log (numeroUno);
    console.log (numeroDos);

};



    
