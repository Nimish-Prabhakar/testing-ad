const express = require('express');
const ipsController = require('./ipsController');

const router = express.Router();

router.route('/ips').post(ipsController.postIp);
router.route('/women').post(ipsController.womenClick);
router.route('/deal').post(ipsController.dealClick);
router.route('/headers').get(ipsController.getHeaders);

module.exports = router;
