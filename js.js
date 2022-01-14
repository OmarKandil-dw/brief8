var title = document.getElementById("title");
var auteur = document.getElementById("auteur");
var prix = document.getElementById("prix");
var date = document.getElementById("date");
var valida= document.getElementsByClassName("validation");
var radioCheck=document.getElementById("radiobtn");
var input = document.getElementsByTagName("input");
var langue=document.getElementById("langue");
var table = document.getElementById("table");
var tbody = document.getElementsByTagName("tbody");
var type=document.getElementsByClassName("type");
var email = document.getElementById("email");
var div = document.getElementById("btn3");

var list = [];

// ++++++++++ Class +++++++++++
class Ouvrage 
{
    constructor(title, auteur, prix, date, langue, type,email){

        this.title=title;
        this.auteur=auteur;
        this.prix=prix;
        this.date=date;
        this.langue=langue;
        this.type=type;
        this.email=email;
        
    }
    
    detailOuvrage() {
        return (`L'ouvrage ${this.title} est un ${this.type}  en langue ${this.langue} écrit par  ${this.auteur}  et publié le ${this.date} Le prix de ${this.titre} , est de  ${this.prix} DHs`)
    }
    
}

// +++++++++++++ Validation +++++++++++
var list2 = "";
list2 = JSON.parse(localStorage.getItem("list"));




if(list2!=null){
    list = list2;
}

