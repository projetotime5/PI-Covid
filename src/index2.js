//UF

fetch("https://covid19-brazil-api.now.sh/api/report/v1")

.then(function(response){
    return response.json()

})

.then(function(response){
    let dados = response.data

    let confirmedSP = (dados[0].cases)
    let confirmedCE = (dados[1].cases)
    let confirmedRJ = (dados[2].cases)
    let confirmedPA = (dados[3].cases)
    let confirmedMA = (dados[4].cases)
    let confirmedBA = (dados[5].cases)
    let confirmedAM = (dados[6].cases)
    let confirmedPE = (dados[7].cases)
    let confirmedDF = (dados[8].cases)
    let confirmedMG = (dados[9].cases)
    let confirmedES = (dados[10].cases)
    let confirmedPB = (dados[11].cases)
    let confirmedAL = (dados[12].cases)
    let confirmedRN = (dados[13].cases)
    let confirmedSC = (dados[14].cases)
    let confirmedPR = (dados[15].cases)
    let confirmedRS = (dados[16].cases)
    let confirmedSE = (dados[17].cases)
    let confirmedGO = (dados[18].cases)
    let confirmedAP = (dados[19].cases)
    let confirmedPI = (dados[20].cases)
    let confirmedRO = (dados[21].cases)
    let confirmedMT = (dados[22].cases)
    let confirmedRR = (dados[23].cases)
    let confirmedAC = (dados[24].cases)
    let confirmedTO = (dados[25].cases)
    let confirmedMS = (dados[26].cases) 

    confirmedSP = confirmedSP.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-SP")
    cases.innerText = confirmedSP

    confirmedCE = confirmedCE.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-CE")
    cases.innerText = confirmedCE

    confirmedRJ = confirmedRJ.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-RJ")
    cases.innerText = confirmedRJ

    confirmedPA = confirmedPA.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-PA")
    cases.innerText = confirmedPA

    confirmedMA = confirmedMA.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-MA")
    cases.innerText = confirmedMA

    confirmedBA = confirmedBA.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-BA")
    cases.innerText = confirmedBA

    confirmedAM = confirmedAM.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-AM")
    cases.innerText = confirmedAM

    confirmedPE = confirmedPE.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-PE")
    cases.innerText = confirmedPE

    confirmedDF = confirmedDF.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-DF")
    cases.innerText = confirmedDF

    confirmedMG = confirmedMG.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-MG")
    cases.innerText = confirmedMG

    confirmedES = confirmedES.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-ES")
    cases.innerText = confirmedES

    confirmedPB = confirmedPB.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-PB")
    cases.innerText = confirmedPB

    confirmedAL = confirmedAL.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-AL")
    cases.innerText = confirmedAL

    confirmedRN = confirmedRN.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-RN")
    cases.innerText = confirmedRN

    confirmedSC = confirmedSC.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-SC")
    cases.innerText = confirmedSC

    confirmedPR = confirmedPR.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-PR")
    cases.innerText = confirmedPR

    confirmedRS = confirmedRS.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-RS")
    cases.innerText = confirmedRS

    confirmedSE = confirmedSE.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-SE")
    cases.innerText = confirmedSE
    
    confirmedGO = confirmedGO.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-GO")
    cases.innerText = confirmedGO

    confirmedAP = confirmedAP.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-AP")
    cases.innerText = confirmedAP

    confirmedPI = confirmedPI.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-PI")
    cases.innerText = confirmedPI

    confirmedRO = confirmedRO.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-RO")
    cases.innerText = confirmedRO

    confirmedMT = confirmedMT.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-MT")
    cases.innerText = confirmedMT

    confirmedRR = confirmedRR.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-RR")
    cases.innerText = confirmedRR

    confirmedAC = confirmedAC.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-AC")
    cases.innerText = confirmedAC

    confirmedTO = confirmedTO.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-TO")
    cases.innerText = confirmedTO


    confirmedMS = confirmedMS.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed-MS")
    cases.innerText = confirmedMS


    let deathsSP = (dados[0].deaths)
    let deathsCE = (dados[1].deaths)
    let deathsRJ = (dados[2].deaths)
    let deathsPA = (dados[3].deaths)
    let deathsMA = (dados[4].deaths)
    let deathsBA = (dados[5].deaths)
    let deathsAM = (dados[6].deaths)
    let deathsPE = (dados[7].deaths)
    let deathsDF = (dados[8].deaths)
    let deathsMG = (dados[9].deaths)
    let deathsES = (dados[10].deaths)
    let deathsPB = (dados[11].deaths)
    let deathsAL = (dados[12].deaths)
    let deathsRN = (dados[13].deaths)
    let deathsSC = (dados[14].deaths)
    let deathsPR = (dados[15].deaths)
    let deathsRS = (dados[16].deaths)
    let deathsSE = (dados[17].deaths)
    let deathsGO = (dados[18].deaths)
    let deathsAP = (dados[19].deaths)
    let deathsPI = (dados[20].deaths)
    let deathsRO = (dados[21].deaths)
    let deathsMT = (dados[22].deaths)
    let deathsRR = (dados[23].deaths)
    let deathsAC = (dados[24].deaths)
    let deathsTO = (dados[25].deaths)
    let deathsMS = (dados[26].deaths) 

    deathsSP = deathsSP.toLocaleString("pt-BR")
    deaths = document.querySelector ("#deaths-SP")
    deaths.innerText = deathsSP

    deathsCE = deathsCE.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-CE")
    deaths.innerText = deathsCE

    deathsRJ = deathsRJ.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-RJ")
    deaths.innerText = deathsRJ

    deathsPA = deathsPA.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-PA")
    deaths.innerText = deathsPA

    deathsMA = deathsMA.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-MA")
    deaths.innerText = deathsMA

    deathsBA = deathsBA.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-BA")
    deaths.innerText = deathsBA

    deathsAM = deathsAM.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-AM")
    deaths.innerText = deathsAM

    deathsPE = deathsPE.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-PE")
    deaths.innerText = deathsPE

    deathsDF = deathsDF.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-DF")
    deaths.innerText = deathsDF

    deathsMG = deathsMG.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-MG")
    deaths.innerText = deathsMG

    deathsES = deathsES.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-ES")
    deaths.innerText = deathsES

    deathsPB = deathsPB.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-PB")
    deaths.innerText = deathsPB

    deathsAL = deathsAL.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-AL")
    deaths.innerText = deathsAL

    deathsRN = deathsRN.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-RN")
    deaths.innerText = deathsRN

    deathsSC = deathsSC.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-SC")
    deaths.innerText = deathsSC

    deathsPR = deathsPR.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-PR")
    deaths.innerText = deathsPR

    deathsRS = deathsRS.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-RS")
    deaths.innerText = deathsRS

    deathsSE = deathsSE.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-SE")
    deaths.innerText = deathsSE
    
    deathsGO = deathsGO.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-GO")
    deaths.innerText = deathsGO

    deathsAP = deathsAP.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-AP")
    deaths.innerText = deathsAP

    deathsPI = deathsPI.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-PI")
    deaths.innerText = deathsPI

    deathsRO = deathsRO.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-RO")
    deaths.innerText = deathsRO

    deathsMT = deathsMT.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-MT")
    deaths.innerText = deathsMT

    deathsRR = deathsRR.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-RR")
    deaths.innerText = deathsRR

    deathsAC = deathsAC.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-AC")
    deaths.innerText = deathsAC

    deathsTO = deathsTO.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-TO")
    deaths.innerText = deathsTO

    deathsMS = deathsMS.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths-MS")
    deaths.innerText = deathsMS

})

.catch(function(error){
    console.error(error)
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






