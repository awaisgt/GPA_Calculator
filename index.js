document.getElementById("btn").onclick=func;
function func(){
creditpoint=0;
totalcredithours=8;


 var webinput = document.getElementById("webin").value
 var weblinput=document.getElementById("weblin").value;
 var vpinput= document.getElementById("vpin").value;
 var vplinput= document.getElementById("vplin").value;
 var dccninput= document.getElementById("dccnin").value;
 var caoinput= document.getElementById("caoin").value;
 var nminput= document.getElementById("nmin").value;
 var toainput= document.getElementById("toain").value;


if(webinput=="F"){
document.getElementById("webout").innerHTML="FAIL"
}
else{
  document.getElementById("webout").innerHTML="PASS"
}

if(weblinput=="F"){
document.getElementById("weblout").innerHTML="FAIL"
}
else{
  document.getElementById("weblout").innerHTML="PASS"
}

if(vpinput=="F"){
document.getElementById("vpout").innerHTML="FAIL"
}
else{
  document.getElementById("vpout").innerHTML="PASS"
}

if(vplinput=="F"){
document.getElementById("vplout").innerHTML="FAIL"
}
else{
  document.getElementById("vplout").innerHTML="PASS"
}


if(dccninput=="F"){
document.getElementById("dccnin").innerHTML="FAIL"
}
else{
  document.getElementById("dccnout").innerHTML="PASS"
}

if(caoinput=="F"){
document.getElementById("caoin").innerHTML="FAIL"
}
else{
  document.getElementById("caoout").innerHTML="PASS"
}

if(nminput=="F"){
document.getElementById("nmin").innerHTML="FAIL"
}
else{
  document.getElementById("nmout").innerHTML="PASS"
}


if(toainput=="F"){
document.getElementById("toain").innerHTML="FAIL"
}
else{
  document.getElementById("toaout").innerHTML="PASS"
}




//FOR WEB Engineering

if( webinput=="F"||webinput=="f" ){
creditpoint +=0;

}
else if(webinput=="D"||webinput=="d"){
  creditpoint +=1.5;
}
else if(webinput=="C"||webinput=="c"){
  creditpoint +=2.00;
}
else if(webinput=="C+"||webinput=="c+"){
  creditpoint +=2.5;
}
else if(webinput=="B"||webinput=="b"){
  creditpoint +=3;
}
else if(webinput=="B+"||webinput=="b+"){
  creditpoint +=3.5;
}
else if(webinput=="A"||webinput=="a"){
  creditpoint +=4;
}

//FOR theory of Automata

if(toainput=="F"||toainput=="f"){
creditpoint +=0;

}
else if(toainput=="D"||toainput=="d"){
  creditpoint +=1.5;
}
else if(toainput=="C"||toainput=="c"){
  creditpoint +=2.00;
}
else if(toainput=="C+"||toainput=="c+"){
  creditpoint +=2.5;
}
else if(toainput=="B"||toainput=="b"){
  creditpoint +=3;
}
else if(toainput=="B+"||toainput=="b+"){
  creditpoint +=3.5;
}
else if(toainput=="A"||toainput=="a"){
  creditpoint +=4;
}






//FOR web Engineeringlab

if(weblinput=="F"||weblinput=="f"){
creditpoint +=0;

}
else if(webinput=="D"||webinput=="d"){
  creditpoint +=1.5;
}
else if(weblinput=="C"||weblinput=="c"){
  creditpoint +=2.00;
}
else if(weblinput=="C+"||weblinput=="c+"){
  creditpoint +=2.5;
}
else if(weblinput=="B"||weblinput=="b"){
  creditpoint +=3;
}
else if(weblinput=="B+"||weblinput=="b+"){
  creditpoint +=3.5;
}
else if(weblinput=="A"||weblinput=="a"){
  creditpoint +=4; //IA MERA HAR SUBJECT MAI XD
}




//FOR Visual Programming
if(   vpinput=="F"||vpinput=="f"){
creditpoint +=0;

}
else if(vpinput=="D"||vpinput=="d"){
  creditpoint +=1.5;
}
else if(vpinput=="C"||vpinput=="c"){
  creditpoint +=2.00;
}
else if(vpinput=="C+"||vpinput=="c+"){
  creditpoint +=2.5;
}
else if(vpinput=="B"||vpinput=="b"){
  creditpoint +=3;
}
else if(vpinput=="B+"||vpinput=="b+"){
  creditpoint +=3.5;
}
else if(vpinput=="A"||vpinput=="a"){
  creditpoint +=4;
}


//FOR Visual Programming lab

if( vplinput=="F"||vplinput=="f"   ){
creditpoint +=0;

}
else if(vplinput=="D"||vplinput=="d"){
  creditpoint +=1.5;
}
else if(vplinput=="C"||vplinput=="c"){
  creditpoint +=2.00;
}
else if(vplinput=="C+"||vplinput=="c+"){
  creditpoint +=2.5;
}
else if(vplinput=="B"||vplinput=="b"){
  creditpoint +=3;
}
else if(vplinput=="B+"||vplinput=="b+"){
  creditpoint +=3.5;
}
else if(vplinput=="A"||vplinput=="a"){
  creditpoint +=4;
}


//FOR DCCN

if( dccninput=="F"||dccninput=="f" ){
creditpoint +=0;

}
else if(dccninput=="D"||dccninput=="d"){
  creditpoint +=1.5;
}
else if(dccninput=="C"||dccninput=="c"){
  creditpoint +=2.00;
}
else if(dccninput=="C+"||dccninput=="c+"){
  creditpoint +=2.5;
}
else if(dccninput=="B"||dccninput=="b"){
  creditpoint +=3;
}
else if(dccninput=="B+"||dccninput=="b+"){
  creditpoint +=3.5;
}
else if(dccninput=="A"||dccninput=="a"){
  creditpoint +=4;
}



//FOR CAO

if(caoinput=="F"||caoinput=="f"  ){
creditpoint +=0;

}
else if(caoinput=="D"||caoinput=="d"){
  creditpoint +=1.5;
}
else if(caoinput=="C"||caoinput=="c"){
  creditpoint +=2.00;
}
else if(caoinput=="C+"||caoinput=="c+"){
  creditpoint +=2.5;
}
else if(caoinput=="B"||caoinput=="b"){
  creditpoint +=3;
}
else if(caoinput=="B+"||caoinput=="b+"){
  creditpoint +=3.5;
}
else if(caoinput=="A"||caoinput=="a"){
  creditpoint +=4;
}



//FOR Numerical analysis
if(nminput=="F"||nminput=="f"){
creditpoint +=0;

}
else if(webinput=="D"||webinput=="d"){
  creditpoint +=1.5;
}
else if(nminput=="C"||nminput=="c"){
  creditpoint +=2.00;
}
else if(nminput=="C+"||nminput=="c+"){
  creditpoint +=2.5;
}
else if(nminput=="B"||nminput=="b"){
  creditpoint +=3;
}
else if(nminput=="B+"||nminput=="b+"){
  creditpoint +=3.5;
}
else if(nminput=="A"||nminput=="a"){
  creditpoint +=4;
}


var gpa = creditpoint/totalcredithours;
/*

As we are considering every subject as 1 credit hour subject that is why
the formula for Gpa is creditpoint/totalcredithours
but if we have different credit hours for different subjects then formula
would be gpa = creditpoint*credithour/totalcredithours


*/
document.getElementById("result").innerHTML=gpa;


};
