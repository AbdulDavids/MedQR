function loadPatientInfo() {
    var name = "none";
    var age = "none";
    var blood = "none";
    var allergies = "none";
    var medConditions = "none";
    var contact = "none";
    var year = new Date().getFullYear();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    name = urlParams.get('n');
    age = urlParams.get('a');
    blood = urlParams.get('bl');
    allergies = urlParams.get('all');
    medConditions = urlParams.get('cd');
    contact = urlParams.get('ct');


    name=name.replace(/_/g," ");
  age=age.replace(/_/g,"");
  blood=blood.replace(/_/g," ");
  allergies=allergies.replace(/_/g," ");
  medConditions=medConditions.replace(/_/g," ");
contact=contact.replace(/_/g," ");

if (age == "Unknown"){
 age = year - age;   
}













    document.getElementById("name").innerHTML = name;

    document.getElementById("age").innerHTML = age;

    document.getElementById("blood").innerHTML = blood;

    document.getElementById("allergies").innerHTML = allergies;

    document.getElementById("medconditions").innerHTML = medConditions;

    document.getElementById("contact").innerHTML = contact;
}

window.onload = loadPatientInfo;
