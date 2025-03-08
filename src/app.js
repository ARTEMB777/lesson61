const express = require('express');

const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

const app = express();
const port = 3000;

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

app.get('/', (req,res) => {
  res.send ('Get root route');
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
