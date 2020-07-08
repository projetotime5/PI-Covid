
fetch("https://coronavirus-19-api.herokuapp.com/countries/world")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let confirmedMundo = response.cases
    let recoveredMundo = response.recovered
    let activeMundo = response.active
    let deathsMundo = response.deaths

    confirmedMundo = confirmedMundo.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed")
    cases.innerText = confirmedMundo
        
    recoveredMundo = recoveredMundo.toLocaleString("pt-BR")
    recovered = document.querySelector("#recovered")
    recovered.innerText = recoveredMundo
    
    activeMundo = activeMundo.toLocaleString("pt-BR")
    active = document.querySelector("#active")
    active.innerText = activeMundo
    
    deathsMundo = deathsMundo.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths")
    deaths.innerText = deathsMundo
    
})


// ======================================================================================================== //



fetch("https://coronavirus-19-api.herokuapp.com/countries/brazil")

.then(function(response){
    return response.json()
})

.then(function(response){

let confirmedBRA  = response.cases
let recoveredBRA = response.recovered
let activeBRA = response.active
let deathsBRA = response.deaths

confirmedBRA = confirmedBRA.toLocaleString("pt-BR")
cases = document.querySelector("#confirmedBRA")
cases.innerText = confirmedBRA
    
recoveredBRA = recoveredBRA.toLocaleString("pt-BR")
recovered = document.querySelector("#recoveredBRA")
recovered.innerText = recoveredBRA

activeBRA = activeBRA.toLocaleString("pt-BR")
active = document.querySelector("#activeBRA")
active.innerText = activeBRA

deathsBRA = deathsBRA.toLocaleString("pt-BR")
deaths = document.querySelector("#deathsBRA")
deaths.innerText = deathsBRA
})


// ======================================================================================================== //

fetch ("https://covid19-brazil-api.now.sh/api/status/v1")

.then(function(response){
    return response.json();
})

.then(function(response){


    let atualizaoGeral = new Date(response.date)

    date = document.querySelector("#atualizacao")
    date.innerText = atualizaoGeral
})