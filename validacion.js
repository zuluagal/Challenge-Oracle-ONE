//Haz tú validación en javascript acá

const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensage = document.getElementById('mensage')
const form = document.getElementById('form')
const form__msg = document.getElementById('form__msg')
const form__msg__enviado = document.getElementById('form__msg__enviado')

form.addEventListener("submit", e=>{
	e.preventDefault()
	if(mensage.value.length < 15){
		//alert("El mensaje es muy corto...")
		document.getElementById('form__msg').style.display = 'block';
		document.getElementById('form__msg__enviado').style.display = 'none';
		document.getElementById('form__msg').innerHTML = "El mensaje es muy corto.";
	}else{
		document.getElementById('form__msg__enviado').style.display = 'block';
		document.getElementById('form__msg').style.display = 'none';
		document.getElementById('form__msg__enviado').innerHTML = "Mensaje enviado exitosamente!.";
	}

	
	if(nombre.value.length < 1){
		//alert("El mensaje es muy corto...")
		document.getElementById('form__msg').innerHTML = "El nombre no es valido.";
	}
	if(email.value.length < 1){
		//alert("El mensaje es muy corto...")
		document.getElementById('form__msg').innerHTML = "El email no es valido.";
	}
	if(asunto.value.length < 1){
		//alert("El mensaje es muy corto...")
		document.getElementById('form__msg').innerHTML = "El asunto no es valido.";
	}
})