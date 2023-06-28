//1. importar la biblioteca de trabajo
import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions={//optiones de comfiguracion de swagger
    
    definition:{//llave de definicion
        openapi:"3.0.0",
        info:{
            title:"API de la IPS ",
            version:"1.0.0",
            description:" En esta Api tenemos la funcionalidad que nos soporta la operacion de la IPS"

        },
        servers:[//donde se encuantran los servidores donde se encuentra la docuemntacion de la api
            {
                url:"http://localhost:3000",
                description:"Servidor local de documentacion"

            }

         ]


    },
    apis:[//desde donde voy a tomar la imformacion donde va a estar swagger
        "src/index.ts ", "./swagger/*.swagger.ts"

   ]

}

//especificaciones
export const swaggerSpec = swaggerJSDoc(swaggerOptions)//documentao de especificaciones de swagger


