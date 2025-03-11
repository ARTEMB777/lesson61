const express = require('express');
const router = require('./routes/index');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

const app = express();
const port = 3000;

app.use('/', router);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
