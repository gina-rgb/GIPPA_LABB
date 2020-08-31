/*(function() {
    $(document).ready(function(){
        $(".btn-menu") click(function(){
            var filtro = $(this).attr("data-filter");

            if (filtro == "todos") {
                $(".box-img").show(500);
            } else {
                $(".box-img").not("."+filtro).hide(500);
                $(".box-img").filter("."+filtro).show(500);
            }
        });
    });
}())*/

const grid = new Muuri ('.grid', {
    layout: {
        rounding: false,
    },
});

window.addEventListener('load', () => {
    
    document.getElementById('grid').classList.add('imagenes-cargadas');
});