function validation(){
    type = document.querySelector("input[name=season]:checked");
    var  myouvrage = new Ouvrage (title.value, auteur.value ,prix.value,date.value,langue.value,type.value,email.value,type);
        
        
    var no_valide=0;

    // ++++ Required ++++

    for(var i = 0; i<4;i++){
        if (input[i].value == ""){
            input[i].style.borderColor="red";
            no_valide++;
        }
        else{

            input[i].style.borderColor="green"
        }
    }     

    // ++++++++ require RADIO +++++++++
    var getSelectedValue = document.querySelector(   
         'input[name="season"]:checked');   
        
    if(getSelectedValue !== null) {   
        document.getElementById("radiobtn").innerHTML = getSelectedValue.value + "type  is selected";  
        console.log("type chekked") 
    }   
    else {   
        document.getElementById("radiobtn").innerHTML = "*You have not selected any type";  
        no_valide++; 
    } 
    
    // +++++++ Email +++++++++

    var emailRegex = new RegExp(/^[a-z\d\.]+@[a-z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
    let checkEmail = email.value;
    var valid = emailRegex.test(checkEmail);

      if(valid==true) {
          console.log("Email is valid")
    } else {
        alert("Email is not valid")
        no_valide++;
        
  }


//    +++++++date+++++++++++++


       if(date.value=="")
       {
           alert("the date is not Valid")
           no_valide++;
             }
           
           else {
               console.log("the date is valid")
           }
     

    // +++++require drop +++++++

    if(langue.value=="0")
    {
        lng.innerHTML="Please select an option!";
        langue.style.borderColor="red"
        no_valide++;
        
    }
    else{
        lng.innerHTML="valider";
        langue.style.borderColor="green"
        
    }

    // ++++++ prix ++++++


    var prixRegExp = new RegExp(/^\d+(,\d{1,2})?$/)
    var price = document.getElementById("prix").value;
    var valid = prixRegExp.test(price)

    if (valid==true)
    {
        console.log("The Price is Valid")
    }

    else {
        alert("The Price is not Valid")
        no_valide++;
       
    }


    ///////////////table/////////////////


        // ++++++Insert row+++++++
        if(no_valide==0)
        {

    

        // i cannot tell
        // for(i=0;i<type.length;i++)
        // {
        //     if(type[i].checked)
        //     {
        //         CellType=type[i].value;
        //     }
        // } 

       
        list.push(myouvrage);
        tri() 
        

        localStorage.setItem("list", JSON.stringify(list));
        tbody.innerHTML="";
        for(var i=0; i<list.length; i++){
            var newRow = table.insertRow(-1);
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            cell7 = newRow.insertCell(6);
            cell8 = newRow.insertCell(7);
            var CellType=document.querySelector("input[name=season]:checked").value;
            cell1.innerHTML = list[i].title;
            cell2.innerHTML = list[i].auteur;
            cell3.innerHTML = list[i].prix;
            cell4.innerHTML = list[i].date;
            cell5.innerHTML = list[i].langue;
            cell6.innerHTML = list[i].email;
            cell7.innerHTML = list[i].type;
            cell8.innerHTML ='<input type="button"  value="Edit" onclick="EditRow(this)" class="btn1">'
            + '<input type="button" onclick="deleteRow(this)"  value="Delete" class="btn2">';
        }
        
        
        resetUnputs()
}


function tri(){
    list.sort(function(a,b){
        if(a.title<b.title){
            return -1;
        }
  
    })
}

for(let i = 0; i < list.length; i++){
// console.log(list[i].detailOuvrage());s
} 


    console.log("this is the list log: "+ list);
    console.log("this is the myOverage log: "+myouvrage);

}


// document.getElementsByTagName("form")[0].addEventListener('submit', validation);
 
function EditRow(r){

   ed = r.parentNode.parentNode
    
   if(r.value=="Edit"){

  document.getElementById("title").value = ed.cells[0].innerHTML;
  document.getElementById("auteur").value= ed.cells[1].innerHTML;
  document.getElementById("prix").value= ed.cells[2].innerHTML; 
  document.getElementById("date").value= ed.cells[3].innerHTML;
  document.getElementById("langue").value=ed.cells[4].innerHTML;
  document.getElementById("email").value=ed.cells[5].innerHTML;
  document.getElementsByClassName("type").value=ed.cells[6].innerHTML;
     resetUnputs()



    r.value = "save"
    document.getElementById("btn").setAttribute("disabled" , "true");
   }
   else {
    ed.cells[0].innerHTML= document.getElementById("title").value 
    ed.cells[1].innerHTML= document.getElementById("auteur").value
    ed.cells[2].innerHTML= document.getElementById("prix").value
    ed.cells[3].innerHTML= document.getElementById("date").value
    ed.cells[4].innerHTML= document.getElementById("langue").value
    ed.cells[5].innerHTML= document.getElementById("email").value
    ed.cells[6].innerHTML= document.querySelector("input[name=season]:checked").value

    // for(i=0;i<type.length;i++)
    // {
    //     if(type[i].checked)
    //     {
    //         CellType=type[i].value;
    //     }
    // }


    r.value = "Edit"

    document.getElementById("btn").removeAttribute("disabled");
    for(var i = 0; i<4;i++){
        input[i].value = "";
    }  
    
   }
  

    }

 /////////////////////////////////////DELETE/////////////////////////////////////////////

function deleteRow(r) {
    var xx = r.parentNode.parentNode.rowIndex;
    
    if(confirm("Do you want to delete this ???"))
    {
        table.deleteRow(xx);  
    }
  
}



// const ouvrage1 = new Ouvrage()
// alert(ouvrage1.DetailOuvrage())
       


// Reset Function
function resetUnputs()
{
    document.getElementById("title").value = ""
    document.getElementById("auteur").value = ""
    document.getElementById("prix").value = ""
    document.getElementById("date").value = ""
    document.getElementById("langue").value = ""
    document.getElementById("email").value = ""
    document.querySelector("input[value=Roman]").checked = false
    document.querySelector("input[value=Essai]").checked = false
    document.querySelector("input[value=Bande-Dessinée]").checked = false
}

btn3.addEventListener("click", function printData() {
    var div = document.getElementById("table");
    newwin = window.open("");
    newwin.document.write(div.outerHTML);
    newwin.print();
    newwin.close();
  });


// var btn = document.getElementById('btn3')
// btn.addEventListener('click', function() {
//     window.print(), id='="noPrint"'
// })
