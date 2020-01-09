const Lasagne = require('../models/Lasagne')

const index = (req, res) => {
    res.send('api working')
}

const create = (req, res) => {
    res.send('create action')
}

module.exports = {
    index, 
    create
}