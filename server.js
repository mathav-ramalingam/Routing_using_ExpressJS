const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
   
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/coffee', (req, res) => {
 
    res.sendFile(path.join(__dirname, 'coffee.html'));
});
app.get('/aboutus', (req, res) => {
 
    res.sendFile(path.join(__dirname, 'aboutus.html'));
});

const PORT = 4000;
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});