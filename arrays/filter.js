const produtos = [
    {nome: "a", preco: 180, fragile: true},
    {nome: "b", preco: 20, fragile: false}
]

let caro = prod => {
    return prod.preco > 100
}

let resist = prod => {
    return prod.fragile === false

    /* ou
    if (prod.fragile === false) {
        return true
    }
    */
}

let result = produtos.filter(caro).filter(resist)

console.log(result)