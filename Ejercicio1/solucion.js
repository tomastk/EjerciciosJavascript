// Ejercicio 1: 'Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.'

function contarCaracteres(palabra){
  if(typeof palabra === 'string'){
    return palabra.length;
  } else {
    return 'Por favor dame una cadena de texto'
  }
}

// Ejecicio 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function retornarTextoRecortado(texto, numerodeLetras){

  if (typeof texto != 'string' || typeof numerodeLetras != 'number'){
    return 'Por favor, dame una palabra y un número de letras'
  }
  return texto.slice(0, numerodeLetras);

}

// Ejercicio 3: 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function convertirEnArreglo(texto, separador){
  if (typeof texto != 'string' || typeof separador != 'string') {
    return 'Solo puedo convertir strings a arreglos.'
  }
  return texto.split(separador);
}

// Ejercicio 4: 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto, numeroDeVeces){
  if (typeof texto != 'string' || typeof numeroDeVeces != 'number'){
    return 'Por favor, dame un texto y el número de veces que lo quieres repetir'
  }
  let textoRepetido = [];
  for (let i = 0; i < numeroDeVeces; i++){
    textoRepetido.push(texto);
  }
  return textoRepetido.join(' ');
}