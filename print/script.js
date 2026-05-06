function mostrar(){
    var texto = document.getElementById('i1').value
    var printTexto = document.getElementById('printTexto')
    

    var cor = document.getElementById('i2').value
    var printColor = document.getElementById('printColor')


    var  data = document.getElementById('i3').value
    var  printData = document.getElementById('printData')


    var  check = document.getElementById('i4').value
    var  printCheck = document.getElementById('printCheck')


    var apareca = document.getElementById('apareca')
    apareca.style.display = 'block'
    


    printTexto.textContent = `Seu nome é: ${texto}`
    printColor.innerHTML = `O Hexadécimal da sua cor é ${cor}`
    printData.innerText = `A sua data é: ${data}`
    printCheck.innerText = `Você escolheu: ${check}`



    console.log(texto, typeof texto)
    console.log(cor, typeof cor)
    console.log(data, typeof data)
    console.log(check, typeof check)
}