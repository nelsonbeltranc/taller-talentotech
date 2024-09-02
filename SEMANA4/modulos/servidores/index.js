const http = require ("http")

const puerto = 3000
http.createServer(function(request, response)
{
    response.write("Hola servidor")
    response.end()
}
).listen(puerto)
console.log("este es un servidor con puerto: " + puerto)