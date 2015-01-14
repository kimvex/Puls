var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

/*setInterval Recibe 2 parametros, una funcion que se va ajecutar y los
milisegundos que tardara para volverse a ejecutar esa funcion.*/
var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarFormulario (g) {
	g.preventDefault();//Con esto sustituimos el return
	g.stopPropagation(); //Evita la propagacion de una funcion---nose de que tipo
	//slideToggle Desoculta y oculta un tag
	$form.slideToggle();
	/*return false; al retornar false hace que nuestro diseño
	no se mueva hacia arria acausa de un href="#"*/
	$list.slideToggle();

	//return false;
}
function agregarPost(e){
	//e.preventDefault();//Con esto sustituimos el return
	var url = $url.val(),//sera igaul al contenido del campo url
		titulo = $titulo.val(),//sera igual al contenido del campo titulo
		//clone() nos clona el elemento que le decimos, o primer clon
		clone = $post.clone();
	//find es un selector que busca todos los que se parescan en css
	clone.find(".titulo_item a")
		//.text seleccionamos el texto*
		.text(titulo)
		//attr seleccionamos la url y attr significa atributo
		.attr("href", url);
	
	/*$clone.find(".datos_item .tag_item")
		.text(titulo)*/
	//Ocultamos el clon
	clone.hide();

	//prepend agrega el clon de primer lugar en el html
	/*append agrega el clon al final*/
	$list.prepend(clone);

	mostrarFormulario(e)
    /*Limpiamos los campos*/
    $titulo.val('');
    $url.val('');

	clone.slideDown();
	//fadeIn() Nos crea una animacion a la hora de agregar el clon
	//$clone.fadeIn();
	/*return false; Con este evitamos que la pagina se recargue para intentar
	enviar los datos*/
	//return false;
	$('#publicar_nav a').toggleClass('disabled');
}
$('nav').on('click', function(){ console.log("Soy un nav y me hicieron click")});
$('nav ul').on('click', function(){ console.log("Soy un ul y me hicieron click")});
//Eventos
$button.click(mostrarFormulario);
$form.on("submit", agregarPost);
//	.find('#url')
/* el focus se activa cuando sleccionamos la accion*/
//	.on('focus', function(){
//		$('#url').val('http://')
//	})
/*blur es el contrario de focus */
//	.on('blur', function(){
//		$('#url').val('')
//	});

/*$('h1').html('Hola como estas'); Esto hace que se modifique el html
de la propiedad que hemos elegido pddemos agregar tambien etiquetas*/
/*document.cookie = "nombre = benjamin" crea una cookie*/

/*Para hacer el cambio de clase en algun boton o algo seria de la siguiente
manera:*/
$(function(){
	$('#publicar_nav a').on('click', function(){
		$(this).toggleClass('disabled');
	})
})