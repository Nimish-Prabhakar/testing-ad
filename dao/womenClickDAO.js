const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectId;

let women;

class womenDAO {
  static async injectDB(conn) {
    if (women) {
      return;
    }
    try {
      women = await conn.db(process.env.IP_TABLE).collection('womenClick');
    } catch (e) {
      console.log('error connecting to collections womenclick');
    }
  }

  static async womenPageClicked(clicked) {
    try {
      const womenDoc = {
        clicked: clicked,
      };

      return await women.insertOne(womenDoc);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = womenDAO;
