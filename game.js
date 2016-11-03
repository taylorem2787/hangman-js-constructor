function randomWord(){
	var chars = ['kelly', 'zack', 'slater', 'screech', 'lisa', 'mrbelding', 'jessie'];
	var randNum = Math.floor(Math.random() * chars.length);
	return chars[randNum];
};

exports['random-word'] = randomWord;




