const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // assuming your form is in public/index.html
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'sukand_k' && password === '123456@') {
        res.send(`<h1 style="text-align:center;color:green;margin-top:50px;">Welcome ${username}!</h1>`);
    } else {
        res.send(`<h1 style="text-align:center;color:red;margin-top:50px;">Invalid credentials. Please try again!</h1>`);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
