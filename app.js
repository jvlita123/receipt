
class produkt {
    constructor(id, nazwa, cena, ilosc) {
        this.id = id;
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
        this.suma = Math.round(this.ilosc * this.cena * 100)/100;
        this.deleteButton = document.createElement("button");
        this.deleteButton.innerHTML = "&times";
        this.upButton = document.createElement("button");
        this.upButton.innerHTML = "&#8679";
        this.downButton = document.createElement("button");
        this.downButton.innerHTML = "&#8681";

        this.getSum = function() {
          return this.suma;
        }

    }


}

class listaParagon {
    constructor() {
      this.lista = [];
      this.DeleteRecord = deleteRecord;
    
this.dodajProdukt = function() {
    const form =  document.getElementById("myForm");
    this.lista.push(new produkt(this.lista.length,form.elements['nazwa'].value,form.elements['cena'].value,form.elements['ilosc'].value));
    this.update();
    }

    this.getRazem = function() {
      var tmp =0;
      for(var i = 0; i<this.lista.length;i++){
        tmp = tmp + this.lista[i].getSum;
      }
      return tmp;
    }


function deleteRecord(event) {
    let index = -1;
        for (let i = 0; i < this.lista.length; i++) {
          if (event.target == this.lista[i].deleteButton) {
            index = i;
            break;
          }
        }
        if (confirm("Are you sure you want to delete this record?")) {
          console.log(index);
          this.lista.splice(index, 1);
          this.update();

         }
        };

this.up = function(event) {
        const table =  document.getElementById("myTable");

        let index = -1;
        for (let i = 0; i < this.lista.length; i++) {
          if (event.target == this.lista[i].upButton) {
            index = i;
            break;
          }
        }      
        if (index > 0) {
            let temp = this.lista[index - 1];
            this.lista[index - 1] = this.lista[index];
            this.lista[index] = temp;
            this.update();
          }
    }

this.down = function(event) {
        const table =  document.getElementById("myTable");
        let index = -1;
        for (let i = 0; i < this.lista.length; i++) {
          if (event.target == this.lista[i].downButton) {
            index = i;
            break;
          }
        }      
        if (index < this.lista.length-1) {
            let temp = this.lista[index + 1];
            this.lista[index + 1] = this.lista[index];
            this.lista[index] = temp;
            this.update();
          }
    }
          
 this.update = function() {

    const table =  document.getElementById("myTable");
    table.innerHTML = "";

    var tr = document.createElement("TR");
        tr.setAttribute("id", 0);
        document.getElementById("myTable").appendChild(tr);
    
        var z = document.createElement("th");
        var t = document.createTextNode("LP");
        z.appendChild(t);
        var z1 = document.createElement("th");
        var t1 = document.createTextNode("NAZWA");
        z1.appendChild(t1);
        var z2 = document.createElement("th");
        var t2 = document.createTextNode("ILOŚĆ");
        z2.appendChild(t2);
        var z3 = document.createElement("th");
        var t3 = document.createTextNode("CENA");
        z3.appendChild(t3);
        var z4 = document.createElement("th");
        var t4 = document.createTextNode("SUMA");
        z4.appendChild(t4);

        document.getElementById(0).appendChild(z);
        document.getElementById(0).appendChild(z1);
        document.getElementById(0).appendChild(z2);
        document.getElementById(0).appendChild(z3);
        document.getElementById(0).appendChild(z4);
       
        if(this.lista.length>0){
       for(var i = 0; i < this.lista.length; i++){
        var j=i+1;
        var tr = document.createElement("TR");
        tr.setAttribute("id", j);
        document.getElementById("myTable").appendChild(tr);
    
        var z = document.createElement("TD");
        var t = document.createTextNode(j);
        z.appendChild(t);
        document.getElementById(j).appendChild(z);
    
        var z1 = document.createElement("TD");
        var t1 = document.createTextNode(this.lista[i].nazwa);
        z1.appendChild(t1);
        document.getElementById(j).appendChild(z1);
    
        var z2 = document.createElement("TD");
        var t2 = document.createTextNode(this.lista[i].ilosc);
        z2.appendChild(t2);
        document.getElementById(j).appendChild(z2);
    
        var z3 = document.createElement("TD");
        var t3 = document.createTextNode(this.lista[i].cena);
        z3.appendChild(t3);
        document.getElementById(j).appendChild(z3);
    
        var z4 = document.createElement("TD");
        var t4 = document.createTextNode(this.lista[i].suma);
        z4.appendChild(t4);
        document.getElementById(j).appendChild(z4);
    
        var z5 = document.createElement("TD");
        const btn = document.createElement("button");
        this.lista[i].deleteButton = btn; 
        this.lista[i].deleteButton.innerHTML = "&times";

        this.lista[i].deleteButton.onclick = this.DeleteRecord.bind(this);
        z5.appendChild(this.lista[i].deleteButton);
        document.getElementById(j).appendChild(z5);
    
        var z7 = document.createElement("TD");
        const btn1 = document.createElement("button");

        this.lista[i].upButton = btn1;
        this.lista[i].upButton.onclick = this.up.bind(this);        
        this.lista[i].upButton.innerHTML = "&#8679";

        z7.appendChild(this.lista[i].upButton);
        document.getElementById(j).appendChild(z7);
    
        var z8 = document.createElement("TD");
        const btn2 = document.createElement("button");
        this.lista[i].downButton = btn2;
        this.lista[i].downButton.innerHTML = "&#8681";
        this.lista[i].downButton.onclick = this.down.bind(this);
        z8.appendChild(this.lista[i].downButton);
        document.getElementById(j).appendChild(z8);
        console.log(j);
    }

    var trw1 = document.createElement("TR");
        trw1.setAttribute("id", "ddd");
        document.getElementById("myTable").appendChild(trw1);
    
        var sf = document.createElement("th");
        document.getElementById("ddd").appendChild(sf);

        var ss = document.createElement("th");
        document.getElementById("ddd").appendChild(ss);

        var sff = document.createElement("th");
        document.getElementById("ddd").appendChild(sff);

        var ssff = document.createElement("th");
        document.getElementById("ddd").appendChild(ssff);
        var sssff = document.createElement("th");
        document.getElementById("ddd").appendChild(sssff);
        var sssffff = document.createElement("th");
        document.getElementById("ddd").appendChild(sssffff);



        var z222 = document.createElement("th");
        var t222 = document.createTextNode("RAZEM");
        z222.appendChild(t222)
        document.getElementById("ddd").appendChild(z222);

        var z133 = document.createElement("th");
        var t133 = document.createTextNode(this.getRazem());
        z133.appendChild(t133)
        document.getElementById("ddd").appendChild(z133);
    }
    

    localStorage.setItem("Oddanie", JSON.stringify(this.lista));



}
}



}

var paragon = new listaParagon();

 function fm() {
  if(JSON.parse(localStorage.getItem("Oddanie"))!= undefined){
    const lista = JSON.parse(localStorage.getItem("Oddanie"));
    paragon.lista = lista;
  }
  console.log(paragon.lista);
  paragon.update();
 }

