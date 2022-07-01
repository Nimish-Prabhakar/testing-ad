const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectId;

let ips;

class ipsDAO {
  static async injectDB(conn) {
    if (ips) {
      return;
    }
    try {
      ips = await conn.db(process.env.IP_TABLE).collection('IP');
    } catch (e) {
      console.log('error connecting to collections ip');
    }
  }

  static async addIp(ip, country, state, date) {
    try {
      const ipDoc = {
        ip: ip,
        country: country,
        state: state,
        date: date,
      };

      return await ips.insertOne(ipDoc);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = ipsDAO;
