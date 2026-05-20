// importando os módulos necessários
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    // quebra a url em partes (rota e query) e transforma em objeto
    const urlCompleta = url.parse(req.url,true);

    const rota = urlCompleta.pathname;
    const query = urlCompleta.query;

    res.setHeader('Content-Type', 'application/JSON');

    // método GET com query
    if(rota === "/teste" && req.method === "GET"){
        res.end(JSON.stringify({
            tipo: 'query',
            dados: query
        }));
        return;
    }

    // método POST com body
    if(rota === "/dados" && req.method === "POST"){
        let body = '';
        req.on('data', (parte) => {
            body += parte;
        });
        req.on('end', () => {
            const dados = JSON.parse(body);

            res.end(JSON.stringify({
                tipo: 'body',
                dados: dados
            }));
        });
        return;
    }
    res.end(JSON.stringify({mensagem: 'Rota não encontrada'}));
});
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});