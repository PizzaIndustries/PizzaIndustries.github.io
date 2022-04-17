const options = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': '3cd4e339d5msh1290b284a190302p129dbajsn9fe6d26e3401'
	}
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));