import { ObjectId } from 'mongodb';
import { getDB } from '../../db/db.js';

const queryAllCartridges = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('cartucho').find({}).limit(50).toArray(callback);
};

const crearCartucho = async (datosCartucho, callback) => {
  if (
    Object.keys(datosCartucho).includes('name') &&
    Object.keys(datosCartucho).includes('brand') &&
    Object.keys(datosCartucho).includes('ink')
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear vehículo en la BD

    await baseDeDatos.collection('cartucho').insertOne(datosCartucho, callback);
  } else {
    return 'error';
  }
};

const consultarCartucho = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('cartucho').findOne({ _id: new ObjectId(id) }, callback);
};

const editarCartucho = async (id, edicion, callback) => {
  const filtroCartucho = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('cartucho')
    .findOneAndUpdate(filtroCartucho, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarCartucho = async (id, callback) => {
  const filtroCartucho = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('cartucho').deleteOne(filtroCartucho, callback);
};

export { queryAllCartridges, crearCartucho, consultarCartucho, editarCartucho, eliminarCartucho };

/*import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

const getAllCartucho = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('cartuchos').find().limit(50).toArray(callback);
};

const createCartucho = async (datosCartuchos, callback) => {
  const baseDeDatos = getDB();
  console.log('llaves: ', Object.keys(datosCartuchos));
  if (
    Object.keys(datosCartuchos).includes('name') &&
    Object.keys(datosCartuchos).includes('brand') &&
    Object.keys(datosCartuchos).includes('ink')
  ) {
    await baseDeDatos.collection('cartuchos').insertOne(datosVehiculo, callback);
  } else {
    return { err: 'conditions not met', result: '' };
  }
};

const editCartucho = async (cartuchoId, data, callback) => {
  const filtroCartuchos = { _id: new ObjectId(cartuchoId) };
  const operacion = {
    $set: data,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('cartuchos')
    .findOneAndUpdate(filtroCartuchos, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteCartucho = async (cartuchoId, callback) => {
  const filtroCartuchos = { _id: new ObjectId(cartuchoId) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('cartuchos').deleteOne(filtroCartuchos, callback);
};

export { getAllCartucho, createCartucho, editCartucho, deleteCartucho };*/