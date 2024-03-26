// Lib Requires
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoDB = require('./app/db/mongo.js');

const settings = require('./settings.js');

if (!settings) {
    console.log('server.js - Missing settings.js file');
    process.exit(1);
}

if (!settings?.server?.port) {
    console.log('server.js - Missing settings.server.port config');
    process.exit(1);
}

const settingsPort = settings.port;

// require('./routes/index.js')(app);

app.use(cors());
app.use(bodyParser.json());

app.listen(settingsPort, () => {
    console.log('Server running on port 3001');

    // Stating mongo  
    mongoDB();
});