let port = 81;
let express = require('express');
let app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get('/', (req, res) => {
    res.render("index", {
        title:"Train Display",
        message:`Listening on port: ${port}`,
        data:{}
    });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

