var percorso=prompt('distanza da percorrere in km');
var etàUtente=prompt('quanti anni hai');

var costoBiglietto= 0.21;
var prezzobiglietto=(percorso * costoBiglietto);

var scontoMinori= prezzobiglietto * 20 /100;
var prezzoMinori=prezzobiglietto - scontoMinori;
if (etàUtente < 18)
alert(prezzoMinori)
// if (etàUtente <18)
// alert(prezzobiglietto - scontoMinorenni)

// alert('costo totale '+ prezzobiglietto+' euro');

// document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzobiglietto;