
/*Case sensitive= reconhece letras maiusculas e minusculas
por tag: getElementByTagNamea()
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk=false
let mapa = document.querySelector('#mapa')


nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){  /* aqui eu preciso chamar a função na no html*/
  let txt = document.querySelector("#txtNome")
  if(nome.value.length < 3) { /* aqui eu valido se tem mais de tres letras no nome length*/
    txtNome.innerHTML = "Nome Invalido"
    txtNome.style.color = "red"
  }else{
    txtNome.innerHTML= "Nome valido"
    txtNome.style.color= "green"
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail  = document.querySelector('#txtEmail')
    
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) { /* aqui eu valido se tem o @ ou qualquer outra letra que queira no e-mail indexof */
      txtEmail.innerHTML = "E-mail inválido"  /*aqui eu escrevo a mensagem que devera aparecer para o usuario*/
      txtEmail.style.color ="red"
    }else{
      txtEmail.innerHTML = "E-mail válido"
      txtEmail.style.color ="green"
      emailOk= true
    }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if(assunto.value.length >= 100){
    txtAssunto.innerHTML = "Texto é muito grande, digite no maximo 100 caracteres"
    txtAssunto.style.color="red"
    txtAssunto.style.display = 'block'
  }else{
    txtAssunto.style.display = 'none' 
    assuntoOk= true
}
}
function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert ('Formulário enviado com sucesso!')
  }else{
    alert ('Preencha o formulario corretamente antes de enviar...')
  }
}

function mapaZoom (){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal (){
  mapa.style.width = '400px'
  mapa.style.height = '250px'

}
  
