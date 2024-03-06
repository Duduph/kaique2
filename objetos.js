function cadastrarUsuario(){
    let usuario = {
        nome : "",
        sobrenome : "",
        idade : 0,
        altura : 0,
        testeidade : function(){
            if(this.idade>18){

            return "usuario maior de idade"

            }else{
                return "usuario menor de idade"

            }

        }

    };

    usuario.nome = document.getElementById("nome").value
    usuario.sobrenome = document.getElementById("sobrenome").value
    usuario.idade = document.getElementById("idade").value
    usuario.altura = document.getElementById("altura").value



    document.getElementById("informacoes").innerHTML = "O usuário " + usuario.nome + 
    " com sobrenome " + usuario.sobrenome + 
   " com a idade de " + usuario.idade + 
    " anos e de altura " + usuario.altura
    + usuario.testeidade();

}

function cadastrarListaUsuario(){
    let TabelaUsuarios = document.getElementById("TabelaUsuarios")
    let usuario = {
        nome : "",
        sobrenome : "",
        idade : 0,
        altura : 0,
    }

    usuario.nome = document.getElementById("nome2").value
    usuario.sobrenome = document.getElementById("sobrenome2").value
    usuario.idade = document.getElementById("idade2").value
    usuario.altura = document.getElementById("altura2").value

    


    TabelaUsuarios.innerHTML += "<tr>"
                                    +"<td>"+ usuario.nome +"</Td>"
                                    +"<td>"+ usuario.sobrenome +"</Td>"
                                    +"<td>"+ usuario.idade +"</Td>"
                                    +"<td>"+ usuario.altura+"</Td>"
                                    +"</tr>"
    
    

}