$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(1000);


const salon = {
    name:"Fashion Pet",
    phone:"214-930-1946",
    address:{
        street:"93 Front Street",
        number:"6561",
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00pm",
    }, 
    pets:[], // simulation of the DB
    count:function(){
        alert("You register a new pet, you have " + this.pets.length + "pets");
    }
}


// object destructuring

let {name, phone,address:{street,number},workingHours:{days,open,close}}=salon;



document.getElementById("info-main").innerHTML=`
    <h2> ${name} </h2>
    <p > Phone number: ${phone}, <p>${street} ${number}</p>
    `;


let c=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){ 
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id="pet"+c;
        c+=1;
    }
    ownerInfo=function(){
        console.log(`${this.ownerName} ${this.contactPhone}`);
    }

}

//create pets (simple process)

const scooby = new Pet("Scooby","50","Male","Dane","Full Service","Shaggy","789789987");
salon.pets.push(scooby);
displayList(scooby);
scooby.ownerInfo();

//create register function

 //take the values from form (HTML)

let txtName = document.getElementById('petName');
let txtAge = document.getElementById('petAge');
let txtGender = document.getElementById('petGender');
let txtBreed = document.getElementById('petBreed');
let txtService = document.getElementById('petService');
let txtOwners = document.getElementById('ownersName');
let txtPhone = document.getElementById('contactPhone');

function register(){

    // create the pet
   let thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwners.value,txtPhone.value);

   console.log(thePet);

    
    // create the pet

    //push the pet into the array (pet[])
    salon.pets.push(thePet);
    //display on the HTML
    displayList(thePet);
    // clear the inputs (form)
    clear();
 



}

function displayList(aPet){
    let listBody=document.getElementById("rowPet");
    let item = `
        <tr id="${aPet.id}">
            <td> ${aPet.name} </td>
            <td>${aPet.age} </td>
            <td>${aPet.gender} </td>
            <td>${aPet.breed} </td>
            <td>${aPet.service} </td>
            <td>${aPet.ownerName} </td>
            <td>${aPet.contactPhone} </td>
            <td> <button onclick='deletePet("${aPet.id}");'> Delete </button> </td>
        </tr>
        `;
    listBody.innerHTML+=item;

    // mortal hw show all the pet's attributes on the li  ie: name age etc  add them on line 102.  And add CSS style

    //Immortal hw.  show all the pets in a table....(challenge)
    ////add a display Table... right below.
}

function displayTable(){


}

function deletePet(petID){

    let row = document.getElementById(petID);
    let indexDelete;


   //  just to search the position
    for(let i=0;i<salon.pets.length;i++){

        let selected = salon.pets[i];
        if(petID===selected.id){
            indexDelete=i;
        }
        
    }

    salon.pets.splice(indexDelete,1);

    row.remove();
    // use the remove(); function;
}

function clear(){
    txtName.value=" ";
    txtAge.value=" ";
    txtGender.value=" ";
    txtBreed.value=" ";
    txtService.value=" ";
    txtOwners.value=" ";
    txtPhone.value=" ";
}



function searchPet(){
    let searchString=document.getElementById('txtSearch').value;
    let ss=searchString.toLowerCase();
    console.log(ss);
    for(let j=0;j<salon.pets.length;j++){
        let searched = salon.pets[j];
        if(ss===searched.id || ss===searched.service.toLowerCase() || ss===searched.name.toLowerCase()){
            document.getElementById('pet'+j).setAttribute('class','selected');
        }
    } 

}

//search using pets name
//add hide & show element for jquery;

