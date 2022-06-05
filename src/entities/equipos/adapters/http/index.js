import express from 'express';
import Controller from '../../controller';
import JugadoresController from '../../../jugadores/controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {


    const equipos = await Controller.get();
    console.log(equipos)
    res.send(equipos);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const equipo = await Controller.getById(req.params.id);
    console.log('---------------', id)
    const jugadores = await JugadoresController.get({ equipo_cod: id });
    res.send({ equipo, jugadores });
}));


export default (app, entityUrl) => app.use(entityUrl, router);
