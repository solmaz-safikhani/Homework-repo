const express = require('express');
const dotenv = require('dotenv'); 
const logger = require('./middleware/logger.middleware');
const bodyParserMiddleware = require('./middleware/body-parser.middleware');
const corsMiddleware = require('./middleware/cors.middleware'); 
const productsRouter = require('./routes/products.routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(logger);
bodyParserMiddleware(app);
corsMiddleware(app);

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});