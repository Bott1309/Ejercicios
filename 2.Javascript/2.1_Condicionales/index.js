function verificarBelleza() {
    var respuesta = document.getElementById("cantidad").value;
    
    if (respuesta.toLowerCase() === "si" || respuesta === "sí" || respuesta === "Sí" || respuesta === "Si" || respuesta === "Si") {
      alert("Ciertamente");
    } else if (respuesta.toLowerCase() === "no" || respuesta === "No" || respuesta === "NO" || respuesta === "nO") {
      alert("No te creo");
    } else {
      alert("Respuesta inválida. Por favor, responde 'sí' o 'no'.");
    }
  }


  function verificarDivision() {
    var numero = parseInt(document.getElementById("Division").value);

    if (numero % 2 === 0) {
      alert(numero + " es divisible por 2");
    } else {
      alert(numero + " no es divisible por 2");
    }
  }


  function verificarParidad() {
    var numero = prompt("Introduce un número:");
    var parsedNumero = parseInt(numero);

    if (isNaN(parsedNumero)) {
      alert("Debes ingresar un número válido.");
    } else {
      if (parsedNumero % 2 === 0) {
        alert("El número " + parsedNumero + " es par.");
      } else {
        alert("El número " + parsedNumero + " es impar.");
      }
    }
  }