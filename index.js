const http = require('http');
const porta = 443;


const servidor = http.createServer((req,res) => {

  res.writeHead(200,{'content-type':'text/plain'})
  res.write('Primeiro servidor node')
  res.end()
})
servidor.listen(porta, () => {console.log('Servodor rodando')})