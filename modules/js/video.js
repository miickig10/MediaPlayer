function videoPlayer (){
    // llamamos a los elementos html

const video = document.getElementById("video")
const videoContainer = document.getElementById("video-container")
const play = document.getElementById("play")
const control = document.getElementById("control")
const tenSeconds = document.getElementById("tenSeconds")
const thirtySeconds = document.getElementById("thirtySeconds")
const fullScreen = document.getElementById("fullScreen")
let duration;

let onFullScreen = false;

// Remmovemos los controles por defecto
video.removeAttribute("controls") 

// creo un evento para tomar la duración
video.addEventListener("loadeddata", (e) =>{
    duration = e.target.duration
})


// Evento para tomar el porcentage de video que pasó. 
video.addEventListener("timeupdate", (e) => {
   const percentage = (e.target.currentTime/duration)*100  // sacamos la proporcion de tiempo que paso entre la cantidad de tiempo que paso y la duración total del video. Despues lo multiplico por 100 para sacar el porcentage.

   control.value = percentage;  // La barra de progreso avanza de acuerdo al porcentage de abance del video
})

// Controla el moviento de la barra de progreso para que la podamos posicionar donde queramos
control.oninput = (e) => {
    video.currentTime = (duration/100) * e.target.value; // divido la duracion entre 10 para obtener el porcentaje
    // multiplico el porcentaje por e.target.value para que me de el porcentaje donde se debe colocar el
}

// función que adelanta el video 30 segundos
thirtySeconds.onclick = () => {
    video.currentTime = video.currentTime+30   
}

// Función que retrocede el video 10 segundos
tenSeconds.onclick = () => {
    video.currentTime = video.currentTime-10
}

// Función para hacer la pantalla completa

fullScreen.onclick = () => {
    if (onFullScreen){
        onFullScreen = false;
        document.exitFullscreen()

    }else {
        onFullScreen = true;
        videoContainer.requestFullscreen()
    }
    
}


// función para dar play and stop a nuestro video

play.onclick = () => {         
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

}


export default videoPlayer
