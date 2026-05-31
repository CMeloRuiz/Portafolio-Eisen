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

const speech1 = document.getElementById("speech1");
const speech2 = document.getElementById("speech2");

function detenerTodo() {

    speechSynthesis.cancel();

    profesorAnimation.stop();
    profesoraAnimation.stop();

}

// function hablar(texto, avatar, bubble) {

//     detenerTodo();

//     bubble.textContent = texto;

//     avatar.play();

//     const voz = new SpeechSynthesisUtterance(texto);

//     voz.lang = "es-CO";
//     voz.rate = 0.92;
//     voz.pitch = 1;

//     voz.onend = () => {

//         avatar.stop();

//     };

//     speechSynthesis.speak(voz);

// }

function hablar(texto, avatar, bubble, tipo) {

    detenerTodo();

    bubble.textContent = texto;

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
    };

    speechSynthesis.speak(voz);

}

document
    .getElementById("avatar1")
    .addEventListener("click", () => {

        hablar(
            `Bienvenidos.

            El título de este trabajo es Implementación de LanguageTool como herramienta tecnológica y pedagógica para fortalecer la producción de textos coherentes y cohesivos en estudiantes de grado noveno de la Institución Educativa Ignacio Pescador de Choachí, Cundinamarca.

            Los autores son Laura Ximena Gómez Ruiz y Eisenhower Berley Restrepo Maldonado.

            La directora del trabajo de grado es Liris Múnera.`,
            profesorAnimation,
            speech1,
            "profesor"
        );

    });

document
    .getElementById("avatar2")
    .addEventListener("click", () => {

        hablar(
            `La investigación aborda las dificultades que presentan los estudiantes de noveno grado en la producción de textos coherentes y cohesivos.

            Entre las principales causas se encuentran la falta de hábitos de lectura y escritura, el escaso dominio de normas gramaticales y ortográficas, un vocabulario limitado y la desmotivación hacia la escritura académica.

            Frente a esta situación se propone implementar LanguageTool como una estrategia tecnológica y pedagógica que contribuya al fortalecimiento de las competencias de escritura.`,
            profesoraAnimation,
            speech2,
            "profesora"
        );

    });

function obtenerVozMasculina() {
    return speechSynthesis
        .getVoices()
        .find(v => v.name === "Microsoft Pablo - Spanish (Spain)");
}

function obtenerVozFemenina() {
    return speechSynthesis
        .getVoices()
        .find(v => v.name === "Microsoft Laura - Spanish (Spain)");
}

