const http = require('http');
const url = require('url');
// o módulo url ajuda a separar:
// pathname -> a rota
// query -> os dados enviados na url

const server = http.createServer((req, res) => {

    // Estamos aqui quebrando/separando a URL que chega para o servidor, assim, teremos ela como texto.
    const urlCompleta = url.parse(req.url,true);

    // Mostra no console tudo que o Node conseguiu entender da URL
    console.log(urlCompleta);

    // mensagem que vai ser exibida no navegador
    res.end('Veja o console');
}); 
// Porta de acesso ao servidor
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});