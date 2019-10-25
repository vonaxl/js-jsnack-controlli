
// document.getElementById('n1out').innerHTML = n1;
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var n1 = prompt("Inserisci la prima parola ");
// document.getElementById('n1out').innerHTML = n1;
var n2 = prompt("Inserisci la prima parola ");
// document.getElementById('n2out').innerHTML = n2;
var res,long;

// la verifica
if (n1.length>n2.length) {
  console.log("Il numero piu alto è : " + n1);
  res="Il primo valore che avevi inserito";
  long=1;
} else if (n1.length<n2.length) {
  console.log("Il numero piu alto è : " + n2);
  res="Il secondo valore che avevi inserito";
  long=2;
} else {
  console.log("Sono dello stesso valore");
  alert("Sono della stessa lunghezza");
}

if (long==1) {
  document.getElementById('n2out').innerHTML ="La parola piu corta è : " +n2;
  document.getElementById('n1out').innerHTML ="La parola piu lunga è : " +n1;

}else if (long==2) {
  document.getElementById('n1out').innerHTML ="La parola piu corta è : " +n1;  document.getElementById('n2out').innerHTML ="La parola piu corta è : " +n2;
}
document.getElementById('result').innerHTML = res;
