var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

function mostrarFormulario () {
	//slideToggle Desoculta y oculta un tag
	$form.slideToggle();
	/*return false; al retornar false hace que nuestro diseño
	no se mueva hacia arria acausa de un href="#"*/
	return false;
}
function agregarPost(){
	var url = $url.val(),//sera igaul al contenido del campo url
		titulo = $titulo.val(),//sera igual al contenido del campo titulo
		//clone() nos clona el elemento que le decimos, o primer clon
		$clone = $post.clone();
	//find es un selector que busca todos los que se parescan en css
	$clone.find(".titulo_item a")
		//.text seleccionamos el texto
		.text(titulo)
		//attr seleccionamos la url
		.attr("href", url);
	
	/*$clone.find(".datos_item .tag_item")
		.text(titulo)*/
	//Ocultamos el clon
	$clone.hide();

	//prepend agrega el clon de primer lugar en el html
	$list.prepend($clone);

	//fadeIn() Nos crea una animacion a la hora de agregar el clon
	$clone.fadeIn();
	/*return false; Con este evitamos que la pagina se recargue para intentar
	enviar los datos*/
	return false;
}
//Eventos
$button.click(mostrarFormulario)
$form.on("submit", agregarPost);