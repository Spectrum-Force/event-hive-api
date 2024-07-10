import { Router } from "express";
import { createCollege, getCollege, getColleges, updateCollege, deleteCollege } from "../controllers/college_controller.js";


// create a router
const collegeRouter = Router();

collegeRouter.get("/", getColleges);
collegeRouter.get("/:id", getCollege);
collegeRouter.post("/", createCollege);
collegeRouter.patch("/:id", updateCollege);
collegeRouter.delete("/:id", deleteCollege);

export default collegeRouter;