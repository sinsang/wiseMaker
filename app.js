const path = require('path');
const express = require('express');
const app = express();
var port = normalizePort(process.env.PORT || '3000');

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
}


app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

//------------------
//      GET
//------------------
app.get("/", (req, res) => {
    res.render("index.html");
});
//------------------
//      GET
//------------------


app.listen(port, () => {
    console.log("listen at " + port);
});