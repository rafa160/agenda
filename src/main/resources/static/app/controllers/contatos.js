var http = require('http');

var contatos = [
	{nome: "Rafael", telefone: "99999-2222", data: new Date(), operadora: {nome: "Oi", categoria: "Celular"}},
	{nome: "Rafael", telefone: "99999-3333", data: new Date(), operadora: {nome: "Vivo", categoria: "Celular"}},
	{nome: "Rafael", telefone: "99999-9999", data: new Date(), operadora: {nome: "Tim",  categoria: "Celular"}}
];

http.createServer(function (req, res) {
 res.setHeader('Acess-Control-Allow-Origin','*');
 res.write(JSON.stringify(contatos));
 res.end();
}).listen(3214);



