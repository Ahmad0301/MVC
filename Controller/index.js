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

const UpdateUsers = async (req,resp)=>
{
    const id= req.params.id
    const data = req.body
    const object = await user.findByIdAndUpdate(id,data,{new:true})
    resp.json ({"message":"objet updated",object})
    
}

const DeletUser = async(req,resp)=>
{
    const id = req.params.id
    const object = await user.findByIdAndDelete(id)
    resp.json({"message":"Object deleted",object})
 
}

const borrow = async (req,resp)=>
    {
        const userid = req.params.id;
        const bookid = req.params.bookid

        try
        {
            const object = await user.findById(userid)

            if(!object)
            {
                return resp.status(400).json("user is not found")
            }
            if(object.BorrowedBook.length === 3)
            {
                return resp.status(400).json("user cannot borrowed more than 3 books")
            }
            if(object.BorrowedBook.includes)
            {
                return resp.status(400).json("user already borrowed book")
            }

            object.BorrowedBook.push(bookid)
            await object.save()

            resp.status(200).json("bokk borrowed sucessfully")

        }
        catch(error)
        {
            resp.status(500).json(error,"internal server error")
        }
    }

    const returnBook = async (req, resp) => {
        const userId = req.params.id;
        const bookId = req.params.bookId;

        console.log(userId, "userid", bookId, "bookId");
      
        try {
          const object = await user.findById(userId);
      
          if (!object) {
            res.status(400).json("user not found");
          }
      
          if (object.BorrowedBook.length === 0) {
            resp.status(400).json("user has not borrowed any book");
          }
      
          
          await object.save();
          resp.status(200).json("Book removed successfully");
        } catch (error) {
          resp.status(500).json(error, "can not return book");
        }
      };
      
module.exports =
{
    NewUser,
    GetAllUsers,
    GetWithId,
    UpdateUsers,
    DeletUser
 
}