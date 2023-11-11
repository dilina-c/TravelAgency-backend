require('dotenv').config();
const exprees = require('express');
const app = exprees();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(exprees.json());

const travelagentRouter = require('./routes/travelagent');
app.use('/travelagent', travelagentRouter);

app.listen(3000, () => console.log('Server running on port 3000'));