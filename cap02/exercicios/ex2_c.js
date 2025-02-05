const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 2.5
    const desconto = preco * 0.5

    resp1.innerText = `${nome} - Promoção leve 3 por R$${promocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$:${desconto.toFixed(2)}`

    e.preventDefault()
})