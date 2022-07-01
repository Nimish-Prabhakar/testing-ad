const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectId;

let deal;

class dealDAO {
  static async injectDB(conn) {
    if (deal) {
      return;
    }
    try {
      deal = await conn.db(process.env.IP_TABLE).collection('dealClick');
    } catch (e) {
      console.log('error connecting to collections dealclick');
    }
  }

  static async dealPageClicked(clicked) {
    try {
      const dealDoc = {
        clicked: clicked,
      };

      return await deal.insertOne(dealDoc);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = dealDAO;
