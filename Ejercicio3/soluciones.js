// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function getRandomNumber(minimo, maximo) {
  if (typeof minimo != 'number' || typeof maximo != 'number') {
    return 'El mínimo y el máximo deben ser elementos de tipo number'
  }
  return Math.round(Math.random() * (maximo - minimo) + minimo)
} 

getRandomNumber(501, 600)

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function esCapicua(numero){
  if (typeof numero != 'number') {
    return 'Necesito un número para evaluar si es capicua.'
  }
  if (numero.toString().split('').reverse().join('') == numero.toString()) {
    return true;
  } else {
    return false;
  }
}

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(numero){
  let factorial = 1;
  for (let i = 1; i <= numero; i++){
    factorial = factorial * i;
  }
  return factorial;
}
