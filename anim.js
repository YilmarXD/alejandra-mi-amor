// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You and me always forever", time: 12 },
  { text: "We could stay alone together", time: 18 },
  { text: "You and me always forever", time: 24 },
  { text: "Say you'll stay never be separate", time: 28.5 },
  { text: "You know you've got me in your pocket", time: 41 },
  { text: "You don't just have to wait around", time: 47 },
  { text: "You know I keep you in my locket", time: 53 },
  { text: "Just come here and we can settle down", time: 58},
  { text: "You and me always forever", time: 76 },
  { text: "We could stay alone together", time: 82 },
  { text: "Hard to say things could be better", time: 87 },
  { text: "Darling don't get away right now", time: 94 },
  { text: "You know you've got me in your pocket", time: 106 },
  { text: "You don't just have to wait around", time: 112 },
  { text: "You know I keep you in my locket", time: 118 },
  { text: "Just come here and we can settle down", time: 122 },
  { text: "Oh, darling, it's alarming thing to think of us apart", time: 129 },
  { text: "te amo mucho alejandra:3", time:135},
  { text: "You know you've got me in your pocket", time: 139 },
  { text: "You don't just have to wait around", time: 147 },
  { text: "You know I keep you in my locket", time: 152 },
  { text: "Just come here and we can settle down", time: 158 },
  { text: "You and me always forever", time: 165 },
  { text: "We could stay alone together", time: 169 },
  { text: "You and me always forever", time: 176 },
  { text: "We could stay alone together", time: 182 },
  { text: "You and me always forever", time: 188 },
  { text: "We could stay alone together", time: 192 },
  { text: "te amo demasiado ale<3", time: 197 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);