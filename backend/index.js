const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('This is another test route. good night');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
