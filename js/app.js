const btnProfesor = document.getElementById("avatar1");
const btnProfesora = document.getElementById("avatar2");

let reproduciendoProfesor = false;
let reproduciendoProfesora = false;
let vocesDisponibles = [];

speechSynthesis.onvoiceschanged = () => {
    vocesDisponibles = speechSynthesis.getVoices();
};

const profesorAnimation = lottie.loadAnimation({
    container: document.getElementById("profesorAvatar"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/avatars/profesor.json"
});

const profesoraAnimation = lottie.loadAnimation({
    container: document.getElementById("profesoraAvatar"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/avatars/profesora.json"
});

function botonPlay(texto) {

    return `
        <i class="fa-solid fa-play"></i>
        ${texto}
    `;

}

function botonStop(texto) {

    return `
        <i class="fa-solid fa-stop"></i>
        ${texto}
    `;

}

function detenerTodo() {

    detenerReproduccion();

    reproduciendoProfesor = false;
    reproduciendoProfesora = false;

    btnProfesor.innerHTML = botonPlay("Escuchar Presentación");
    btnProfesora.innerHTML = botonPlay("Escuchar Explicación");

}

function hablar(texto, avatar, tipo) {

    detenerReproduccion();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";
    voz.rate = 0.95;
    voz.pitch = 1;

    if (tipo === "profesor") {
        voz.voice = obtenerVozMasculina();
    }

    if (tipo === "profesora") {
        voz.voice = obtenerVozFemenina();
    }

    avatar.play();

    voz.onend = () => {

            avatar.stop();

    if (tipo === "profesor") {

        reproduciendoProfesor = false;
        btnProfesor.innerHTML = botonPlay("Escuchar Presentación");

    }

    if (tipo === "profesora") {

        reproduciendoProfesora = false;
        btnProfesora.innerHTML = botonPlay("Escuchar Explicación");
    }

    };

    speechSynthesis.speak(voz);

}

function detenerReproduccion() {

    speechSynthesis.cancel();

    profesorAnimation.stop();
    profesoraAnimation.stop();

}

function obtenerVozMasculina() {
    return vocesDisponibles.find(
        v => v.name === "Microsoft Pablo - Spanish (Spain)")
}

function obtenerVozFemenina() {
    return vocesDisponibles.find(
        v => v.name === "Microsoft Laura - Spanish (Spain)")
}

btnProfesor.addEventListener("click", () => {

    if (reproduciendoProfesor) {

        detenerTodo();
        return;

    }

    reproduciendoProfesor = true;

    btnProfesor.innerHTML = botonStop("Parar Presentación");

    hablar(
        `Bienvenidos.

        El título de este trabajo es Implementación de LanguageTool como herramienta tecnológica y pedagógica para fortalecer la producción de textos coherentes y cohesivos en estudiantes de grado noveno de la Institución Educativa Ignacio Pescador de Choachí, Cundinamarca.

        Los autores son Laura Ximena Gómez Ruiz y Eisenhower Berley Restrepo Maldonado.

        La directora del trabajo de grado es Liris Múnera.`,
        profesorAnimation,
        "profesor"
    );

});

btnProfesora.addEventListener("click", () => {

    if (reproduciendoProfesora) {

        detenerTodo();
        return;

    }

    reproduciendoProfesora = true;

    btnProfesora.innerHTML = botonStop("Parar Explicación");

    hablar(
        `La investigación aborda las dificultades que presentan los estudiantes de noveno grado en la producción de textos coherentes y cohesivos.

        Entre las principales causas se encuentran la falta de hábitos de lectura y escritura, el escaso dominio de normas gramaticales y ortográficas, un vocabulario limitado y la desmotivación hacia la escritura académica.

        Frente a esta situación se propone implementar LanguageTool como una estrategia tecnológica y pedagógica que contribuya al fortalecimiento de las competencias de escritura.`,
        profesoraAnimation,
        "profesora"
    );

});

speechSynthesis.getVoices();

