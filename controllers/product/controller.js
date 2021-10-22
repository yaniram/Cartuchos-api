import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

const getAlllProducts = async (callback) => {
	const connection = getDB();
	await connection.collection('productos').find().limit(50).toArray(callback);
};

const createProduct = async (productData, callback) => {
	const connection = getDB();
	await connection.collection('productos').insertOne(productData, callback);
};

const editProduct = async (ObjectID, editedObject, callback) => {
	const prodcutFilter = { _id: new ObjectId(ObjectID) };

	const operation = {
		$set: editedObject,
	};
	const connection = getDB();

	await connection.collection('productos').findOneAndUpdate(
		prodcutFilter,
		operation,
		{
			upsert: true,
			returnOriginal: true,
		},
		callback
	);
};

const deleteProduct = async (deleteObject, callback) => {
	const productFilter = { _id: new ObjectId(deleteObject) };
	const connection = getDB();

	await connection.collection('productos').deleteOne(productFilter, callback)
};

export { getAlllProducts, createProduct, editProduct, deleteProduct };
