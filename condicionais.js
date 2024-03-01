if(new Date().getHours() < 12 ){
    document.getElementById("saudacao").innerHTML = "Bom Dia"

}
else if ( new Date().getHours() < 13 ) { 
    document.getElementById("saudacao").innerHTML = "Boa tarde"

}
else{
    document.getElementById("saudacao").innerHTML = "Boa Noite"

}

