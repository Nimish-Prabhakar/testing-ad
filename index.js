const app = require('./server.js');
const mongodb = require('mongodb');
const ServerApiVersion = require('mongodb');
const dotenv = require('dotenv');
const ipsDAO = require('./dao/ipsDAO');
const womenDAO = require('./dao/womenClickDAO');
const dealDAO = require('./dao/dealClickDAO');

dotenv.config();

const MongoClient = mongodb.MongoClient;

const PORT = process.env.PORT || 3000;

MongoClient.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .then(async (client) => {
    await ipsDAO.injectDB(client);
    await womenDAO.injectDB(client);
    await dealDAO.injectDB(client);
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  });
