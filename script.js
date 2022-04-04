// ---------------- DESAFIO 01 ----------------
function desafio_01(){
    alert('Traductor de palabras o frases humanas al lenguaje de ballena');

    // DECLARACION DE LAS VARIABLES
    let input = prompt('Ingrese una frase o palabra:');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    let resultArray = [];
    let resultString = '';
    console.log(parseInt(input));


    // VERIFICAMOS QUE SE INGRESE SOLO TEXTO
    while(!isNaN(input)){
      input = (prompt('Por favor, ingrese solo texto y no números')).toLowerCase();
    }

    let inputLoweCase = input.toLocaleLowerCase();


    // RECORREMOS LA PALABRA O FRASE Y EXTRAEMOS SOLO LAS VOCALES
    for(let iInput = 0; iInput < input.length; iInput++){
      // console.log('iInput is: ' + iInput);
      if(inputLoweCase[iInput] == 'e' || inputLoweCase[iInput] == 'é'){
        resultArray.push(inputLoweCase[iInput]);
      }
      if(inputLoweCase[iInput] == 'u' || inputLoweCase[iInput] == 'ú'){
        resultArray.push(inputLoweCase[iInput]);
      }

      for(let iVowels = 0; iVowels < vowels.length; iVowels++){
        // console.log('iVowels is: ' + iVowels);
        if(inputLoweCase[iInput] === vowels[iVowels]){
          // console.log(input[iInput]);
          resultArray.push(inputLoweCase[iInput]);
        }
      }
    }


    // OBTENEMOS E IMPRIMIMOS LOS RESULTADOS
    resultString = (resultArray.join('')).toUpperCase();
    alert(`Mensaje traducido:\n${input} -> ${resultString}`);
}
// --------------------------------------------



// ---------------- DESAFIO 02 ----------------
function desafio_02(){
  alert('DESAFIO 02 \nJUGUEMOS A PIEDRA, PAPEL O TIJERA');

  
  //Código secreto
  const secretCheat = 'bomba';

  
  //Se obtiene la respuesta del usuario
  let userInput = (prompt('Escribe una opción: \nPiedra \nPapel \nTijera')).toLowerCase();

  
  //Se obtiene y verifica la respuesta del usuario
  while(userInput != 'piedra' && userInput != 'papel' && userInput != 'tijera' && userInput != secretCheat){
      userInput = prompt('Por favor, ingrese solo una de las opciones \nPiedra \nPapel \nTijera');
      console.log(userInput);
      userInput = userInput.toLowerCase();
  }

  if (userInput === secretCheat){
    alert('Código Secreto Activado');
  }


  //Funcion que obtiene el resultado de la computadora
  const getComputerChoice = () => {
    const computerChoices = ['piedra', 'papel', 'tijera'];
    let randomNumber = Math.floor(Math.random() * 2.99);
    return computerChoices[randomNumber];
  };

  
  //Funcion para que determina el ganador
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice == secretCheat){
      return 'BOOOOOOOOOOM!!!\Has ganado, los robots dejan la tierra'
    }
  
    if(userChoice == computerChoice){
      return 'Es un empate ... pero ambos sabemos que yo gane';
      }
    
    if (userChoice == 'piedra'){
      if (computerChoice == 'papel'){
        return 'He ganado con astucia y paciencia';
      } else {
        return '¿Me ganaste? seguro viste mi mano antes';
      }
    }
  
    if (userChoice == 'papel'){
      if (computerChoice == 'piedra'){
        return '¿Me ganaste? seguro viste mi mano antes'
      } else {
        return 'He ganado con astucia y paciencia';
      }
    }
  
    if (userChoice == 'tijera'){
      if (computerChoice == 'piedra'){
        return 'He ganado con astucia y paciencia';
      } else {
        return '¿Me ganaste? seguro viste mi mano antes'
      }
    }
  }


  //Funcion que ejecuta el juego
  const playGame = () => {
    let userChoice = userInput;
    console.log(userInput);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    alert(`Resultados:\n${userChoice.toUpperCase()}(Usuario) <--> ${computerChoice.toUpperCase()}(Computadora)`)
    console.log('------------------')
    return determineWinner(userChoice, computerChoice);
  }

  alert(playGame());
}
// --------------------------------------------



