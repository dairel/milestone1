var IMCController = {
	
	init: function() {
		IMCController.setForm();
	},
	
	setForm: function() {
		var form = document.getElementById('frm-imc');
		form.addEventListener('submit', function(event) {
			alert('Você clicou no botão que eu sei!');
			event.preventDefault(); //to avoid form submition
		});
	},
	
	calculateIMC: function() {
		
	},
	
	showResult: function() {
		
	}

};

//initialization
IMCController.init();