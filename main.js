function chamarAPI() {
	const endpoint = "https://api.exchangeratesapi.io/latest";
	$.get(endpoint, callback);
}

function callback(resultado) {
	var sMoedaDestino = $("#moeda_destino").val();
	var fvalor = resultado.rates[sMoedaDestino];
	
	$("#valor_destino").text(fvalor);
	$("#moeda_destino_cel").text(sMoedaDestino);
}