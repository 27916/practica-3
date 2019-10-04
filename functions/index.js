const functions = require('firebase-functions');
exports.saludo = functions.https.onRequest((request, response) => {
    try {
      if (!request.query.nombre) {
        throw new Error("Falta la nombre");
      } else if (!request.query.pelicula) {
        throw new Error("Falta el pelicula ");
      }else if (!request.query.cancion) {
        throw new Error("Falta el cancion ");
      }
      response.send(`Hola ${request.query.nombre} tu gusta la pelicula ${request.query.pelicula} y la cancion ${request.query.cancion}`);
    } catch (e) {
      response.send(e.message);
    }
   });