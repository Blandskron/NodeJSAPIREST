const express = require('express');
const routerApi = require('./routes');

<<<<<<< HEAD
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

=======
>>>>>>> 99e6de2fd22eb0f5788d4966dbae5008bedead91
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

<<<<<<< HEAD
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


=======

>>>>>>> 99e6de2fd22eb0f5788d4966dbae5008bedead91
app.listen(port, () => {
  console.log('Mi port' +  port);
});
