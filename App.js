const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courses');

const app = express();

mongoose.connect('mongodb://localhost:27017/courseregistrationsystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

app.use(express.json());

app.use('/api', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});