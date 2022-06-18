const {Router } = require('express');
const { reject } = require('underscore');
const router = Router();
const _ = require('underscore');
const datos = require('../facturas');

console.log(datos);

router.get('/', (req, res) => {

    res.json(datos);
});

router.get('/:ci',  (req, res) => {
    const {ci} = req.params;
    _.each(datos, (dato, i) => {
        res.json(datos.filter(dato => dato.client.ci == ci));
        }
    )
});

router.post('/', (req, res) => {
    {
        const id = datos.length + 1;
        const newDato = {id, ...req.body};
        datos.push(newDato);
        res.json(datos);
    }
});

module.exports = router;

/*
const clientid = (ci) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const clientfiltrados = datos.filter(dato => dato.client.ci == ci);

            if (clientFiltrados.length>0)
            {
                resolve(clientFiltrados)
            }
            else
            {
                reject('No se encontró a nadie con esa identificación')
            }
        }, 1000);
    })
}
clientId(22).then(ci=>{
console.log(ci)
}).catch( console.log )

    */
