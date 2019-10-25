// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


var n1 =  parseFloat(prompt ("Inserisci il primo numero"));
document.getElementById('n1out').innerHTML = n1;
var n2 = parseFloat(prompt ("Inserisci il secondo numero"));
document.getElementById('n2out').innerHTML = n2;
var res;

// la verifica
if (n1>n2) {
  console.log("Il numero piu alto è : " + n1);
  res=n1;
} else if (n1<n2) {
  console.log("Il numero piu alto è : " + n2);
  res=n2;
} else {
  console.log("Sono dello stesso valore");
  alert("Sono dello stesso valore");
}

document.getElementById('result').innerHTML = res;
