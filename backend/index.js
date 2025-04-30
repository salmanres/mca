// root file

const express = require('express');
const studentdata = require('./schema/StudentSchema');
const app = express();
const port = 3500;
require('./database/mongoose');

//middleware
app.use(express.json());

//REST API / RESTFUL API

app.get('/', (req, res) => {
    const user = {
        name: "ravi",
        email: "ravi@email.com"
    };
    res.send(user);
});

app.post('/addstudent', async (req, res) => {
    try {
        console.log(req.body);
        await studentdata.create(req.body);
        res.status(200).json({ message: "student data saved successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).send('internal server error!');
    }
});

app.get('/studentdata', async (req, res) => {
    try {
        const response = await studentdata.find({ course: { $eq: "bca" } });
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
});

app.put('/update', async (req, res) => {
    try {
        await studentdata.updateOne({ rollno: 1 }, { name: "raju" })
        res.status(200).send('data updated');
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`server is listening on port no ${port}`);
});