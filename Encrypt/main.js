function encriptar() {
    // Obtener el contenido del textarea
    let textoOriginal = document.getElementById("texto").value;
    let sinMensaje = document.getElementById("sin-mensaje");
    let conMensaje = document.getElementById("con-mensaje");

    if (sinMensaje.style.display !=="none") {
        sinMensaje.style.display = "none";
        conMensaje.style.display = "block"
    }

    // Realizar las sustituciones necesarias
    let textoModificado = textoOriginal.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");

    // Actualizar el contenido del textarea con el texto modificado
    document.getElementById("textoListo").value = textoModificado;
}

function desencriptar() {
    // Obtener el contenido del textarea
    let textoEncriptado = document.getElementById("texto").value;
    let sinMensaje = document.getElementById("sin-mensaje");
    let conMensaje = document.getElementById("con-mensaje");

    if (sinMensaje.style.display !=="none") {
        sinMensaje.style.display = "none";
        conMensaje.style.display = "block"
    }

    // Realizar las sustituciones para desencriptar
    let textoOriginal = textoEncriptado.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");

    // Actualizar el contenido del textarea con el texto desencriptado
    document.getElementById("textoListo").value = textoOriginal;
}

function copiarTexto() {
    // Seleccionar el texto dentro del textarea
    let textarea = document.getElementById("textoListo");
    textarea.select();
    
    // Copiar el texto seleccionado
    document.execCommand("copy");
}
