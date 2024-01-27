// Esta función se ejecuta cuando se carga el contenido del DOM
document.addEventListener('DOMContentLoaded', () => {
    alert('¡BIENVENIDO A MI PRIMER CHALLENGE!'); /* Muestra una alerta al usuario al cargar la página */
});

// Selecciona los elementos de entrada y salida de texto
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Agrega un event listener para convertir el texto de entrada a minúsculas y eliminar acentos
inputText.addEventListener('input', () => {
    inputText.value = inputText.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); /* Convierte el texto a minúsculas y elimina acentos */
    inputText.value = inputText.value.replace(/[^a-z\s]/g, ''); /* Elimina caracteres que no sean letras minúsculas o espacios */
});

// Agrega un event listener para encriptar el texto al hacer clic en el botón "Encriptar"
document.getElementById('encryptBtn').addEventListener('click', () => {
    outputText.value = encryptText(inputText.value); /* Encripta el texto de entrada y lo muestra en el área de salida */
});

// Agrega un event listener para desencriptar el texto al hacer clic en el botón "Desencriptar"
document.getElementById('decryptBtn').addEventListener('click', () => {
    outputText.value = decryptText(outputText.value); /* Desencripta el texto de salida y lo muestra en el área de salida */
});

// Agrega un event listener para copiar el texto de salida al portapapeles al hacer clic en el botón "Copiar Texto"
document.getElementById('copyBtn').addEventListener('click', () => {
    // Verifica si el texto de salida está vacío
    if (outputText.value.trim() === "") {
        // Muestra una alerta si no hay texto para copiar
        alert('¡Ups! Ningún texto que copiar.');
        return;
    }
    // Selecciona el texto de salida y lo copia al portapapeles
    outputText.select();
    document.execCommand('copy');
    // Muestra una alerta al usuario para indicar que el texto se copió con éxito
    alert('¡Texto copiado con éxito!');
    // Borra el texto de entrada
    inputText.value = '';
});

// Agrega un event listener para borrar el texto de salida al hacer clic en el botón "Borrar Texto"
document.getElementById('clearBtn').addEventListener('click', () => {
    // Borra el texto de salida
    outputText.value = '';
});

// Función para encriptar el texto
function encryptText(text) {
    // Define las sustituciones para encriptar el texto
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    // Aplica las sustituciones al texto de entrada y devuelve el texto encriptado
    return text.replace(/[eioua]/g, match => replacements[match]);
}

// Función para desencriptar el texto
function decryptText(text) {
    // Define las sustituciones para desencriptar el texto
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    // Aplica las sustituciones al texto de salida y devuelve el texto desencriptado
    return text.replace(/(enter|imes|ai|ober|ufat)/g, match => replacements[match]);
}
