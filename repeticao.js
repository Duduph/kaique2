let tentativas = 0
let tabuada=""
for (let i = 0; i <= 10; i++) {
    tabuada += "<p>2x" + i + "=" + (2 * i) + "<p>"
}
document.getElementById("tabuada").innerHTML = tabuada

function adivinhacao() {
    let sugestaoNumero = parseInt(document.getElementById("numero").value)
    let numero = 5
    let aviso = document.getElementById("aviso")
    let sugestao = document.getElementById("sugestao")

    while (sugestaoNumero !== numero) {
        aviso.innerHTML = "tentativa" + (tentativas++) + 
        "<p> numero errado! tente novamente.</p>"

        if(numero>sugestaoNumero){
            sugestao.innerHTML = "o numero é maior que sugeriu"

        }
        else{
            sugestao.innerHTML = "o numero é menor que sugeriu"
        }
        sugestaoNumero.value = ""
        return
    }
    sugestao.innerHTML = ""
    aviso.innerHTML = "parabéns!! você acertou!!!"}