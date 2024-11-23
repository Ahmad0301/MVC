const express = require('express')
const router = express.Router()
const controller = require('../Controller/index')
router.post ('/addUser',controller.NewUser)
router.get ('/getAllUser',controller.GetAllUsers)
router.get ('/userById/:id',controller.GetWithId)
router.put('/updateuser/:id',controller.UpdateUsers)
router.delete('/deleteUser/:id',controller.DeletUser)

module.exports = router
