const alunos = [
    {nome: "a", nota: 8.9, bolsista: false},
    {nome: "b", nota: 7.2, bolsista: true},
    {nome: "c", nota: 6.3, bolsista: false}
]

const acumNota = (acum, al)  => {
    return acum + al.nota
}

let result = alunos.reduce(acumNota)

console.log(result)