// -------- DESAFIO 03 --------
function desafio_03(){
  //VARIABLES
  const animalesPersona = ['Animal 1', 'Animal 2', 'Nombre de Persona'];
  const verbosPalabra = ['Verbo 1', 'Verbo 2', 'Cualquier Palabra', 'Frase motivadora'];

  // FUNCION PARA CAPITALIZAR LA PRIMERA LETRA
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // MENSAJES
  alert('Completaremos una historia, para lo cual necesitaremos que ingreses texto según te pidamos');
  
  // PEDIMOS Y VERIFICAMOS LOS TEXTOS INGRESADOS
  for (let index = 0; index < animalesPersona.length; index++) {
    let tempData = prompt('Ingrese el texto que se pide: ' + animalesPersona[index]);
    
      if(!isNaN(tempData)){
        while(!isNaN(tempData)){
          tempData = prompt('Por favor, ingrese no ingrese números, solo texto el que se pide: ' + animalesPersona[index]);
        }
    }

    animalesPersona[index] = tempData;
  }

  // PEDIMOS Y VERIFICAMOS LOS TEXTOS INGRESADOS
  for (let index = 0; index < verbosPalabra.length; index++) {
    let tempData = prompt('Ingrese el texto que se pide: ' + verbosPalabra[index]);
    
      if(!isNaN(tempData)){
        while(!isNaN(tempData)){
          tempData = prompt('Por favor, ingrese no ingrese números, solo texto el que se pide: ' + verbosPalabra[index]);
        }
    }

    verbosPalabra[index] = tempData;
  }

  // MOSTRAMOS LOS ELEMENTOS QUE SE PUESIERON
  let arrayComb = animalesPersona.concat(verbosPalabra);
  alert('Se creo correctamente la historia con los siguientes textos:\n ' + arrayComb.join(', '));

  // SE MODIFICA LA HISTORIA ACCEDIENDO A LOS ELEMENTOS DE LOS ARRAYS  
  alert(`Un ${animalesPersona[0]} se estaba burlando del ${animalesPersona[1]} sin motivo alguno. "Eres más lento que patada de astronauta" dijo con una risa burlona. ${capitalizeFirstLetter(animalesPersona[2])}, quien era dueño del ${animalesPersona[1]} no hizo caso y siguio realizando lo que le apasionaba, ${verbosPalabra[0]}. \nPero el ${animalesPersona[0]} seguia molestandolo. "Tu mamá tiene tan mala punteria que tiro una piedra al suelo ... y fallo". Molesto ya, ${capitalizeFirstLetter(animalesPersona[2])} decidio persuadirle para que ya no molestara a su mascota. \n"Tengo mariposas en el estomago ... a no ... es hambre" dijo el ${animalesPersona[0]}. Te haré una carrera y te demostraré que soy mejor de lo que piensas, respondió el ${animalesPersona[1]}, asi que el ${animalesPersona[0]} acepto el reto por diversión. Entonces ${capitalizeFirstLetter(animalesPersona[2])} decidio actuar como juez, marcó la distancia y gritó, ${verbosPalabra[2]}¡¡¡, y enseguida los animales corrieron. \nEl ${animalesPersona[0]} pronto se perdió de vista, y para hacer sentir mal al ${animalesPersona[1]}, se salió del camino y se puso a practicar su hobbie,  ${verbosPalabra[1]}, y lo hizo durante muchas horas seguidas sin parar. Mientras tanto, el ${animalesPersona[1]} motivado por su diferencia siguió avanzando lenta pero constantemente. En cuestión unas horas llego al lugar donde estaba el ${animalesPersona[0]}, quien estaba totalmente perdido en ${verbosPalabra[1]}. \nEl ${animalesPersona[0]} estaba tan atrapado en ${verbosPalabra[1]}; que cuando por fin se dio cuenta, el ${animalesPersona[1]} estaba cerca de la meta. El ${animalesPersona[0]} ahora corrió más rápido, pero no pudo alcanzar al ${animalesPersona[1]} a tiempo. \n\nMoraleja: ${verbosPalabra[3]}`);

}



// ---------------- DESAFIO 04 ----------------
  // DOM elements
  const gritterForm = document.getElementById('gritter-form');

  function addGreet(event) {
      event.preventDefault();
      const greet = gritterForm.greet.value;
      const newGreetLi = document.createElement('li');
      const newGreetAvatar = document.createElement('div');
      newGreetAvatar.className = "avatar";
      const newGreetText = document.createElement('span');
      newGreetText.innerText = greet;
      const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
      const newerGreetLi = greets.appendChild(newGreetLi);
      newerGreetLi.appendChild(newGreetAvatar);
      newerGreetLi.appendChild(newGreetText);
      gritterForm.greet.value = "";
  }

// add event handlers when mouse events are triggered
gritterForm.onsubmit = addGreet;



// ---------------- DESAFIO FETCH ----------------
function desafio_Fetch(){
  fetch('./names.json').then(function(response) {
    return response.json();
  }).then(function(data){
    console.log(data);
    alert("Se imprimio el archivo JSON en la consola");
  });
}
