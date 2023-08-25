import express from "express";
import { 
  addEmp,
  getAllEmps,
  updateEmp,
  deleteEmp 
} from "../controller/controller.js";

const employees=[]
const router=express.Router()

router.post('/addemp', addEmp);

  router.get('/getemp', getAllEmps)

  router.put('/emp/:id', updateEmp)

  router.delete('/emp/:id', deleteEmp)


  export default router