import item from "../model/userModel.js";
export const create= async(req,res)=>{
    try{
          const newitem = new item(req.body);
          const name=newitem.name;

          const userExist = await item.findOne({name})
          if(userExist){
                 return res.status(400).json({message: "The remainder already exists"});
          }
          const savedData= await newitem.save();
          res.status(200).json(savedData)

    }
    catch(error){
        res.status(500).json({errorMessage:error.message})
    }
};

export const getAllUsers=async(req,res)=>{
    try{
          const userData= await item.find();
          if(!userData || userData.length === 0 ){
              return res.status(404).json({message: "No data found"});
          }
         res.status(200).json(userData);
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
    }
};