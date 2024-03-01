function semafaro(){
    let verde = document.getElementById("verde").checked
    let amarelo = document.getElementById("amarelo").checked
    let vermelho = document.getElementById("vermelho").checked

    if(verde==true ){
        document.getElementById("mensagem").innerHTML = "Siga em frente"
    
    }
    else if ( amarelo==true ) { 
        document.getElementById("mensagem").innerHTML = "Atenção"
    
    }
    else{
        document.getElementById("mensagem").innerHTML = "Pare"
    
    }
    
}

switch(new Date().getDay()){
    case 0: document.getElementById("hoje").innerHTML= "Hoje é Domingo"
    break
    
    case 1: document.getElementById("hoje").innerHTML= "Hoje é segunda"
    break
    
    case 2: document.getElementById("hoje").innerHTML= "Hoje é terça"
    break
    
    case 3: document.getElementById("hoje").innerHTML= "Hoje é quarta"
    break
    
    case 4: document.getElementById("hoje").innerHTML= "Hoje é quinta"
    break
    
    case 5: document.getElementById("hoje").innerHTML= "Hoje é sexta"
    break
    
    case 6: document.getElementById("hoje").innerHTML= "Hoje é sábado"
    break
}

