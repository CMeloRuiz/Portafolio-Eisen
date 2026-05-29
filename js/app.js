const avatar1 = document.getElementById("avatar1");
const avatar2 = document.getElementById("avatar2");

avatar1.addEventListener("click", () => {

    speechSynthesis.cancel();

    const texto = `
    Implementación de LanguageTool como herramienta tecnológica y pedagógica
    para fortalecer la producción de textos coherentes y cohesivos en
    estudiantes de grado noveno.

    Autores.

    Laura Ximena Gómez Ruiz.

    Eisenhower Berley Restrepo Maldonado.

    Directora del trabajo de grado.

    Liris Múnera.
    `;

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-CO";
    voz.rate = 0.95;

    speechSynthesis.speak(voz);
});

avatar2.addEventListener("click", () => {

    speechSynthesis.cancel();

    const texto = `
    La investigación aborda las dificultades que presentan los estudiantes
    de noveno grado en la producción de textos coherentes y cohesivos.

    Entre las causas se encuentran la falta de hábitos de lectura y escritura,
    el escaso dominio de normas gramaticales y ortográficas, un vocabulario
    limitado y la desmotivación hacia la escritura académica.

    Como solución se propone implementar LanguageTool como estrategia
    tecnológica y pedagógica para fortalecer las competencias de escritura.
    `;

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-CO";
    voz.rate = 0.95;

    speechSynthesis.speak(voz);
});