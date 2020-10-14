var percorso=prompt('distanza da percorrere in km');
var etàUtente=prompt('quanti anni hai');

var costoBiglietto= 0.21;
var prezzobiglietto=(percorso * costoBiglietto);

var scontoMinori= prezzobiglietto * 20 /100;
var prezzoMinori=prezzobiglietto - scontoMinori;

var scontoOver=prezzobiglietto * 40 /100;
var prezzoOver=prezzobiglietto - scontoOver;


if (etàUtente < 18)
alert(prezzoMinori)


else if(etàUtente > 65)
alert(prezzoOver)

// if (etàUtente <18)
// alert(prezzobiglietto - scontoMinorenni)

// alert('costo totale '+ prezzobiglietto+' euro');

document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzoMinori;
document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzoOver;
