const user = require('../Model/user')

const NewUser = async(req,resp)=>
    {
        const data = req.body
        const object = await user.create(data)
        resp.json(object)
    }

