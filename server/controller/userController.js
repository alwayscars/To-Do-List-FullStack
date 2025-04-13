import item from "../model/userModel.js";
export const create= async(req,res)=>{
    try{
          const newitem = new item(req.body);
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


export const getUserById=async(req,res)=>{
    try{
          const id= req.params.id;
          const userExist = await item.findById(id);
          if(!userExist){
            return res.status(404).json({message: "Data not found"});
        }
        res.status(200).json(userExist);
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
}
};

export const update=async(req,res)=>{
    try{
          const id= req.params.id;
          const userExist = await item.findById(id);
          if(!userExist){
            return res.status(404).json({message: "Data not found"});
          }
        const updatedDtata=await item.findByIdAndUpdate(id, req.body,{
            new:true
        })
        res.status(200).json(updatedDtata);
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
}
};

export const deleteData=async(req,res)=>{
    try{
          const id= req.params.id;
          const userExist = await item.findById(id);
          if(!userExist){
            return res.status(404).json({message: "User data not found"});
          }
        const updatedDtata=await item.findByIdAndDelete(id);
        res.status(200).json({message: "Data deleted"});
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
}
}