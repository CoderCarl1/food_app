const Lasagne = require('../models/Lasagne')

const index = async (req, res) => {
    const lasagnes = await Lasagne.find()
    
    res.send(lasagnes)
}

const create = async (req, res) => {
    const { name, location, price } = req.body
    const newLasagne = new Lasagne({
        name,
        location,
        price
    })
    const savedLasagne = await newLasagne.save()

    res.send(savedLasagne)

}

module.exports = {
    index, 
    create
}