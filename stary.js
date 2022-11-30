
class product {
    constructor(id, nazwa, cena, ilosc) {
        this.id = id;
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
    }
}
class listaParagon {
    constructor() {
        this.lista = [];
	    this.rozm = 0;
	    this.poz = 0;
        this.DodajProduktH = dodajProduktH; 
        this.wypiszWszystkieProduktyL = wypiszWszystkieProdukty;
    }
}
function dodajProduktH(nazwa=null, cena=null, ilosc=null) {
    if(nazwa !== undefined && cena !== undefined && ilosc !== undefined){
        for(var i = 0; i <= this.rozm; i++){
            obj = new product(this.rozm,nazwa,cena,ilosc);
            this.lista[this.rozm++] =  obj;

            var tr = document.createElement("TR");
            tr.setAttribute("id", "myTr");
            document.getElementById("myTable").appendChild(tr);

            var z = document.createElement("TD");
            var t = document.createTextNode(obj.id);
            z.appendChild(t);
            document.getElementById("myTr").appendChild(z);

            var z1 = document.createElement("TD");
            var t1 = document.createTextNode(obj.nazwa);
            z1.appendChild(t1);
            document.getElementById("myTr").appendChild(z1);

            var z2 = document.createElement("TD");
            var t2 = document.createTextNode(obj.ilosc);
            z2.appendChild(t2);
            document.getElementById("myTr").appendChild(z2);

            var z3 = document.createElement("TD");
            var t3 = document.createTextNode(obj.cena);
            z3.appendChild(t3);
            document.getElementById("myTr").appendChild(z3);

            var z4 = document.createElement("TD");
            var t4 = document.createTextNode(obj.suma);
            z4.appendChild(t4);
            document.getElementById("myTr").appendChild(z4);
            return;
        }
   }
  }

this.deleteRecord = function(event) {
    let index = -1;
    for (let i = 0; i < this.records.length; i++) {
      if (event.target == this.records[i].buttonClose) {
        index = i;
        break;
      }
    }
    if (confirm("Are you sure you want to delete this record?")) {
      console.log(index);
      this.records.splice(index, 1);
      this.update();
    }
  };



function wypiszWszystkieProdukty(){
    console.log("NAZWA   CENA  ILOSC  ");
    console.log("----------------------");
    for(var i =0;i<this.lista.length;i++){
        console.log(this.lista[i].nazwa +"  "+this.lista[i].cena+"  "+this.lista[i].ilosc
        +"\n");
    }
    console.log("----------------------");
    console.table(this.lista);
}
//        <input type="button" onclick="paragon.dodajProdukt()" value="Submit form">


var paragon = new listaParagon();
paragon.DodajProduktH("Jabłka", 4.90, 1.5);
paragon.wypiszWszystkieProduktyL();




        var i=0;
        function myFunction() {
            i++;
           const form =  document.getElementById("myForm");
           console.log("robieeee"+ form.elements['cena'].value);

           const table =  document.getElementById("myTable");
           var tr = document.createElement("TR");
           tr.setAttribute("id", i);
           document.getElementById("myTable").appendChild(tr);

           var z = document.createElement("TD");
           var t = document.createTextNode(form.elements['cena'].value);
           z.appendChild(t);
           document.getElementById(i).appendChild(z);

           var z1 = document.createElement("TD");
           var t1 = document.createTextNode(form.elements['cena'].value);
           z1.appendChild(t1);
           document.getElementById(i).appendChild(z1);

           var z2 = document.createElement("TD");
           var t2 = document.createTextNode(form.elements['cena'].value);
           z2.appendChild(t2);
           document.getElementById(i).appendChild(z2);

           var z3 = document.createElement("TD");
           var t3 = document.createTextNode(form.elements['cena'].value);
           z3.appendChild(t3);
           document.getElementById(i).appendChild(z3);

           var z4 = document.createElement("TD");
           var t4 = document.createTextNode(form.elements['cena'].value);
           z4.appendChild(t4);
           document.getElementById(i).appendChild(z4);
           
          }
  /*

function wypiszProdukt(idProduktu){
    for (var i = 0; i < this.lista.length; i++) {
		if(this.lista[i].id == idProduktu){
            console.log("nazwa: "+this.lista[i].nazwa+ ", cena: "+this.lista[i].cena+", model: "+this.lista[i].model
            +", rok: "+this.lista[i].rok +"\n");
        }
    }
}



function koszt() {
    console.log("cena produktu: "+ this.cena);
   }

function kosztEnergii() {
    var c = cenaPradu * this.zuzycieEnergii;
    console.log("Koszt energii: "+ c);
   }

function wiekProduktu() {
    var data = new Date();
    var wiek;
    wiek = data.getFullYear()-this.rok;
    console.log("wiek produktu: " + wiek);
   }

function   wiekProduktuLata(){
    var data = new Date();
    var wiek;
    var str;
    wiek = data.getFullYear()-this.rok;
    if(wiek%10 == 1){
        str = "rok";
    }
    else if(wiek%10 == 2 || wiek%10 == 3 || wiek%10 == 4){
        str = "lata";
    }
    else {
        str ="lat";
    }
    console.log("wiek produktu: " + wiek +" "+ str);
}

var p1 = new product(1,"pralka","amica",2000,1999,0.17);
var p2 = new product(2,"radio ","bosh",2000,1999,0.20);
var p3 = new product(3,"lodowka","bosh",2000,1988,0.10);

const cenaPradu = 0.22;

//p1.kosztP();
//p1.wiekProduktuP();
//p1.wiekProduktuLataP();
//p1.kosztEnergiiP();;

var lista = new listaTowarow();
var magazyn = new Magazyn();
var sklep = new Sklep();

lista.DodajProdukt(null,null,null,null,null,p1);
lista.DodajProdukt(null,null,null,null,null,p2);
lista.DodajProdukt(null,null,null,null,null,p3);


//lista.wypiszProduktL(1);
//lista.wypiszProduktL(2);
//lista.zmieńProduktL(1,p2);
//lista.wypiszProduktL(2);

magazyn.dodajProduktM(p1,9);
magazyn.dodajProduktM(p2,2);
magazyn.dodajProduktM(p3,3);

magazyn.wypiszWszystkieProduktyL();

magazyn.zabierzProduktM(0);
magazyn.wypiszWszystkieProduktyL();

magazyn.zabierzProduktM(null,"pralka","amica");
magazyn.wypiszWszystkieProduktyL();

sklep.DodajProdukt(null,"tv","extra",999,0.18,null);
sklep.DodajProdukt(null,"smartfon","extra",999,0.18,null);
sklep.DodajProdukt(null,null,null,null,null,p1);

sklep.wypiszWszystkieProduktyL();

//dodanie produktów do zamowienia
sklep.zamowienie.DodajProdukt(p1);
sklep.zamowienie.DodajProdukt(p2);
sklep.zamowienie.DodajProdukt(p3);

//stan magazynu przed realizacją
magazyn.wypiszWszystkieProduktyL();

//realizacja(zmiana stanu magazynu)
sklep.ZrealizujZamowienie(magazyn);

//stan magazynu po realizacji 
magazyn.wypiszWszystkieProduktyL();
*/