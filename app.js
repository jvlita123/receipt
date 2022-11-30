
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.sum = Math.round(this.quantity * this.price * 100)/100;
        this.deleteButton = document.createElement("button");
        this.deleteButton.innerHTML = "&times";
        this.upButton = document.createElement("button");
        this.upButton.innerHTML = "&#8679";
        this.downButton = document.createElement("button");
        this.downButton.innerHTML = "&#8681";

        this.getSum = function() {
          return this.sum;
        }

    }
}

class Receipt {
    constructor() {
      this.list = [];
      this.sumReceipt = 0;
    
    this.addProduct = function() {
      const form =  document.getElementById("myForm");

      //Validacja danych
      if(form.elements['name'].value=="" || form.elements['price'].value=="" || form.elements['quantity'].value==""){
        alert("Pole nie może być puste");
        return false;
      }
      else if (!isNaN(form.elements['name'].value) || isNaN(form.elements['price'].value) || isNaN(form.elements['quantity'].value)) {
        alert("Wprowadzono niepoprawny format danych");
        return false;
      }
      else if(form.elements['price'].value <= 0 || form.elements['quantity'].value <= 0){
        alert('Wprowadź liczbę wiekszą od 0');
        return false;
      }

      var obj = new Product(this.list.length,form.elements['name'].value,form.elements['price'].value,form.elements['quantity'].value);
      obj.sumReceipt = this.getSumReceipt();
      this.list.push(obj);
      this.update();
      }

    this.getSumReceipt = function() {
      var tmp = 0;
      for(var i = 0; i<this.list.length;i++){
        tmp = tmp + this.list[i].sum;
      }
      this.sumReceipt = tmp;
      return this.sumReceipt;
    }

    this.deleteRecord = function(event) {
      let index = -1;
        for (let i = 0; i < this.list.length; i++) {
          if (event.target == this.list[i].deleteButton) {
            index = i;
            break;
          }
        }
        if (confirm("Czy napewno usunąć tą pozycję?")) {
          console.log(index);
          this.list.splice(index, 1);
          this.update();
        }
    };

    this.up = function(event) {
      const table =  document.getElementById("myTable");
      let index = -1;
      for (let i = 0; i < this.list.length; i++) {
        if (event.target == this.list[i].upButton) {
          index = i;
          break;
        }
      }      
      if (index > 0) {
        let temp = this.list[index - 1];
        this.list[index - 1] = this.list[index];
        this.list[index] = temp;
        this.update();
      }
    }

    this.down = function(event) {
      const table =  document.getElementById("myTable");
      let index = -1;
      for (let i = 0; i < this.list.length; i++) {
        if (event.target == this.list[i].downButton) {
          index = i;
          break;
        }
      }      
      if (index < this.list.length-1) {
        let temp = this.list[index + 1];
        this.list[index + 1] = this.list[index];
        this.list[index] = temp;
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
      var th1 = document.createElement("th");
      var text1 = document.createTextNode("NAZWA");
      th1.appendChild(text1);
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
      document.getElementById(0).appendChild(th1);
      document.getElementById(0).appendChild(z2);
      document.getElementById(0).appendChild(z3);
      document.getElementById(0).appendChild(z4);
       
      if(this.list.length>0){
        for(var i = 0; i < this.list.length; i++){
        var j=i+1;
        var tr = document.createElement("TR");
        tr.setAttribute("id", j);
        document.getElementById("myTable").appendChild(tr);
        var z = document.createElement("TD");
        var t = document.createTextNode(j);
        z.appendChild(t);
        document.getElementById(j).appendChild(z);
    
        var th1 = document.createElement("TD");
        var text1 = document.createTextNode(this.list[i].name);
        th1.appendChild(text1);
        document.getElementById(j).appendChild(th1);
    
        var z2 = document.createElement("TD");
        var t2 = document.createTextNode(this.list[i].quantity);
        z2.appendChild(t2);
        document.getElementById(j).appendChild(z2);
    
        var z3 = document.createElement("TD");
        var t3 = document.createTextNode(this.list[i].price);
        z3.appendChild(t3);
        document.getElementById(j).appendChild(z3);
    
        var z4 = document.createElement("TD");
        var t4 = document.createTextNode(this.list[i].sum);
        z4.appendChild(t4);
        document.getElementById(j).appendChild(z4);
    
        var z5 = document.createElement("TD");
        const btn = document.createElement("button");
        this.list[i].deleteButton = btn; 
        this.list[i].deleteButton.innerHTML = "&times";
        this.list[i].deleteButton.onclick = this.deleteRecord.bind(this);
        z5.appendChild(this.list[i].deleteButton);
        document.getElementById(j).appendChild(z5);
    
        var z7 = document.createElement("TD");
        const btn1 = document.createElement("button");
        this.list[i].upButton = btn1;
        this.list[i].upButton.onclick = this.up.bind(this);        
        this.list[i].upButton.innerHTML = "&#8679";
        z7.appendChild(this.list[i].upButton);
        document.getElementById(j).appendChild(z7);
    
        var z8 = document.createElement("TD");
        const btn2 = document.createElement("button");
        this.list[i].downButton = btn2;
        this.list[i].downButton.innerHTML = "&#8681";
        this.list[i].downButton.onclick = this.down.bind(this);
        z8.appendChild(this.list[i].downButton);
        document.getElementById(j).appendChild(z8);
    }

    var tr1 = document.createElement("TR");
        tr1.setAttribute("id", "idTr");
        document.getElementById("myTable").appendChild(tr1);

    for(var i = 0; i < 3; i++ ){
      var newTh = document.createElement("th");
      document.getElementById("idTr").appendChild(newTh);
    }
        var newTh = document.createElement("th");
        var textNode = document.createTextNode("RAZEM");
        newTh.appendChild(textNode)
        document.getElementById("idTr").appendChild(newTh);

        var newTh1 = document.createElement("th");
        var newTextNode = document.createTextNode(this.sumReceipt);
        this.sumReceipt = this.getSumReceipt();
        newTh1.appendChild(newTextNode)
        document.getElementById("idTr").appendChild(newTh1);
    }
    
    localStorage.setItem("Date", JSON.stringify(this.list));
   }
  }
}

var receipt = new Receipt();
 function start() {
  if(JSON.parse(localStorage.getItem("Date")) != undefined){
    const list = JSON.parse(localStorage.getItem("Date"));
    receipt.list = list;
  }
  console.log(receipt.list);
  receipt.sumReceipt = receipt.getSumReceipt();
  receipt.update();
 }
