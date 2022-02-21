function mainFunc_1(){
    alert('Traductor de palabras o frases humanas al lenguaje de ballena');

    // DECLARACION DE LAS VARIABLES
    let input = prompt('Ingrese una frase o palabra:');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
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
      if(inputLoweCase[iInput] == 'e'){
        resultArray.push(inputLoweCase[iInput]);
      }
      if(inputLoweCase[iInput] == 'u'){
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