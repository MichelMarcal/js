$("#formCadastroADM").submit(function(event){
    event.preventDefault();
    let element = event.target;
    console.log(`Accessing the registration form | event: ${element.tagName}`);

    let txtnome = $("#txtNome").val();
    let txttelefone = $("#txttel").val();

    let data = {
        nome: txtnome,
        telefone: txttelefone
    };

    localStorage.setItem('pessoa', JSON.stringify(data));
});
function executarFucaoMouseOver(){
    console.log('Passei o mouse')
}