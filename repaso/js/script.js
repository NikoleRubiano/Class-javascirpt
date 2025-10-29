function iniciarJuego() {
   let botonMascotaJugador = document.getElementById("botonMascota");
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador); 
}






// alerta selector de mascota
function seleccionarMascotaJugador() {
    
    if(document.getElementById("Hipoge").checked) {
         mascotajugador.innerHTML = 'Hipodoge'
    } else if(document.getElementById("Capipepo").checked) {
         mascotajugador.innerHTML = 'Capipepo'
    } else if(document.getElementById("Ratigueya").checked) {
       mascotajugador.innerHTML = 'Ratigueya'
    }   
}

window.addEventListener('load', iniciarJuego);