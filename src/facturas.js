const facturas =
    [
        {
            id: 1,
            fecha: '11/11/2022',
            empleado:
            {
                nombre: "William",
                ci: 1311111111,
                direccion:
                {
                    descripcion: "Montecristi",
                    latitud: 3333,
                    longitud: 44444
                },
                telefono: 111111
            },
            client:
            {
                nombre: "Luis",
                ci: 1310000000,
                direccion:
                {
                    descripcion: "Manta",
                    latitud: 1111,
                    longitud: 22222
                },
                telefono: 222222
            },
            productos:
            {
                nombre: "Cuaderno",
                cantidad: 2,
                precio: 200,
                subtotal: 200,
                iva: "NO"
            },
            formaspago:
            {
                forma: "efectivo",
                valor: 200
            },
            total: 100
        },
        {
            
            id: 2,
            fecha: '11/11/2022',
            empleado:
            {
                nombre: "Jose",
                ci: 1311111111,
                direccion:
                {
                    descripcion: "Montecristi",
                    latitud: 3333,
                    longitud: 44444
                },
                telefono: 111111
            },
            client:
            {
                nombre: "Sara",
                ci: 1311111111,
                direccion:
                {
                    descripcion: "Manta",
                    latitud: 1111,
                    longitud: 22222
                },
                telefono: 222222
            },
            productos:
            {
                nombre: "Cuaderno",
                cantidad: 2,
                precio: 200,
                subtotal: 200,
                iva: "NO"
            },
            formaspago:
            {
                forma: "efectivo",
                valor: 200
            },
            total: 100
        },
        {
            
            id: 3,
            fecha: '11/11/2022',
            empleado:
            {
                nombre: "Diego",
                ci: 1311111111,
                direccion:
                {
                    descripcion: "Montecristi",
                    latitud: 3333,
                    longitud: 44444
                },
                telefono: 111111
            },
            client:
            {
                nombre: "Luis",
                ci: 1310000000,
                direccion:
                {
                    descripcion: "Manta",
                    latitud: 1111,
                    longitud: 22222
                },
                telefono: 222222
            },
            productos:
            {
                nombre: "Cuaderno",
                cantidad: 2,
                precio: 200,
                subtotal: 200,
                iva: "NO"
            },
            formaspago:
            {
                forma: "efectivo",
                valor: 200
            },
            total: 100
        }
    ]
module.exports = facturas;