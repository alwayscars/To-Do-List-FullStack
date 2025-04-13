import React, { useState } from "react";
import "./Add.css";
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
const Addtodolist=()=>{
     const items={
        name:"",
        remainder:""
     };
     const [item,setitem] = useState(items);
     const navigate = useNavigate();

     const inputHandler= (e) =>{
          const {name, value}= e.target
          console.log(name,value)
          setitem({...item,[name]:value})
          
     };
     const submitForm=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/newitem",item)
        .then((response)=>{
            console.log("User created successfully",response);
            navigate("/");
        })
        .catch((error)=>{                     
            console.log(error);
        })
     }

    return(
        <div className="addUser" onSubmit={submitForm}>
            <Link to="/" type="button" class="btn btn-secondary">Back</Link>
           <h3>Add new data to do list</h3>
           <form className="addUserForm">
            <div className="inputGroup">
                <label htmlFor="name">Category:</label>
                <input type="text" id="name" 
                onChange={inputHandler}
                name="name" autoComplete="off" placeHolder="Enter category"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="remainder">Remainder:</label>
                <input type="text" id="remainder" name="remainder" onChange={inputHandler} autoComplete="off" placeHolder="What do you want to do"></input>
            </div>
            <div className="inputGroup">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
           </form>
        </div>
    )
}
export default Addtodolist