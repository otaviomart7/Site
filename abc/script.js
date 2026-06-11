function calcular(){
    var nascimento = document.getElementById("ano").value
    var res = document.getElementById("res")
    var resposta = 2026 - nascimento
    res.textContent = resposta
}