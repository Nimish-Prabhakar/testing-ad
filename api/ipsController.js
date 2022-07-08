const ipsDAO = require('../dao/ipsDAO');
const womenDAO = require('../dao/womenClickDAO');
const dealDAO = require('../dao/dealClickDAO');

class ipsController {
  static async postIp(req, res, next) {
    try {
      const ip = req.body.ip;
      const country = req.body.country;
      const state = req.body.state;

      const date = new Date();

      const ipsResponse = await ipsDAO.addIp(ip, country, state, date);

      res.json({ status: 'success' });
    } catch (err) {
      console.log(err);
    }
  }

  static async womenClick(req, res, next) {
    try {
      const clicked = req.body.clicked;

      const ipsResponse = await womenDAO.womenPageClicked(clicked);

      res.json({ status: 'success of women page click' });
    } catch (err) {
      console.log(err);
    }
  }

  static async dealClick(req, res, next) {
    try {
      const clicked = req.body.clicked;

      const ipsResponse = await dealDAO.dealPageClicked(clicked);

      res.json({ status: 'success of deal page click' });
    } catch (err) {
      console.log(err);
    }
  }

  static async getHeaders(req, res, next) {
    var host = req.get('host');
    var origin = req.get('origin');
    console.log('host', host);
    console.log('origin', origin);
    if (origin === undefined) {
      res.send('hello there');
    } else {
      res.send('hello there', origin);
    }
  }
}

module.exports = ipsController;
