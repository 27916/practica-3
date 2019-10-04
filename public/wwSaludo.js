  
onmessage = evt => {
    postMessage(`Hola ${evt.data.nombre} tu gusta la pelicula ${evt.data.pelicula}  y la cancion${evt.data.cancion}`);
                  
};