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

function usuario(nome,sobrenome,idade,altura){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
}

const listaUsuarios = [];

function cadastrarListaUsuario(){
    let TabelaUsuarios = document.getElementById("TabelaUsuarios")
    
    

    let nome = document.getElementById("nome2").value
    let sobrenome = document.getElementById("sobrenome2").value
    let idade = document.getElementById("idade2").value
    let altura = document.getElementById("altura2").value

        const usuarioPreenchido = new usuario(nome,sobrenome,idade,altura)

        listaUsuarios[listaUsuarios.length] = usuarioPreenchido
    


    TabelaUsuarios.innerHTML += "<tr>"
                                    +"<td>"+ usuarioPreenchido.nome +"</Td>"
                                    +"<td>"+ usuarioPreenchido.sobrenome +"</Td>"
                                    +"<td>"+ usuarioPreenchido.idade +"</Td>"
                                    +"<td>"+ usuarioPreenchido.altura+"</Td>"
                                    +"</tr>"
    document.getElementById("teste").innerHTML = listaUsuarios[0].nome + 
    listaUsuarios[1].nome
    

}