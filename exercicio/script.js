function soma(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);

    let resultado = n1 + n2;

    console.log('Clicou soma', resultado);

    let resultadoHtml = document.getElementById('resultado')

    resultadoHtml.innerHTML = resultado;

    // let strong = document.createElement('strong');

    // strong.innerHTML = 'Resultado: ' + resultado;
}