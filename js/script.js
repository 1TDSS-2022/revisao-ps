

//RECUPERANDO O BOTÃO PARA QUE SEJA REALIZADO O PROCEDIMENTO DE
// DISPARO DO EVENTO DE VALIDAÇÃO
const botaoSubmit = document.getElementById('btnEnviar')

//ATRELAR UM EVENTO AO BOTÃO, PARA QUE QUANDO O BOTÃO FOR CLICADO, EU POSSA EXECUTAR UMA FUNÇÃO
// E RECUPERAR OS CAMPOS E REALIZAR UMA VALIDAÇÃO NAS INFORMAÇÕES NELES CONTIDAS.
botaoSubmit.addEventListener("click", ()=>{
    //RECUPERAR OS CAMPOS PARA VALIDAÇÃO
    //UTILIZANDO querySelectorAll para recuperar vários elementos no HTML.
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    //CRIANDO UMA ESTRUTURA PARA REALIZAR A LEITURA
    // DO ARRAY DE ELEMENTOS INPUT
    for(let x = 0 ; x < campos.length ; x++){
        //CRIANDO UMA ESTRUTURA DE VALIDAÇÃO
        //CONDICIONAL
        if(campos[x].value == ""){
            alert("O CAMPO "+ campos[x].placeholder +" não foi preenchido!")
            return
        }
    }

    //REALIZANDO O SUBMIT
    document.querySelector('.cadastro').submit()

})