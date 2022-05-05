function contarVogais(texto) {
    'use strict';
  
    if(typeof texto != 'string') {
      return false;
    }
  
    let count = 0;
    let pattern = /[aeiou]/i;
  
    for(let i = 0; i < texto.length; i++) {
      if(texto[i].match(pattern)) {
        count++;
      }
    }
  
    return count;
  }
  
  let sentence = 'Quantas vogais tem nesse texto';
  
  let output = contarVogais(sentence);
  
  console.log(output);