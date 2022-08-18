//Funciones

mostrarPiedra = () => {
  document.querySelector("#imgUsuario").src = "piedra.jpg";
  document.querySelector("#imgUsuario").value = "0";
};

mostrarPapel = () => {
  document.querySelector("#imgUsuario").src = "papel.jpg";
  document.querySelector("#imgUsuario").value = "1";
};

mostrarTijera = () => {
  document.querySelector("#imgUsuario").src = "tijera.jpg";
  document.querySelector("#imgUsuario").value = "2";
};

mostrarimgRandom = () => {
  let imagen = Math.floor(Math.random() * 3);
  switch (imagen) {
    case 0:
      document.querySelector("#imgMaquina").src = "piedra.jpg";
      document.querySelector("#imgMaquina").value = "0";
      break;
    case 1:
      document.querySelector("#imgMaquina").src = "papel.jpg";
      document.querySelector("#imgMaquina").value = "1";
    case 2:
      document.querySelector("#imgMaquina").src = "tijera.jpg";
      document.querySelector("#imgMaquina").value = "2";
      break;
  }
  return;
};

agregarPuntaje = () => {
  let selecUsuario;
  let selecMaquina;
  selecUsuario = document.querySelector("#imgUsuario").value;
  selecMaquina = document.querySelector("#imgMaquina").value;
  /*
  0 -> piedra
  1 -> papel
  2 -> tijera
  */
  if (selecUsuario == "0" && selecMaquina == "2") {
    aumentarMarcadorUsuario();
  } else if (selecUsuario == "1" && selecMaquina == "0") {
    aumentarMarcadorUsuario();
  } else if (selecUsuario == "2" && selecMaquina == "1") {
    aumentarMarcadorUsuario();
  } else if (selecMaquina == "0" && selecUsuario == "2") {
    aumentarMarcadorMaquina();
  } else if (selecMaquina == "1" && selecUsuario == "0") {
    aumentarMarcadorMaquina();
  } else if (selecMaquina == "2" && selecUsuario == "1") {
    aumentarMarcadorMaquina();
  }
  return;
};

let numero;
aumentarMarcadorUsuario = () => {
  numero = parseInt(document.getElementById("marcadorUsuario").innerHTML) + 1;
  document.getElementById("marcadorUsuario").innerHTML = numero;
  return;
};

aumentarMarcadorMaquina = () => {
  numero = parseInt(document.getElementById("marcadorMaquina").innerHTML) + 1;
  document.getElementById("marcadorMaquina").innerHTML = numero;
  return;
};

controlGanador = () => {
  let contador = parseInt(document.getElementById("marcadorUsuario").innerHTML);
  if (contador == 3) {
    alert("¡¡Felicidades, eres el ganador!!");
    resetearContadores();
    return;
  }

  contador = parseInt(document.getElementById("marcadorMaquina").innerHTML);
  if (contador == 3) {
    alert("¡¡Has perdido, inténtalo denuevo!!");
    resetearContadores();
    return;
  }
};

resetearContadores = () => {
  document.querySelector("#marcadorUsuario").innerHTML = "0";
  document.querySelector("#marcadorMaquina").innerHTML = "0";
};

correrLogica = () => {
  mostrarimgRandom();
  agregarPuntaje();
  setInterval(controlGanador, 1000);
};
