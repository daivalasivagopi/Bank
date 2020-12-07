const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const port = 3000;

const fileName = './data.json';
app.use(express.json());

let data = require(fileName);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/createBankAccounts', (req, res) => {
    try {
        const userData = req.body;
        fs.writeFile('fileName', JSON.stringify(userData), (err) => {
            if(err) throw err;
            console.log('file updated');
        })
        res.status(200).send('Your Profile updated succesfully!!')
    } catch (err) {
        res.status(500).send("Server error please try after some time..")
    }

});

app.listen(port, () => {
    console.log(`App listening to port: ${port}`);
})