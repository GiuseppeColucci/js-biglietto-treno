var percorso=prompt('distanza da percorrere in km');
var etàUtente=prompt('quanti anni hai');

var costoBiglietto= 0.21;
var prezzobiglietto=(percorso * costoBiglietto);

var scontoMinori= prezzobiglietto * 20 /100;
var prezzoMinori=prezzobiglietto - scontoMinori;

var scontoOver=prezzobiglietto * 40 /100;
var prezzoOver=prezzobiglietto - scontoOver;


if (etàUtente < 18){
    alert(prezzoMinori);
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzoMinori;
    
}


else if(etàUtente > 65){
    alert(prezzoOver);
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzoOver;
}

else{
    alert(prezzobiglietto)
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzobiglietto;
}






/*
arrotondamento
*/
