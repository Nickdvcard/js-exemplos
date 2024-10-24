console.log("1)", 1 == "1")
console.log("2)", 1 === "1")

function oquevaicomprar (t1, t2) {
    const tv50 = t1 && t2;
    const tv30 = t1 != t2;
    const sorvete = t1 || t2;
    const saudavel = !sorvete;

    return {tv50, tv30, sorvete, saudavel}
}

var resultados = oquevaicomprar(true, true);
console.log(resultados)
console.log(resultados.tv50)
console.log(typeof(resultados))

var [a, b, c, d] = [1, 2, 3, 4]
console.log(b)
