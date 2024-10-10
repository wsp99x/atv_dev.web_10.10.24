const btn = document.querySelector("#add");
const lista = document.querySelector("#lista");
const minhaArray = []
const deletar = document.querySelector("#del");
 
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const idade = document.querySelector("#age").value;
    if(idade>=65){
        inicioFila(idade)
    } else{
        fimFila(idade)
    }
 
})
function exibir(){
    lista.innerHTML = minhaArray;
}
function inicioFila(idade){
    minhaArray.unshift(idade);
    exibir();
}
function fimFila(idade){
    minhaArray.push(idade);
    exibir();
}
 
 
deletar.addEventListener('click',(e)=>{
    e.preventDefault();
    atender();
})
 
function atender(){
    minhaArray.shift()
    exibir()
}