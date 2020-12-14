// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function esPrimo(number){
  if (!typeof number === 'number'){
    return 'Solo puedo calcular si un número es primo.';
  }

  if (number === 0 || number === 1 || number == 4) {
    return false;
  }

  for (let x = 2; x < number / 2; x++) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function tipoDeNumero(number){
  if (typeof number != 'number'){
    return 'Dame un número'
  }

  if (number % 2 === 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function convertir(grados, tipo) {
  
  if (typeof grados != 'number') {
    return 'Los grados deberán ser números.'
  }

  let fahrenheit, celsius;
  
  switch (tipo.toUpperCase()) {
    case 'C':
      return convertirFahrenheit(grados);
      break;
    case 'F':
      return convertirCelsius(grados);
      break;
    default:
      return 'El tipo elegido es incorrecto, intentalo nuevamente'
  }

  function convertirFahrenheit(grados){
    fahrenheit = ((grados*9)/5)+32;
    return fahrenheit + '°F';
  }

  function convertirCelsius(grados){
    celsius = (grados - 32) * 5 / 9;
    return celsius.toFixed(1) + '°C';
  }

}