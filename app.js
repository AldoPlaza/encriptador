
let texarea2 = document.querySelector("#texAreaid2");
let imagen = document.querySelector("#divimagen");
let Texto = document.querySelector("#resulid");

let codificacion="";





function encriptar() {

        imagen.style.display ='none';
        Texto.style.display ='block'

        texarea2.innerHTML="";

    let msgecrip = (document.getElementById('texAreaid').value);
     
    var cadena = msgecrip.toLowerCase();

for (let x = 0; x < msgecrip.length; x++) {

cadena1=cadena.substr(0,1);

     if(cadena1=="a"){
         cadena1="ai";
 codificacion=codificacion+cadena1;
 cadena=cadena.substr(1);

     }  
    
       else if(cadena1=="e"){
         cadena1="enter";
 codificacion=codificacion+cadena1;
 cadena=cadena.substr(1);

     }   
     
       else if(cadena1=="i"){
         cadena1="imes";
 codificacion=codificacion+cadena1;
 cadena=cadena.substr(1);

     }  
    
       else if(cadena1=="o"){
         cadena1="ober";
 codificacion=codificacion+cadena1;
 cadena=cadena.substr(1);

     }
    
     else if(cadena1=="u"){
         cadena1="ufat";
 codificacion=codificacion+cadena1;
 cadena=cadena.substr(1);
     }

     else{
         codificacion=codificacion+cadena1;
         cadena=cadena.substr(1);
     }

}
texarea2.innerHTML=codificacion;
codificacion="";

    return;
}

function acentos(){
        
console.log("acentos ");
let texto = (document.getElementById("texAreaid").value);
let cont12 ="";
let simbolo="";
cont12=texto .substr(-1);

simbolo=cont12.charCodeAt(0)
console.log('x'+simbolo);
if(simbolo>96 && simbolo<123 ){

}else{
   
     if(cont12=="á"||cont12=="é"||cont12=="í"||cont12=="ó"||cont12=="ú"){

cont12= cont12.replace("á", "a");
cont12 = cont12.replace("é", "e");
cont12 = cont12.replace("í", "i");
cont12 = cont12.replace("ó", "o");
cont12 = cont12.replace("ú", "u");



let txt=texto.slice(0, -1);





 document.getElementById("texAreaid").value =txt+cont12;
}else{
    if(cont12=="ñ"){
let txt=texto.slice(0, -1);
 document.getElementById("texAreaid").value =txt+cont12;
    }else{
    alert("No se aceptan simbolos o mayusculas");
     let txt=texto.slice(0, -1);
    document.getElementById("texAreaid").value =txt;
    }
}

}
}

function desencriptar() {

            imagen.style.display ='none';
            Texto.style.display ='block'

let msgecrip = (document.getElementById('texAreaid').value).toLowerCase();

msgecrip = msgecrip.replace(/ai/g, "a");
msgecrip = msgecrip.replace(/enter/g, "e");
msgecrip = msgecrip.replace(/imes/g, "i");
msgecrip = msgecrip.replace(/ober/g, "o");
msgecrip = msgecrip.replace(/ufat/g, "u");

texarea2.innerHTML=msgecrip;
}

function copiar() {
    let copy = texarea2.value;
    navigator.clipboard.writeText(copy);
}