import Express from 'express';
import {
  queryAllCartridges,
  crearCartucho,
  editarCartucho,
  eliminarCartucho,
  consultarCartucho,
} from '../../controllers/cartridge/controller.js';

const rutasCartucho = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    console.log('error', err);
    res.status(500).json({ error: err });
  } else {
    res.json(result);
  }
};

rutasCartucho.route('/cartuchos').get((req, res) => {
  console.log('alguien hizo get en la ruta /cartuchos');
  queryAllCartridges(genericCallback(res));
});

rutasCartucho.route('/cartuchos').post((req, res) => {
  crearCartucho(req.body, genericCallback(res));
});

rutasCartucho.route('/cartuchos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /cartuchos');
  consultarCartucho(req.params.id, genericCallback(res));
});

rutasCartucho.route('/cartuchos/:id').patch((req, res) => {
  console.log('alguien hizo patch en la ruta /cartuchos');
  editarCartucho(req.params.id, req.body, genericCallback(res));
});

rutasCartucho.route('/cartuchos/:id').delete((req, res) => {
  eliminarCartucho(req.params.id, genericCallback(res));
});

export default rutasCartucho;

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