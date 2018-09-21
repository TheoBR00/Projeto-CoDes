document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://teste-codesign-f20ea.firebaseio.com/')

	let para = extract()

	let path = '/' + para['categoria'] + '/projetos/' + para['project']
	
	db.download(path, function(data) {
		replace('body', {
		'Título': para['project'],
        'Descrição1': data['descricao'],
        'Descrição2':data['objetivo']
 		 })
		replace('head', {
			'Entregável': para['project']
		})
	})
})