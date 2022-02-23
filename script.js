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