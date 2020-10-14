var percorso=prompt('distanza da percorrere in km');
var etàUtente=prompt('quanti anni hai');

var costoBiglietto= 0.21;
var prezzobiglietto=(percorso * costoBiglietto);

var scontoMinori= prezzobiglietto * 20 /100;
var prezzoMinori=prezzobiglietto - scontoMinori;
var sconto1=Math.ceil(prezzoMinori)


var scontoOver=prezzobiglietto * 40 /100;
var prezzoOver=prezzobiglietto - scontoOver;
var sconto2=Math.ceil(prezzoOver)

if (etàUtente < 18){
    alert('il costo totale è di euro '+ sconto1);
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ sconto1;
    
}


else if(etàUtente > 65){
    alert('il costo totale è di euro '+sconto2);
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ sconto2;
    
}

else{
    alert(prezzobiglietto)
    document.getElementById('biglietto').innerHTML= 'il prezzo totale è di euro '+ prezzobiglietto;
}







