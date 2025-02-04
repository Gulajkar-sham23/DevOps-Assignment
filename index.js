const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('Hello from DevOps teams ! your server is now running'));
app.listen(PORT, () => console.log(`node app is  running on port ${PORT}`));
