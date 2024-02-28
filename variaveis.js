function CalcularDoisNumeros(){
   let n1 = document.getElementById("N1").value
   let n2 = document.getElementById("N2").value

   let resultado =  parseInt (n1) * parseInt (n2)

   document.getElementById("resultado").innerHTML = resultado
}
function subtrair(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
 
    let resultado =  parseInt (n1) - parseInt (n2)

 
    document.getElementById("resultado").innerHTML = resultado
 }
 function multiplicar(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
 
    let resultado = parseInt (n1) * parseInt (n2)

 
    document.getElementById("resultado").innerHTML = resultado
 }
 function somar(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
 
    let resultado = parseInt (n1) + parseInt (n2)

 
    document.getElementById("resultado").innerHTML = resultado
 }
 function calcular(){
    let x = 0 
   
   x++

   x++
    
   document.getElementById("operadores").innerHTML = x
   x+=2

    
   document.getElementById("operadores").innerHTML = x


 }