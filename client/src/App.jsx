import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import { Link } from 'react-router-dom';
function App() {
    const[item,setitem]=useState([])
    useEffect(()=>{
      const fetchData =async()=>{
        try{
         const response=  await axios.get("http://localhost:8000/item");
         setitem(response.data)
        }catch(error){
          console.log("Error fetching data",error)
        }
    };fetchData()
},[]);

const deleteItem = async(itemId) =>{
  await axios.delete(`http://localhost:8000/item/delete/${itemId}`)
  .then((response)=>{
     console.log(response);
     setitem((prevUser)=>prevUser.filter((item)=>item._id!==itemId))
  })
};


  return (
    <>
    <div className='userTable'>
    <Link to="/addtodolist" type="button" class="btn btn-outline-primary"><i class="fa-solid fa-plus"></i></Link>
    {item.length===0 ?(
      <div className='noData'>
        <h3>List is empty</h3>
        <p>Please click on + button to add to do list</p>
        </div>
    ) :(<table className='table  table-bordered'>
      <thead>
        <tr>
            <th scope="col">S.no</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Done</th>
        </tr>
      </thead>
      <tbody>
      {item.map((items,index)=>{
          return(
        <tr>
          <td>{index+1}</td>
          <td>{items.name}</td>
          <td>{items.remainder}</td>
          <td className='actionButtons'><button onClick={()=>deleteItem(items._id)} type="button" class="btn btn-danger"><i class="fa-solid fa-check"></i></button></td>
        </tr> 
    )
        })}
        
      </tbody>
    </table>)}
    </div>
  </>
  )
}

export default App
