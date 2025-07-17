const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SAHILKULARIA15:newdata@cluster1.w0v1gf3.mongodb.net/FOODDATASET', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;
