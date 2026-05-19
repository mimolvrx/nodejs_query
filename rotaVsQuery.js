const http = require('http');
const url = require('url');
// o módulo url ajuda a separar:
// pathname -> a rota
// query -> os dados enviados na url

const server = http.createServer((req, res) => {

    // Converte a URL (texto) em um objeto com informações organizadas
    const urlCompleta = url.parse(req.url,true);

    // Separação dos principais dados da requisição
    const rota = urlCompleta.pathname; 
    const query = urlCompleta.query;

    if(rota === "/teste" && req.method === "GET") {
        res.end(JSON.stringify({
            mensagem: 'Deu certo!',
            dadosRecebidos: query
        }));
        return;
    };
    // Caso a rota não seja localizada
    res.end('Rota não encontrada');
});
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});