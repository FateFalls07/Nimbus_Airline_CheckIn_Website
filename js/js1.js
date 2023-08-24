function displaybref() {
  document.getElementById("bref1").style.backgroundColor = "#004C5F";
  // document.getElementById("bref1").style.borderRadius = "5px 0px 0px 0px";
  document.getElementById("bref1").style.border = "0.3px grey";
  document.getElementById("bref").style.color= "#FFFFFF"; //change bookref textcolor

  // document.getElementById("bref").style.fontWeight= "normal";
  // document.getElementById("et").style.fontWeight = "bold";
  // 

  document.getElementById("et1").style.backgroundColor= "#FFFFFF";
  document.getElementById("et").style.color = "#004C5F"; 
  document.getElementById("inbook").placeholder = "Eticket #"
  // document.getElementById("leftone").innerHTML = "  ";
  // document.getElementById("righttwo").style.marginLeft="200px";
  

}

function displayet(){
  document.getElementById("et1").style.backgroundColor = "#004C5F";
  // document.getElementById("et1").style.borderRadius = "5px 0px 0px 0px";
  document.getElementById("et1").style.border = "0.3px grey";
  document.getElementById("et").style.color= "#FFFFFF"; //change bookref textcolor
  // document.getElementById("et1").style.borderRadius = "5px 0px 0px 0px"

  document.getElementById("et").style.fontWeight = "normal";
  document.getElementById("bref").style.fontWeight = "bold";
  

  document.getElementById("bref1").style.backgroundColor= "#FFFFFF";
  document.getElementById("bref").style.color = "#004C5F"; 
  document.getElementById("bref").style.fontWeight = "normal";
  // document.getElementById("bref1").style.borderRadius = "0px 5px 0px 0px;"
  document.getElementById("inbook").placeholder = "Booking Reference"
  // document.getElementById("leftone").innerHTML = "This field is required";
}

function validatelogin(){
  var bi = document.getElementById('uname');
  localStorage.setItem("hayy", bi.value);
  
  var x = document.forms["logForm"]["usern1"].value;
  var y =document.forms["logForm"]["pw1"].value;

  if ((x == "")&&(y == ""))  {
    document.getElementById("unamevalid").innerHTML = "This field is required";
    document.getElementById("unamevalid").style.fontWeight = "bold";

    document.getElementById("pwvalid").innerHTML = "This field is required";
    document.getElementById("pwvalid").style.fontWeight = "bold";
    return false;
  }
  else if (y == ""){
    document.getElementById("pwvalid").innerHTML = "This field is required";
    document.getElementById("pwvalid").style.fontWeight = "bold";

    document.getElementById("unamevalid").innerHTML = " ";
    return false;
  }
  else if (x == "")  {
    document.getElementById("unamevalid").innerHTML = "This field is required";
    document.getElementById("unamevalid").style.fontWeight = "bold";

    document.getElementById("pwvalid").innerHTML = " ";
    return false;
  }
}

function addLoadEvent(func) {  //FUCKING DOPE
  var oldonload = window.onload;  
  if (typeof window.onload != 'function') {  
    window.onload = func;  
  } else {  
    window.onload = function() {  
      if (oldonload) {  
        oldonload();  
      }  
      func();  
    }  
  }  
}  

function store1(){
  
}

addLoadEvent(function() { 
var ti = localStorage.getItem("hayy");
document.getElementById('intro1').innerHTML = 'Hi! ' + ti;

});  

function storecheck1(){
  var be = document.getElementById('inbook');
  localStorage.setItem("botick", be.value);

  var ln = document.getElementById('inplast');
  localStorage.setItem("lastn", ln.value);
}

var ti1 = localStorage.getItem("botick");
document.getElementById('brfid').style.fontWeight = "bold";
document.getElementById('brfid').innerHTML = ti1;

function getapprove1(){
  var sd = confirm('Are you sure you want to cancel?');
  if( sd == true ) {
    document.location.href = "index-w.html";
    return true;
 } else {
    return false;
 }
}

