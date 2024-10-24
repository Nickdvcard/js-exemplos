function countLetra(char, str) {
    let countchar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.chatAt(i) === char) {
            countchar++;
        }
    }
    console.log(`O caracter ${char} aparece ${countchar} vezes na frase`);

};

countLetra('r', "A sorte favorece os audazes")

function countLetraSplit (char, str) {
    let caracteres = str.split("");
    let countchar = 0;
    // console.log(caracteres);
    // console.log(typeof(caracteres));
    caracteres.forEach(letra => {
        if(letra === char) {
            countchar++;
        }
    });
    console.log(`O caracter ${char} aparece ${countchar} vezes na frase`);
}

countLetraSplit('r', "A sorte favorece os audazes")

const a = countLetraSplit; //armazena funcao
console.log(a); //retorna o nome da função armazenada em a - imprime o seu conteúdo
a('r', "A sorte favorece os audazes") //certo

const b = countLetraSplit('r', "A sorte favorece os audazes") //armazena um retorno da funcao, mas da erro pois essa funcao não possui uma exressao return
console.log(b) //não dá erro - retorna undefined, pois o valor atributo a variavel b não tem um valor deifinido
b('r', "A sorte favorece os audazes") //erro - dá problema e interrompe a execução do programa