import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();


router.get('/equipo/:id', asyncHandler(async (req, res) => {
    const jugadores = await Controller.get({ equipo_cod: req.params.id });
    res.send(jugadores);
}));


export default (app, entityUrl) => app.use(entityUrl, router);
