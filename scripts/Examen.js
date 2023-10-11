// Joaquín Sánchez Miravalles
// 

document.addEventListener("DOMContentLoaded", () => {

    const calculateButton = document.getElementById("Boton");
    const resultadoA = document.getElementById("ResultadoA");
    const resultadoP = document.getElementById("ResultadoP");
    const resultadoD = document.getElementById("ResultadoD");

    calculateButton.addEventListener("click",  () => {
        // Obtenemos el "Largo" del rectángulo
        const longitud = parseFloat(document.getElementById("Longitud").value);
        // Obtenemos el "Ancho" del rectángulo
        const ancho = parseFloat(document.getElementById("Ancho").value);

        if (!isNaN(longitud) && !isNaN(ancho)) {
            // Calculamos el área del rectángulo
            const a = longitud * ancho;
            // Hacemos que el área tenga solo dos decimales
            const area = a.toFixed(2);
            // Calculamos el perímetro del rectángulo
            const p = (longitud + longitud) + (ancho + ancho);
            // Hacemos que el perímetro tenga solo 2 decimales
            const perimetro = p.toFixed(2);
            // Calculamos la diagonal del rectángulo
            const d = Math.sqrt((longitud * longitud) + (ancho * ancho));
            // Hacemos que la diagonal tenga solo 2 decimales
            const diagonal = d.toFixed(2);

            // Mostramos el área del rectángulo
            resultadoA.innerHTML = `Área del rectángulo: ${area}`;
            // Mostramos el perímetro del rectángulo
            resultadoP.innerHTML = `El perímetro del rectángulo es: ${perimetro}`;
            // Mostramos la diagonal del rectángulo
            resultadoD.innerHTML = `La diagonal del rectángulo es: ${diagonal}`;
        }
        else {
            // Mensaje para cunado algun valor no este introduzido / No sea un número
            resultadoA.innerHTML = "Por favor, ingrese valores válidos.";
            // Borramos el contenido del resultado del perímetro
            resultadoP.innerHTML = "";
            // Borramos el contenido del resultado de la diagonal
            resultadoD.innerHTML = "";
        }       
    });
});
