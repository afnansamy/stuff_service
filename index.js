const express = require('express');
const { sequelize } = require('./models');
const stuffRoute = require('./routes/stuff')

const app = express();
app.use(express.json())

const PORT = 5000;

//stuff routes
app.use('/stuff', stuffRoute);

app.listen(PORT, async () => {
    console.log(`Server up on http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log('Database Connected')
});