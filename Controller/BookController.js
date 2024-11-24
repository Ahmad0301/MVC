const books = require('../Model/book')

const NewBook =  async (req,resp)=>
{
    const data = req.body
    const object = await books.create(data)
    resp.json(object)
}

const GetAllBooks = async (req,resp)=>
{
    const data = req.params.body
    const object = await books.find() 
    resp.json(object)
}

const GetBooksById = async (req,resp)=>
{
    const id = req.params.id
    const object = await books.findById(id)
    resp.json(object)
}

    const id = req.params.id
    const object = await books.findByIdAndDelete(id)
    resp.json(object)
}

module.exports = 
{
    NewBook,
    GetAllBooks,
    GetBooksById,
    UpdateBooks,
    DeletBook,
 
}