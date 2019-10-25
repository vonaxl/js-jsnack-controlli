
// document.getElementById('n1out').innerHTML = n1;
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.
var n=[];
var i=0;
while (i<6) {

    var x = parseInt(prompt("Inserisci un numero"));
    if (x%2==0) {
        n.push(x);        
    }
    console.log(n);
    i++;
}