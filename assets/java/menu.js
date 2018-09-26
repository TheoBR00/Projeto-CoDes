document.addEventListener('DOMContentLoaded', function(){

	let lista = document.getElementsByClassName("lista")
	
	let fecha = document.getElementsByClassName("fecha")
	
	let rotulo = document.querySelectorAll('.rotulo')

	for(let i=0;i<rotulo.length;i++){
		rotulo[i].addEventListener('click',function(){
			document.getElementsByClassName("lista")[i].style.visibility = "visible"
			document.getElementsByClassName("fecha")[i].style.visibility = "visible"
		})
		fecha[i].addEventListener('click',function(){
			document.getElementsByClassName("lista")[i].style.visibility = "hidden"
			document.getElementsByClassName("fecha")[i].style.visibility = "hidden"
		})
		
	}
 
})