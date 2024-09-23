const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8002;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection successful!!!');
});


const OrderRouter = require('./routes/orderRoutes');
const LorryRouter = require('./routes/LorryRoute');
const RouteRouter = require('./routes/routeRoute')
const AuthRouter = require('./routes/authRoute');


app.use('/api/v1/order', OrderRouter);
app.use('/api/v1/lorry', LorryRouter);
app.use('/api/v1/route', RouteRouter);
app.use('/api/v1/user', AuthRouter);


app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
