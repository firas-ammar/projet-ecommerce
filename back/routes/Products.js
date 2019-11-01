const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// add product To Card
router.post('/', (req, res) => {
    const { image, titre, state, price, quantity,description, categories, sousCategories, disponible, like, rating } = req.body
    // Create a new product from product model
    let newProduct = new Product({
        image, titre, state, price, quantity,description, categories, sousCategories, disponible, like, rating
    })
    newProduct.save() // save newproduct to database
        .then(product => res.json(product)) // test postman
        .catch(err => console.log(err))
})

// get Products
router.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => console.log(err))
})

// delete Products
router.delete('/delete-product/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({msg: 'Product Deleted'}))
        .catch(err => console.log(err))
})

// Edit Products
router.put('/edit-product/:id', (req, res) => {
    const { image, titre, state, price, quantity,description, categories, sousCategories, disponible, like, rating } = req.body

    Product.findByIdAndUpdate(req.params.id, {
        image, titre, state, price, quantity,description, categories, sousCategories, disponible, like, rating
    })
        .then(() => res.json({msg: 'Product Edited'}))
        .catch(err => console.log(err))
})



module.exports = router