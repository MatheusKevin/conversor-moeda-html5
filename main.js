function callback(resultado) {
	var sMoedaDestino = $("#moeda_destino").val();
	var fvalor = resultado.rates[sMoedaDestino];
	
	$("#valor_destino").text(fvalor);
	$("#moeda_destino_cel").text(sMoedaDestino);
}

function chamarAPI() {
	var endpoint = "https://api.exchangeratesapi.io/latest";
	var oParametros = {
		base: $("#moeda_origem").val()
	};
	
	$.get(endpoint, oParametros, callback);
}