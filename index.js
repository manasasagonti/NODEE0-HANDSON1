//const { log } = require('console')
const http = require('http');
const data = require('./data')

const app = http.createServer((req,res) => {
    // res.write("hello world")
    // res.end()
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
    else if(req.url === '/html'){
        res.write("<h1>hello world</h1>");
        res.end();
    }
    else if(req.url === '/json'){
        const stringData = JSON.stringify(data);
        res.write(stringData);
        res.end();
    }
})
app.listen(5000, () => {
    console.log("server started successfully");
})