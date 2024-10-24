const soma3 = (a, b) => a + b;

function imprimir (a, b, operacao = soma3) {
    console.log(operacao(a, b)) //indica que operacao tem que ter uma funcao, pois ela passa parametros
}
imprimir(1, 2, /*tem que passar uma funcao aqui*/ (a, b) => a - b) // no caso agora ela sobrescreve o valor padrão (default)



const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] 

//sem callback
function notasBaixas(notas) {
    for (let i in notas) {
        if (notas[i] <= 7) {
            console.log(`nota ${notas[i]} é menor que 7 portanto reprovou`)
        }
    }
}

notasBaixas(notas)

function notasBaixas2(notas) {
  notas.forEach(nota => {
    if (nota <= 7) {
        console.log(`nota ${nota} é menor que 7 portanto reprovou`)
    }
  });
}

notasBaixas2(notas)

//com callback
notasBaixas3 = notas.filter(nota => {
    if (nota < 7) {
        return nota;
    }
})

console.log(notasBaixas3)

notasBaixas4 = notas.filter(nota => {
    return nota < 7
})

console.log(notasBaixas4)

notasBaixas5 = notas.filter(nota => nota < 7)

console.log(notasBaixas5)