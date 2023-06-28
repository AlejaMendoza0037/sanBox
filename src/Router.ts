
//objeto de la biblioteca expres se crea el objeto
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'

/**
 * Clase principal de la API: define las turas de la API
 * 
 * @autor Alejandra Mendoza
 * @description rutas y documentacion
 */

class App{
	//atributo

	public app:Application
	private server:any// prender y apagar el servidor que se ejecuta
    
	constructor(){

		/**
         * Expres es la biblioteca para definir API  en el 
         * ecosistema express */
   
		this.app=express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs',
           
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
            
            
		)

		this.routes()  //definimos rutas, definir puntos de entrada al proyecto      
	}

	private routes():void{// solo se puede acceder desde esta clase 
		this.app.get(
			'/',//url
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a la IPS")//send enviar')
			}
		)

		this.app.post(
			'/paciente',//url
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a TypeScript')//send enviar
			}
		)
	}

	public star():void{
		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor esta escuchando en el puerto 3000')}

		)

	}

	public  close():void{ //cerrar el servidor
		this.server.close()


	}    
}
export default App