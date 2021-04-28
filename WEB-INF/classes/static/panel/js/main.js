

openNav = () =>{
	var navbar = $('.sidenav');
	var instance = M.Sidenav.getInstance(navbar);
	instance.open();
}

document.addEventListener('DOMContentLoaded', function() {
	M.AutoInit();
	

});

function mostrarModal(id){
	var xhttp = new XMLHttpRequest();
	 xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     document.querySelector("#modal-shell").innerHTML = this.responseText;
		    }
		  };
		  xhttp.open("GET", "/painel/mostrar/"+ parseInt(id), true);
		  xhttp.send();

}
$(document).ready(function () {
    $('#table').DataTable({
    	"language": {
            "lengthMenu": "",
            "zeroRecords": "Não Encontrado",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "Sem Registros",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "search": "Buscar:",
            "paginate": {
                "first":      "Primeira",
                "last":       "Última",
                "next":       "Próxima",
                "previous":   "Anterior"
            },
        }
    }
    		);
});
			
	