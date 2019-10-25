
// document.getElementById('n1out').innerHTML = n1;

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var y = ["a", "b", "c", "d", "e"];
var invitato;

x = prompt("Inserisci il tuo nome")
console.log(x);
document.getElementById('xOut').innerHTML = "Il tuo nome è "+x;
for (var i = 0; i < y.length; i++) {
  if (x==y[i]) {
    invitato=1;
  }
}
if (invitato==1) {
  document.getElementById('invOut').innerHTML = x +" Sei stato invitato";
}else {
  document.getElementById('invOut').innerHTML = x +" Non sei stato invitato";
}
