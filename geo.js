$(function(){
	var geo = navigator.geolocation;
	var opciones = {}

	function geo_error () {
		console.log("No puedo obtener donde estas");
	}

	function geo_exito(posicion){
		console.log(posicion);
		var lat  = posicion.coords.latitude;
		var lon  = posicion.coords.longitude;
		var mapa = new Image();
		/*maptype sirve para decir que tpo de mapa queremos
		y con =satellite podemos poner un mapa de tipo satelite,
		usando =hybrid podemos ver el mapa de satelite con toda la informacion
		del mapa normal*/
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
		/* append puede recibir texto u objetos*/
		$('#geo').append(mapa);

		/*window Creamos una variable global, que funcionara en otros archivos js*/
		//window.lat = lat; window.lon = lon;

		obtenerGeoInformacion(lat, lon)
	}
/*Con eso comenzamos a pedir lageolocalización,pasamos tres parametros, el primero en aso de que podamos obtener la ubicación, la segunda sera en caso de que no se haya podido y la tercera sera las opciones*/
geo.getCurrentPosition(geo_exito, geo_error, opciones);
});