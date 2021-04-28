
$( document ).ready(function() {
    $('#texto').bind('cut copy paste', function(event) {
        event.preventDefault();
        alert("Comando bloqueado!")
    }); 
    $(document).bind("contextmenu",function(e){
        alert("Eventos do Mouse bloqueados!")
        return false;
    });
    window.addEventListener('keydown', function (e) {
        var code = e.which || e.keyCode;
        if (code == 116) e.preventDefault();
        else return true;   
        alert("Comando bloqueado!")
    });
    window.addEventListener('keydown', function (e) {
        var code = e.which || e.keyCode;
        if (code == 9       ) e.preventDefault();
        else return true;
        alert("Comando bloqueado!")
    });
    window.addEventListener('keydown', function (e) {
        var code = e.which || e.keyCode;
        if (code == 123       ) e.preventDefault();
        else return true;
        alert("Comando bloqueado!")
    });
    window.addEventListener('keydown', function (e) {
        var code = e.which || e.keyCode;
        if (code == 18       ) e.preventDefault();
        else return true;
        alert("Comando bloqueado!")
        $("#texto").focus();
    });
    $("#texto").focus();
    relogio();
    $("#botaoProva").prop("disabled",true);
   
  
});

$(document).on("input", "#texto", function () {
    var limite = 5000;
    var informativo = "caracteres restantes.";
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    
    if(caracteresDigitados >1000){
    	$("#botaoProva").prop("disabled",false);
    }
    if (caracteresRestantes <= 0) {
        var comentario = $("textarea[name=comentario]").val();
        $("textarea[name=comentario]").val(comentario.substr(0, limite));
        $(".caracteres").text("0 " + informativo);
    } else {
        $(".caracteres").text(caracteresRestantes + " " + informativo);
    }
    
    
});

var min, seg;		min = 60;		seg = 1		
function relogio(){			
    if((min > 0) || (seg > 0)){				
        if(seg == 0){					
            seg = 59;					
            min = min - 1	
        }				
        else{					
            seg = seg - 1;				
        }				
        if(min.toString().length == 1){					
            min = "0" + min;				
        }				
        if(seg.toString().length == 1){					
            seg = "0" + seg;				
        }				
        document.getElementById('spanRelogio').innerHTML = min + ":" + seg;				
        setTimeout('relogio()', 1000);			
    }			
    else{				
        document.getElementById('spanRelogio').innerHTML = "00:00";			
    }		
}	
