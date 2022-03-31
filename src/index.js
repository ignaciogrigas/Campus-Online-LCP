const express = require("express");
const app = express();
const path = require("path");

app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),()=>console.log("Server on http://localhost:" + app.get("port")))

//app settings
app.set("view engine", "ejs")
app.set("views",path.resolve(__dirname, "./views"))

//public access
app.use(express.static(path.resolve(__dirname, "../public")))

//app middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//app routes
app.use(require("./routes/web.js"))