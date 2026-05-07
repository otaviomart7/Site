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

    if (age >= 18){
        res.textContent = 'Over 18, ALLOWED ✅'
        clientAge.textContent = `${age} Years Old`
        document.getElementById('v1').style.display = 'block'
        document.getElementById('v2').style.display = 'none'

    }else{
        res.textContent = 'Under 18, NOT ALLOWED 🔞'
        clientAge.textContent = age
        document.getElementById('v2').style.display = 'block'
        document.getElementById('v1').style.display = 'none'
    }

}