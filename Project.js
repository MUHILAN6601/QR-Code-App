$(document).ready(function(){
    $("#CS").change(function(){
      disableSelect(this);
    });

    $("#AC").change(function(){
      disableSelect(this);
    });

    $("#FI").change(function(){
      disableSelect(this);
    });
  });

  function disableSelect (ctrl) {
    if (ctrl.value != "Types Of Courses" && ctrl.id == "CS") {
        $("#AC")[0].disabled = true;
        $("#FI")[0].disabled = true;

    } else if(ctrl.id == "CS") {
        $("#AC")[0].disabled = false;
        $("#FI")[0].disabled = false;
        
    }

    if (ctrl.value != "Types Of Courses" && ctrl.id == "AC") {
        $("#FI")[0].disabled = true;
        $("#CS")[0].disabled = true;

    } else if(ctrl.id == "AC") {
        $("#FI")[0].disabled = false;
        $("#CS")[0].disabled = false;
    }


    if (ctrl.value != "Types Of Courses" && ctrl.id == "FI") {
        $("#CS")[0].disabled = true;
        $("#AC")[0].disabled = true;

    } else if(ctrl.id == "FI") {
        $("#CS")[0].disabled = false;
        $("#AC")[0].disabled = false;
    }
}


function validateSubmit () {
    var fname = $("#fname")[0];
    var lname = $("#lname")[0];
    var Email = $("#Email")[0];
    var Pnumber = $("#Pnumber")[0];
    var FTname = $("#FTname")[0];
    var FTnumber = $("#FTnumber")[0];
    var Occup = $("#Occup")[0];
    var MTname = $("#MTname")[0];
    var MTnumber = $("#MTnumber")[0];
    var Occup1 = $("#Occup1")[0];
    var Address = $("#Address")[0];
    var City = $("#City")[0];
    var State = $("#State")[0];
    var PinCode = $("#PinCode")[0];
    var SHname = $("#SHname")[0];
    var Marks = $("#Marks")[0];
    var YOP = $("#YOP")[0];
    var HSC = $("#HSC")[0];
    var Marks1 = $("#HSCmarks")[0];
    var HSCyop = $("#HSCyop")[0];


    if (fname.value.trim() == "") {
        alert("Please enter First Name");
        return false;
    }

    if (lname.value.trim() == "") {
        alert("Please enter Last Name");
        return false;
    }

    if (Email.value.trim() == "") {
        alert("Please enter Email Name");
        return false;
    }

    if(Pnumber.value.trim() == "") {
        alert("Please enter Phone Number")
        return false;
    }

    if(FTname.value.trim() == "") {
        alert("Please enter Father Name")
        return false;
    }

    if(FTnumber.value.trim() == ""){
        alert("Pleace enter Father Number")
        return false;
    }
    
    if(Occup.value.trim() == ""){
        alert("Pleace enter Mother Occupation")
        return false;
    }

    if(MTname.value.trim() == ""){
        alert("Pleace enter Mother Name")
        return false;
    }

    if(MTnumber.value.trim() == ""){
        alert("Pleace enter Mother Number")
        return false;
    }

    if(Occup1.value.trim() == ""){
        alert("Pleace enter Father Occupation")
        return false;
    }

    if(Address.value.trim() == ""){
        alert("Pleace enter Address")
        return false;
    }

    if(City.value.trim() == ""){
        alert("Pleace enter City")
        return false;
    }

    if(State.value.trim() == ""){
        alert("Pleace enter State")
        return false;
    }

    if(PinCode.value.trim() == ""){
        alert("Pleace enter Pincode")
        return false;
    }

    if(SHname.value.trim() == ""){
        alert("Pleace enter School Name")
        return false;
    }

    if(Marks.value.trim() == ""){
        alert("Pleace enter SSLC marks")
        return false;
    }

    if(YOP.value.trim() == ""){
        alert("Pleace enter Passed Out Year")
        return false;
    }

    if(HSC.value.trim() == ""){
        alert("Pleace enter School Name")
        return false;
    }

    if(HSCmarks.value.trim() == ""){
        alert("Pleace enter HSC marks")
        return false;
    }

    if(HSCyop.value.trim() == ""){
        alert("Pleace enter Passed Out Year")
        return false;
    }
}
