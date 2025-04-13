import express from "express"
import {create, getAllUsers} from "../controller/userController.js"

const route =express.Router();

route.post("/newitem",create)
route.get("/item",getAllUsers)
export default route;