function audioPlayer() {

    const audio = document.getElementById("audio")
    const play = document.getElementById("playAudio")
    const control = document.getElementById("controlAudio")
    const tenSeconds = document.getElementById("tenSecondsAudio")
    const thirtySeconds = document.getElementById("thirtySecondsAudio")
    let audioDuration



    // creo un evento para tomar la duración del audio

      audio.addEventListener("loadeddata", (e) =>{
        audioDuration = e.target.duration
    })


    // función para pausar y adelantar el audio

    play.onclick = () => {         
        if(audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    // función para retroceder 10 segundos

    tenSeconds.onclick = () => {                             
        audio.currentTime = audio.currentTime-10
    }

    // función para avanzar 30 segundos 

    thirtySeconds.onclick = () => {
        audio.currentTime = audio.currentTime+30   
    }
    

    //ESTO DA ERROR PREGUNTAR

    // Controla el moviento de la barra de progreso para que la podamos posicionar donde queramos
    control.oninput = (e) => {
        audio.currentTime = (audioDuration/100)*e.target.value; // divido la duracion entre 10 para obtener el porcentaje
         // multiplico el porcentaje por e.target.value para que me de el porcentaje donde se debe colocar el
    }
    




    


}

export default audioPlayer