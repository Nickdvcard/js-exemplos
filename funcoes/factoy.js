function createAnimal (name, size, color, age) {
    return {
        nome: name, //atributo recebe um valor cujo nome é diferente da variavel usada para armazenar tal valor
        size, //nome do atributo é o mesmo do passado
        color: "brown", //não é apenas um valor default, é um valor bem definido mesmo
        fazerBarulho() {
            console.log(`O animal ${name} faz barulho`)
        },
        age: (function() {
            if (age > 100 || age < 0) {
                return 5; // retorna 5 se a idade for inválida
            } else {
                return age; // retorna a idade válida
            }
        })()
        
      }
}

const dog = createAnimal("Rex", "medium", "white", 150); //como color já tem um valor é difinido seu valor "white" é efetivamente ignorado pois ele já é definido como brown
dog.fazerBarulho();
console.log(dog.size)
console.log(dog.nome)
console.log(dog.color)
console.log(dog.age)

const pessoa = (nome, idade) => {
    return {  
      nome: nome,
      idade: idade
    }
}

const carlos = pessoa("carlos", 12)
console.log(carlos)