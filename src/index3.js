//Colocando relógio no footer
let relogio = document.getElementById("relogio")

setInterval(function(){
    let date = new Date();
    relogio.innerText = date.toLocaleString();
}, 1000);