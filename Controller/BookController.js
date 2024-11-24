const books = require('../Model/book')

const NewBook =  async (req,resp)=>
{
    const data = req.body
    const object = await books.create(data)
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