function check(){
    var wasBorn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('age')

    if(isNaN(wasBorn)){
        res.textContent = 'Type Only Numbers ❌'
        res.style.color = 'red'
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

}