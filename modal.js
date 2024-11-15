var modal = document.getElementById("modal1");
const  Modal = document.getElementById("fechar") 
function Abrir(){
    
    modal.showModal();
}
function fechar(){
    Modal.style.display = "none"
}

function mascara_cpf(){
    var cpf_formatado = document.getElementById("cpf").value
    if(cpf_formatado[3]!=".")
    {
        if(cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value = cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
        }
    }

    if(cpf_formatado[7]!=".")
    {
        if(cpf_formatado[7]!=undefined)
        {
            document.getElementById("cpf").value = cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
        }
    }


    if(cpf_formatado[11]!="-")
    {
        if(cpf_formatado[11]!=undefined)
        {
            document.getElementById("cpf").value = cpf_formatado.slice(0,11)+"-"+cpf_formatado[11];
        }
    }
}

function mascara_tel(){
    var tel_formatado = document.getElementById("telefone").value
    if(tel_formatado[0] !="(")
    {
        if(tel_formatado[0] != undefined)
        {
            document.getElementById("telefone").value ="("+tel_formatado[0];
        }
    }

    if(tel_formatado[3] != ")")
    {
        if(tel_formatado[3] != undefined)
        {
            document.getElementById("telefone").value = tel_formatado.slice(0,3)+")"+tel_formatado[3];
        }

    }

    if(tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("telefone").value = tel_formatado.slice(0,9)+"-"+tel_formatado[9];
        }
    }

}
