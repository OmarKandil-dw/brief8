var title = document.getElementById("title");
var auteur = document.getElementById("auteur");
var prix = document.getElementById("prix");
var date = document.getElementById("date");
var valida= document.getElementsByClassName("validation");
var radioCheck=document.getElementById("radiobtn");
var input = document.getElementsByTagName("input");
var langue=document.getElementById("langue");
var table = document.getElementById("table");
var type=document.getElementsByClassName("type");
var email = document.getElementById("email");





// console.log(type.value);

       

        let list = [];

function validation(e){
    var no_valide=0;
    //////require:


    
    for(var i = 0; i<4;i++){
        if (input[i].value == ""){
            input[i].style.borderColor="red";
            no_valide++;
        }
        else{
            // input[i].nextElementSibling.innerHTML="valider";
            input[i].style.borderColor="green"
        }
    }     
    //////require RADIO
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
    
    // email//////////
  

    var emailRegex = new RegExp(/^[a-z\d\.]+@[a-z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
    let checkEmail = email.value;
    var valid = emailRegex.test(checkEmail);

      if(valid==true) {
          console.log("Email is valid")
    } else {
        alert("Email is not valid")
        
  }

    //////require drop

    if(langue.value=="0")
    {
        lng.innerHTML="Please select an option!";
        langue.style.borderColor="red"
        no_valide++;
        console.log("langue choisi")
    }
    else{
        lng.innerHTML="valider";
        langue.style.borderColor="green"
        
    }

    /////////////////prix


    var prix = new RegExp(/^\d+(,\d{1,2})?$/)
    var checkPrice = document.getElementById("prix").value;
    var valid = prix.test(checkPrice)

    if (valid==true)
    {
        console.log("The Price is Valid")
    }

    else {
        alert("The Price is not Valid")
       
    }





    // // // // // // // // // class




    
    ///////////////table/////////////////



if(no_valide==0)
{

    var newRow = table.insertRow(-1);
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            cell7 = newRow.insertCell(6);
            cell8 = newRow.insertCell(7);
        var CellType="";
        for(i=0;i<type.length;i++)
        {
            if(type[i].checked)
            {
                CellType=type[i].value;
            }
        }

        cell1.innerHTML = title.value;
        cell2.innerHTML = auteur.value;
        cell3.innerHTML = prix.value;
        cell4.innerHTML = date.value;
        cell5.innerHTML = langue.options[langue.selectedIndex].value;
        cell6.innerHTML = email.value;
        cell7.innerHTML = CellType;
        cell8.innerHTML ='<input type="button"  value="Edit" onclick="EditRow(this)" class="btn1">'
        + '<input type="button" onclick="deleteRow(this)"  value="Delete" class="btn2">';

}


type = document.querySelector("input[name=season]:checked");

let  myOuvrage = new Ouvrage (title.value, auteur.value ,prix.value,date.value,langue.value, type.value, email.value);


list.push(myOuvrage);
console.log(list);
console.log(myOuvrage);

}

document.getElementsByTagName("form")[0].addEventListener('submit', validation);
 
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
    CellType="";
    for(i=0;i<type.length;i++)
    {
        if(type[i].checked)
        {
            CellType=type[i].value;
        }
    }

    
    ed.cells[6].innerHTML= CellType
    alert(CellType)

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

// // // // // // // // class///////////////////

class Ouvrage {
    constructor(title, auteur,prix,date,langue,type,email){

        this.title=title;
        this.auteur=auteur;
        this.prix=prix;
        this.date=date;
        this.langue=langue;
        this.type=type;
        this.email=email;

    }
    
    DetailOuvrage() {
        return (`L'ouvrage ${this.title} est un ${this.type}  en langue ${this.langue} écrit par  ${this.auteur}  et publié le ${this.date} Le prix de ${this.titre} , est de  ${this.prix} DHs`)
    }
}

const ouvrage1 = new Ouvrage()
alert(ouvrage1.DetailOuvrage())
       



let btn = document.getElementById('btn3')
btn.addEventListener('click', function() {
    window.print(), id='="noPrint"'
})