function aryusure(){
  var sd1 = confirm('Are you sure you want to continue?, all unsaved progress will be lost!');
  if( sd1 == true ) {
    document.location.href = "checkin1.html";
    return true;
 } else {
    return false;
 }
}

// $(function () {
//   $('#datetimepicker1').datetimepicker();
// });



$(document).ready( function() {

  $('.datepicker').pickadate();

});



function disabled13(){

  var dis1 = document.getElementById('disabledemerge');
  if (dis1.checked){
  document.getElementById('en2').disabled = true;
  document.getElementById('cn2').disabled = true;
  }
  else{
  document.getElementById('en2').disabled = false;
  document.getElementById('cn2').disabled = false;
  }
}

function save12(){
    alert('Inputs has been saved!');

    var d = document.getElementById('plast2');
    localStorage.setItem("plastname", d.value);
  
    
    var e = document.getElementById('pmid2');
    localStorage.setItem("pmidname", e.value);
  
    var f = document.getElementById('pfn2');
    localStorage.setItem("pfirstname", f.value);
  
    var g = document.querySelector('input[name="gendmf"]:checked');
    localStorage.setItem("pgend", g.value);
  
    var h = document.getElementById('bd1');
    localStorage.setItem("ddob", h.value);
  
    var i = document.getElementById('pp1');
    localStorage.setItem("passnum", i.value);

    var yi = document.getElementById("natnat");
    localStorage.setItem("bansamo", yi.value);

    var ri = document.getElementById("disabledemerge");
    localStorage.setItem("disdis", ri.value);
  
    var k = document.getElementById('en2');
    localStorage.setItem("emname", k.value);
  
    var l = document.getElementById('cn2');
    localStorage.setItem("emcn", l.value);

}

function val12(){
  window.location.href="checkin13.html";
  var pota = localStorage.getItem("plastname");

}

function val13(){
  window.location.href="checkin23.html";
  var pota = localStorage.getItem("plastname");

}

var po = localStorage.getItem("plastname");
document.getElementById("mega1").plast3.value = po;

var ta = localStorage.getItem("pmidname");
document.getElementById("mega1").pmid3.value = ta;

var nga = localStorage.getItem("pfirstname");
document.getElementById("mega1").pfn3.value = nga;

var wew = localStorage.getItem("passnum");
document.getElementById("mega1").pp3.value = wew;

var ra = localStorage.getItem("ddob");
document.getElementById("mega1").bd3.value = ra;

var ga = localStorage.getItem("emname");
document.getElementById("mega1").en3.value = ga;

var ba = localStorage.getItem("emcn");
document.getElementById("mega1").cn3.value = ba;

var bu = localStorage.getItem("bansamo");
document.getElementById("mega1").counat.value = bu;

var wawa1 = localStorage.getItem("pgend");
if (wawa1 == 1){
  document.getElementById("mega1").male3.checked = true;
}
else {
  document.getElementById("mega1").female3.checked = true;
}

var wo = localStorage.getItem("disdis");
if(wo == 1){
  document.getElementById("mega1").sid.checked = true;
}





// var a2 = localStorage.getItem("pmidname");
// document.getElementById('ultra').pmid2.value = a2;

// document.getElementById('mega1').pmid3.value = a2;
// document.getElementById('mega1').pmid3.disabled = true;

// var a3 = localStorage.getItem("pfirstname");
// document.getElementById('ultra').pfn2.value = a3;

// document.getElementById('mega1').pfn3.value = a3;
// document.getElementById('mega1').pfn3.disabled = true;




































function savage1(){
  document.getElementById('infutnew').innerHTML = "Advanced Passenger Information for Kit Harrington";
  document.getElementById('infutnew').style.fontWeight = "bold";
}


function savage(){
  document.getElementById('infutnew').innerHTML = "Advanced Passenger Information for Stephen Hawkings";
  document.getElementById('infutnew').style.fontWeight = "bold";
}