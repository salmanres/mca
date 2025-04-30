const mongoose = require('mongoose');
const url = 'mongodb+srv://zebsoft:KO1yATRwKBt4sJ1y@zebsoft.iyoy4go.mongodb.net/sample_mflix';

mongoose.connect(url).then(()=>{
    console.log('databse connecte!');
});