$(document).ready(function () {


    ////////////////////////////////////////////
    //////___SECCION SOBRE LA EMPRESA_____//////
    ///////////////////////////////////////////
    
    $("#toggle").click(function(){
        $(".panel").slideToggle("slow");
        });

    ////////////////////////////////////////////
    //////___BOTON VER MAS_____/////////////////
    ///////////////////////////////////////////
    let boton = $('#verMas');
    let cont  = 0;
    boton.click(function(){
        cont = cont + 1;
        console.log(cont);
        $(".datos").fadeToggle(1000, function(){
            if (cont%2 != 0) {
                boton.text("ver menos")
            }else{
                boton.text("ver mas")
                cont = 0;
            }
         });
        
    });

    ///////////////////////////////////////////
    /////___DESVANECIMIENTO IMG___////////////
    /////////////////////////////////////////
    $('#galeria>div>img').each(function (i) { 
         let id = $(this).attr("id");
         $(this).mouseover(function () { 
             switch (id) {
                 case "0":
                    $(this).fadeOut(800,function(){
                        $('div#0').html("<p class='box'>Frutos Secos</p>");
                    });
                     break;
                 case "1":
                    $(this).fadeOut(800,function(){
                        $('div#1').html("<p class='box'>Mix Silvestres</p>");
                    });
                     break;
                 case "2":
                    $(this).fadeOut(800,function(){
                        $('div#2').html("<p class='box'>Viandas Naturistas</p>");
                    });
                    break;
                 case "3":
                    $(this).fadeOut(800,function(){
                        $('div#3').html("<p class='box'>Set Familiar</p>");
                    });
                     break;
                 default:
                     break;
             }
             
         });
    });
});