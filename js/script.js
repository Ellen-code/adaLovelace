document.getElementById("botaoEnviar").addEventListener("click",  contato)
 
function botaoEnviar (contato){
  if(document.getElementById("nome").value != "" &&   
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){
    
    alert("Prontinho! Você receberá as novidades por email!")
  }else{
    alert("Por favor, preencha os campos nome,email e telefone!")
  }

  return contato;
}