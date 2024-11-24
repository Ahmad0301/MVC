const express = require('express')
const router = express.Router()
const controller = require('../Controller/BookController')
router.post('/newbook', controller.NewBook)
router.get('/allbooks', controller.GetAllBooks)
router.get('/book/:id', controller.GetBooksById)
router.put('/updste/:id',controller.UpdateBooks)
router.delete('/delet/:id', controller.DeletBook)

module.exports = router
