document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://teste-codesign-f20ea.firebaseio.com/')

	let para = extract()

	let path = '/' + para['categoria'] + '/projetos/' + para['project']
	
	db.download(path, function(data) {
		replace('body', {
		'Título': para['project'],
        'Descrição1': data['descricao'],
        'Descrição2':data['objetivo'],
        'imagens': data['imagem'],


 		 })
		replace('head', {
			'Entregável': para['project']
		})
		
		
		let image = document.querySelectorAll('.filho')
		let i = 0
		for (let elemento of image){
			while (i < i +1){
				elemento.src=data['imagem'][i]
				i = i + 1
				break
				}
				
				

			}
		

	})

		
		
})