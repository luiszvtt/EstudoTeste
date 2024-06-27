var t_fieldNome=document.querySelector("#nome");
//console.log(t_fieldNome);

var t_fieldAltura=document.querySelector("#altura");
//console.log(t_fieldAltura);

var t_fieldPeso=document.querySelector("#peso");
//console.log(t_fieldPeso);

var t_fieldData=document.querySelector("#date");
//console.log(t_fieldData);

var btnCalcular=document.querySelector("#btnCalcular");

//Funções
function somar(n1, n2){
    return n1+n2;
}

//console.log(somar(23,45));

//Qnd eu clicar no button ele vai somar os valores e imprimir no console

//td q é interativo no html e css pelo javascript, é um EVENTO
btnCalcular.addEventListener("click", function somar(e){
    console.log(`Nome:${t_fieldNome.value} Peso:${t_fieldPeso.value} Altura:${t_fieldAltura.value} DataNascimento:${t_fieldData.value}`)
})

//aq eu descrevo oq vai acontecer
//vms criar um template de str
