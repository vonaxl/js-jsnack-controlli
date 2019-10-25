
// document.getElementById('n1out').innerHTML = n1;

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var y=0, j=0, num, b;


while (j<5) {
  var x = parseFloat(prompt("Inserisci un valore"));
  console.log(x);

  b = document.getElementById('num').innerHTML;
  document.getElementById('num').innerHTML = b + "<li>"+x+"</li>";

  y=y+x;
  j++
}



// for (var i = 0; i < 5; i++) {
//   var x = parseInt(prompt("Inserisci un valore"));
//   console.log(x);
//   y=y+x;
// }
console.log("La somma di tutti i numeri inseriti : "+ y)
document.getElementById('ris').innerHTML = y;
