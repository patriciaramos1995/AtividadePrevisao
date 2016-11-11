$('.mostrarPrev').on('click', function() {
	var selecionado = $('#cidades').val();
	$.ajax({
	url:'http://servicos.cptec.inpe.br/XML/cidade/'+selecionado+'/previsao.xml',
	
	error: function(erro) {
		alert(erro.responseText, 3000, 'redtext');
	},
	
	success: function(dados) {
		var contDiv = document.querySelector("#conteudo");
		contDiv.innerHTML = "";
			$(dados).find('cidade').each(function() {
				$(dados).find('previsao').each(function() {
					var dia = $(this).find('dia');
					var min = $(this).find('minima');
					var max = $(this).find('maxima');
			contDiv.innerHTML += "Dia: " + dia.text() + " Min.: " + min.text() + " Max.: " +max.text() + "<br/>";
				});
			});
	}});
});


