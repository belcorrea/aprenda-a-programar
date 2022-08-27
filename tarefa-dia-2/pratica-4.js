let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let nomeProdutoA = "Camiseta"

console.log(nomeProdutoA)

if (produtoA.internacional == true) {
    let valorImposto = produtoA.valor * 0.2

    console.log ("Produto é Internacional")
    console.log (valorImposto)
    
} else {
    let valorImposto = produtoA.valor * 0.12

    console.log("Produto é Nacional")
    console.log(valorImposto)

}

let nomeProdutoB = "Perfume"

console.log(nomeProdutoB)

if (produtoB.internacional == true) {
    let valorImposto = produtoB.valor * 0.20

    console.log("Produto é Internacional")
    console.log(valorImposto)

} else {
    let valorImposto = produtoB.valor * 0.12

    console.log("Produto é Nacional")
    console.log(valorImposto)
}

let nomeProdutoC = "Sandália"

console.log(nomeProdutoC)

if (produtoC.internacional == false) {
    let valorImposto = produtoC.valor * 0.20

    console.log("Produto é Internacional")
    console.log(valorImposto)

} else {
    let valorImposto = produtoC.valor * 0.12

    console.log("Produto é Nacional")
    console.log(valorImposto)
}
    