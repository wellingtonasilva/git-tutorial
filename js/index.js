$(document).ready(function() {
    console.log("ready");
});

$("#btn_sign_in").click(function(event) {
    //Verifica se o foi informado o e-mail do usuário
    if ($("#inputEmail").val().length == 0) {
        event.preventDefault();
        $("#exampleModalLabel").text("Aviso");
        $("#example_modal_body").text("Necessário informar o e-mail do usuário.");
        $("#exampleModal").modal('show');
        return;
    }

    if ($("#inputPassword").val().length == 0) {
        event.preventDefault();
        $("#exampleModalLabel").text("Aviso");
        $("#example_modal_body").text("Necessário informar a senha de acesso.");
        $("#exampleModal").modal('show');
        return ;
    }
    console.log("sign-in");
});

$("#btn_cliente_novo").click(function(event) {
    window.location = "cliente_manter.html";
});

$("#btn_cliente_manter_salvar").click(function(event) {
    event.preventDefault();
    window.location = "cliente.html";
});



