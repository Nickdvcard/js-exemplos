const nums = [10, 20, 30, 40, 50]

let dinheiro = e => {
    return `${parseFloat(e).toFixed(2).replace(".", ",")}`
}

let som10 = e => e + 10

let result = nums.map(som10).map(dinheiro);

console.log(result)

//d1

const carrinho = [
    {
        "nome": "Borracha",
        "preco": "20"
    },
    {
        "nome": "lapis",
        "preco": "10"
    }
]

console.log(typeof(carrinho))

let pegapreco = item => {
    return item.preco
}

let precos = carrinho.map(paraObj).map(pegapreco)

console.log(precos)