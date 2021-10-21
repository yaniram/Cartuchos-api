import Express from 'express';
import {
	createProduct,
	deleteProduct,
	editProduct,
	getAlllProducts,
} from '../../controllers/product/controller.js';

const productRoutes = Express.Router();

const genericProductCallback = (res) => (err, result) => {
	if (err) {
		console.log(`Hubo un error en la consulta ${err}`);
		res.status(500).send('Opps an error ocurred while getting data');
	} else {
		res.json(result);
	}
};

productRoutes.route('/productos').get((req, res) => {
	getAlllProducts(genericProductCallback(res));
});

productRoutes.route('/productos').post((req, res) => {
	createProduct(req.body, genericProductCallback(res));
});

productRoutes.route('/productos/:id').patch((req, res) => {
	editProduct(req.params.id, req.body, genericProductCallback(res));
});

productRoutes.route('/productos/:id').delete((req, res) => {
    deleteProduct(req.params.id, genericProductCallback(res))
});

export default productRoutes;
