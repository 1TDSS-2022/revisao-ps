const botaoSubmit = document.getElementById('btnEnviar')


//atrelar um evento ao boao, paara que quando o botao for clicado, eu possa executar uma funcao
//e recuperar os campos e realizar uma validação das informações neles contidos.

botaoSubmit.addEventListener("click", ()=> {
    //Recupera os campos para validação
    const campos = document.querySelectorAll("input[type ='text'], input[type='email']")

    //criando uma estrutura para realizar a leitura
    //do array de elementos input
    for(let x=0; x < campos.length; x++){
        //criando uma estrutura de validação com condicional
        if(campos[x].value == ""){
            alert("O campo " + campos[x].placeholder + " não foi preenchido")
            return
        }
    }

    //Realizar o submit
    document.querySelectorAll('.cadastro').submit()
})