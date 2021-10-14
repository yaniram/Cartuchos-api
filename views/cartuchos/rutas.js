import Express from 'express';
import {
  queryAllCartuchos,
  crearCartuchos,
  editarCartuchos,
  eliminarCartuchos,
  consultarCartuchos,
} from '../../controllers/cartridge/controller.js';

const rutasCartuchos = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    console.log('error', err);
    res.status(500).json({ error: err });
  } else {
    res.json(result);
  }
};

rutasCartuchos.route('/cartuchos').get((req, res) => {
  console.log('alguien hizo get en la ruta /cartuchos');
  queryAllCartuchos(genericCallback(res));
});

rutasCartuchos.route('/cartuchos').post((req, res) => {
  crearCartuchos(req.body, genercartuchosicCallback(res));
});

rutasCartuchos.route('/cartuchos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /cartuchos');
  consultarCartuchos(req.params.id, genericCallback(res));
});

rutasCartuchos.route('/cartuchos/:id').patch((req, res) => {
  editarCartuchos(req.params.id, req.body, genericCallback(res));
});

rutasCartuchos.route('/cartuchos/:id').delete((req, res) => {
  eliminarCartuchos(req.params.id, genericCallback(res));
});

export default rutasCartuchos;

/*import Express from 'express';
import { getDB } from '../../db/db';
import {
  createCartuchos,
  deleteCartuchos,
  editCartuchos,
  getAllCartuchos,
} from '../../controllers/cartridge/cartridgeControllers.js';

const rutasCartuchos = Express.Router();*/

/*const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.json(result);
  }
};*/

/*rutasCartuchos.route('/cartuchos').get((req, res) => {
  getAllCartuchos(genericCallback(res));
});

rutasCartuchos.route('/cartuchos').post((req, res) => { //crea registros
  createCartuchos(req.body, genericCallback(res));
});

rutasCartuchos.route('/cartuchos/:id').patch((req, res) => { //actualiza un solo registro
  editCartuchos(req.params.id, req.body, genericCallback(res));
});

rutasCartuchos.route('/cartuchos/:id').delete((req, res) => {
  deleteCartuchos(req.params.id, genericCallback(res));
});

export default rutasCartuchos;*/