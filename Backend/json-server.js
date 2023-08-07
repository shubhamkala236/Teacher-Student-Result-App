const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServer.bodyParser);
server.use(router);


server.listen(3000,()=>{
    console.log('JSON Server at port 3000');
})

// json-server --watch db.json