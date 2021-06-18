const cep = document.querySelector("#input-cep")
const  rua = document.querySelector("#input-rua")
const  bairro = document.querySelector("#input-bairro")
const  cidade = document.querySelector("#input-cidade")
const  uf = document.querySelector("#input-uf")
const botao = document.querySelector("#btn")

botao.addEventListener("click", eventoClick)

async function eventoClick() {
  const cepValue = cep.value
  try{
   const  buscaCep= await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
  const resposta = await buscaCep.json ()
  
  rua.value =  resposta.logradouro
  bairro.value = resposta.bairro
  cidade.value = resposta.localidade
  uf.value = resposta.uf
  } catch  (erro) {
    alert("DIGITE UM CEP VALIDO")
  }
}
