function inversao(texto) {
    let o = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        o += texto[i];
    }
    return o;
}

console.log(inversao("A base do teto desaba"));