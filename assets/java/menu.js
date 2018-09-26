document.addEventListener('DOMContentLoaded', function(){

	let lista = document.getElementsByClassName("lista")
	
	let fecha = document.getElementsByClassName("fecha")
	for(let item of fecha){
		item.style.visibility = "hidden"
	}
	
	let rotulo = document.querySelectorAll('.rotulo')

	for(let i=0;i<rotulo.length;i++){
		rotulo[i].addEventListener('click',function(){
			setTimeout(10,document.getElementsByClassName("lista")[i].style.visibility = "visible")
			document.getElementsByClassName("fecha")[i].style.visibility = "visible"
		})
		fecha[i].addEventListener('click',function(){
			document.getElementsByClassName("lista")[i].style.visibility = "hidden"
			document.getElementsByClassName("fecha")[i].style.visibility = "hidden"
		})
		
	}
 
})