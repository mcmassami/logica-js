const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${nome}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()
})