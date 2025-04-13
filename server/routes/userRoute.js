import express from "express"
import {create, deleteData, getAllUsers, getUserById, update} from "../controller/userController.js"

const route =express.Router();

route.post("/newitem",create)
route.get("/item",getAllUsers)
route.get("/item/:id",getUserById)
route.put("/item/update/:id",update)
route.delete("/item/delete/:id",deleteData)
export default route;