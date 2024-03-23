const http = require('http');
const app = require('./app');
const PORT = process.env.PORT||8000;
const Server = http.createServer(app);
Server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}...`);
});