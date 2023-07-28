import { Router } from "express";
import { createBootcamp,  findAll, findById  } from "../controllers/bootcamp.controller.js";

const routerBootcamps = Router();

routerBootcamps.get('/', findAll);

routerBootcamps.get('/:id', findById);

routerBootcamps.post('/', createBootcamp);




export {
    routerBootcamps
}