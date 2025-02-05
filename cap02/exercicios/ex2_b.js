const frm = document.querySelector("form")
const preco = document.getElementById("outPreco")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const pagar = Math.ceil(tempo / 15) * valor

    preco.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`

    e.preventDefault()
})