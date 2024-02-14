const express = require('express')
const router = express.Router()
const stockCtrl = require('../../controllers/api/stocks')

// Homepage
router.get('/', stockCtrl.indexNotComplete, stockCtrl.jsonstocks)
// Index complete
router.get('/completed', stockCtrl.indexComplete, stockCtrl.jsonstocks)
// Show
router.get('/stocks/:symbol', stockCtrl.show, stockCtrl.jsonstock)

module.exports = router