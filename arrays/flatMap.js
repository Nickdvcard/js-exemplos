
const escola = [
    {
        nome: "turma1",
        alunos: [
            { nome: "a", nota: 8.9 },
            { nome: "b", nota: 9 }
        ]
    },
    {
        nome: "turma2",
        alunos: [
            { nome: "c", nota: 7.7 },
            { nome: "d", nota: 6.1 }
        ]
    }
];

const getNotas = (turma) => {
    return turma.alunos.map(aluno => aluno.nota); // Mapeia as notas dos alunos
}

const getNotasTurma = (numT) => {
    const notas = getNotas(escola[numT]); // Obtém as notas da turma
    return notas.reduce( (acum, nota) => {
        return acum + nota
    }, 0); // Soma as notas
}

console.log(getNotasTurma(0)); // Exibe a soma das notas da turma1
console.log(getNotasTurma(1)); // Exibe a soma das notas da turma2