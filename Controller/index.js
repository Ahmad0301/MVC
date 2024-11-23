const user = require('../Model/user')

const NewUser = async(req,resp)=>
    {
        const data = req.body
        const object = await user.create(data)
        resp.json(object)
    }

const GetAllUsers = async(req,resp)=>
{
    const data = req.params.body
    const object = await user.find()
    resp.json({"message":"these are all Object",object})

}

const GetWithId = async(req,resp)=>
{
    const data = req.params.id
    const object = await user.findById(data)
    resp.json({"message":"Object with id",object})
}
