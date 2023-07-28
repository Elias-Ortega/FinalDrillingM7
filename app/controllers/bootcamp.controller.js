import { request, response } from 'express';
import { Bootcamp } from '../models/bootcamp.model.js';
import { UserBootcamp } from '../models/userBootcamp.model.js';

const findAll = (req = request, res = response) => {
    res.json('FindAll');
}


const findById = (req = request, res = response) => {
    res.json('Find By Id');
}

const createBootcamp = async (req = request, res = response) => {
    try {
        let { title, cue, description } = req.body;
        let bootcamp = await Bootcamp.create({
            title,
            cue,
            description,
        });
        console.log("bootcamp creado: ", bootcamp);

        res.status(201).json({ code: 201, message: "Bootcamp creado con éxito", bootcamp });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error al crear el bootcamp",
        });
    }

    
}





export {
    findAll,
    findById,
    createBootcamp
   

}