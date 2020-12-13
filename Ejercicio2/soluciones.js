// Invertir una cadena de texto

function invertir(cadena){
  if (typeof cadena != "string") {
    return 'Por favor, dame una cadena de texto'
  }
  let x = cadena.length;
  let cadenaInvertida = "";
  while (x >= 0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--
  }
  return cadenaInvertida;
}

// Obtener el número de veces que se repite una palabra en un texto

function obtenerRepeticiones(texto, palabra){
  if (typeof texto != 'string' && typeof palabra != "string") {
    return console.error('Necesito un texto y una palabra para buscar.')
  }
  let palabrasDelTexto = texto.split(' ');
  let contadorPalabras = 0;
  palabrasDelTexto.forEach(word => {
    if (palabra === word) {
      contadorPalabras++
    };
  })
  return contadorPalabras;
}

// Obtener si una frase o palabra es un palindromo o no

function esPalindromo(palabra){
  if (!typeof palabra === 'string'){
    return console.error('Lo ingresado no es una palabra')
  }
  if (palabra === invertir(palabra)) {
    return true;
  } else {
    return false;
  }
}

function eliminarCaracteres(frase, patron){
  if (!typeof frase === "string" && !typeof patron === 'string') {
    return 'Deberás darme un texto y un patrón correctos.'
  }
  return frase.split(patron).join("");
}