const Stock = require('../../models/stock')


module.exports = {
    homePage,
    show,
    jsonstocks,
    jsonstock
}

// jsonstocks jsonstock
// viewControllers

function jsonstock (_, res) {
    res.json(res.locals.data.stock)
}

function jsonstocks (_, res) {
    res.json(res.locals.data.stocks)
}

/****** R - Read *****/

async function indexComplete(_, res ,next) {
    try {
        const stocks = await stock.find({ completed: true })
        res.locals.data.stocks = stocks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function homePage(_ ,res,next) {
    try {
        const stocks = await stock.find({ completed: false })
        res.locals.data.stocks = stocks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


async function show(req ,res,next) {
    try {
        const stock = await stock.findById(req.params.id)
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}