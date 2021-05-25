"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,0.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%";
    
var formulario = document.getElementById("formulario"),
    telefono= document.getElementById("telefono"),
    pantalla= document.getElementById("pantalla"),
    alerta= document.getElementById("alerta"),
    tortas = document.getElementsByName("torta"),
    salidaselec= document.getElementById("SalidaSeleccionaste"),
    salidaTot= document.getElementById("SalidaTotal"),
    datosgen= document.getElementById("datosgen"),
    fecha = document.getElementById("fecha");
    
    
    telefono.addEventListener('keydown',validaNumericos,true);
    pantalla.addEventListener('click',procesar,true);
    alerta.addEventListener('click',procesar,true);
    
function validaNumericos(event){
    console.log(event.charCode);
    if((event.charCode >= 48 && event.charCode <= 57))
        return true;
    else 
        return false;  
}

function procesar(){
    console.log(this.value);
    var bot= this.value;
    
    var tortasvec =[];
    var largo=tortas.length;
    var precio=0;
    
    for(var x=0;x<largo;x++)
    {
        var torta=tortas[x];
        console.log(torta);
        if(torta.checked)
        {
            console.log(torta.id+'|'+torta.value);
            tortasvec.push(torta.id);
            precio+=parseInt(torta.value);
        }
    }
    
    var salidavec=tortasvec.join(", ");
    var salidaprecio = numeral(precio).format(FMT_MONEDA);
    
    salidaselec.textContent=salidavec;
    salidaTot.textContent=salidaprecio;
    
    var date= new Date(fecha.value);
    var salidaFecha = (date.getDate()+1)+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    console.log(salidaFecha);
    var salidagen="Clave: "+formulario["clave"].value.trim()+" Nombre: "+formulario["nombre"].value.trim()+" Tel: "+formulario["telefono"].value.trim()+" Fecha: "+salidaFecha;
    
    if(bot=='EnPantalla')
        datosgen.innerHTML=salidagen;
    else
        alert(salidagen);
}
