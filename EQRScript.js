function generateQRCode() {

  const box = document.getElementById("qrcode");

  if (box.childNodes.length > 0){
    document.getElementById(box).innerHTML = "";
  }
  

  // Retrieve user input values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var bloodType = document.getElementById("bloodType").value;
  var allergies = document.getElementById("allergies").value;
  var medConditions = document.getElementById("medConditions").value;
  var emergencyContact1 = document.getElementById("emergencyContact1").value;

  if (!name){
    name = "Unknown"
  }

if (!age){
  age = "Unknown"
}

  if (!allergies) {
    allergies = "None";
  }


  if (!bloodType) {
    bloodType = "Unknown";
  } else {
    bloodType.toUpperCase();
  }


  if (!medConditions) {
    medConditions = "None";
  }


  if(!emergencyContact1) {
    emergencyContact1 = "N/A"
  }


  name=name.replace(/ /g,"_");
  age=age.replace(/ /g,"_");
  bloodType=bloodType.replace(/ /g,"_");
  allergies=allergies.replace(/ /g,"_");
  medConditions=medConditions.replace(/ /g,"_");
  emergencyContact1=emergencyContact1.replace(/ /g,"_");
  



  // Create user String with the input values
  var userInfo = name + ", " + age + ", " + bloodType + ", " + allergies + ", " + medConditions + ", " + emergencyContact1;

  var patientInfoURL = "https://resqr.pages.dev/patientinfo.html?n=" + name + "&a=" + age + "&bl=" + bloodType + "&all=" + allergies + "&cd=" + medConditions + "&ct=" + emergencyContact1


  console.log(patientInfoURL);


  // Generate the QR code using a QR code library
  var qrCode = new QRCode(document.getElementById("qrcode"), {
    text: patientInfoURL,
    width: 300,
    height: 300,
  });

  // Create a download link for the QR code
  var downloadLink = document.createElement("a");
  downloadLink.href = document.getElementById("qrcode").getElementsByTagName("canvas")[0].toDataURL("image/jpeg");
  downloadLink.download = "qrcode.jpg";
  downloadLink.innerHTML = "Download QR Code";
  document.getElementById("qrcode-container").appendChild(downloadLink);


  var x = document.getElementById("viewprofile");
  x.style.display = "block";

  document.getElementById("viewprofile").href=patientInfoURL;
}


function prepare(){
  var x = document.getElementById("viewprofile");
  x.style.display = "none";
}
window.onload = prepare;

