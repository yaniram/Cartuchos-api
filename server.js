import Express from "express"; //hacer un nuevo import
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import jwt from "express-jwt";
import jwks from "jwks-rsa";
import rutasCartucho from './views/cartuchos/rutas.js';
import rutasUsuario from './views/usuarios/rutas.js';
import rutasVenta from './views/ventas/rutas.js';


dotenv.config({path:'./.env'});

const app = Express();

app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://misiontic-todoink.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://api-autenticacion-todoink-misiontic/',
issuer: 'https://misiontic-todoink.us.auth0.com/',
algorithms: ['RS256']
});

app.use(jwtCheck);
app.use(rutasCartucho);
app.use(rutasUsuario);
app.use(rutasVenta);

const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
};

conectarBD(main);

/*app.use(rutasCartuchos);
app.use(rutasUsuario);
app.use(rutasVenta);*/

/*app.get('/cartuchos',(req,res)=>{
  console.log('alguien hizo get en la ruta /cartuchos');
  res.send("Hola Mundo Ruta get en express");
});

app.post('/cartuchos/nuevo', (req, res) => {
  //implementar codigo para crear cartuchos en la base de datos
  console.log(req);
  const datosCartuchos = req.body;
  console.log("llaves: ", Object.keys(datosCartuchos));
  try {
    if (
      Object.keys(datosCartuchos).includes('name') &&
      Object.keys(datosCartuchos).includes('brand') &&
      Object.keys(datosCartuchos).includes('ink')
    ){
      conexion.colletion('cartuchos').insertOne(datosCartuchos,()=>{


      })
      res.sendStatus(200);

    } else { 
      res.sendStatus(500);
    }
  } catch {
    res.sendStatus(500);
  }

  });

app.patch('/cartuchos/editar',(req,res)=>{
  const edicion = req.body;
  const filtroCartuchos = {_id:new ObjectId(edicion.id)}
  baseDeDatos.colletion('cartuchos').findOneAndUpdate(filtroCartuchos,edicion,{upsert:true, returnOriginal: true}, (err,result)=>{
    if(err){
      console.error("error acualizando el cartuchos ", err);
      res.sendStatus(500);
    } else{
      console.log("actualizado con éxito");
      res.sendStatus (200);
    }
    });
});


const main = ()=>{
  client.connect((err,db) => {
    if (err) {
      console.error('Error conectando a la base de datos');
    }
    conexion = db.db('cartuchos'); // esta variable la vamos a usar para la conexion con la base de datos
    console.log('conexion exitosa');
    return app.listen(process.env.PORT, () => { //esto me permite prender el servidor
          console.log(`escuchando puerto 5000`);
    });
  });
};

    main();*/