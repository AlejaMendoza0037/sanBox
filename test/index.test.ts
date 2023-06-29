//1. importar supertest las bibliotecas
import  request  from 'supertest'
import App from '../src/App'


//resglas de prueba
//agrupacion elementos de prueba
describe(
    'GET /',
    ( )=>{

        let app:App //antes 
        beforeAll(
            ()=>{
                app=new App()
                app.star()


            }
        )
            //despues que se termino la prueba
        afterAll(
            ()=>{
                app.close()

            }
           
        )
        //declarar la prueba
        //descripcion de la pruieba
        test (            
            'Debe devolver un mensaje',
            async ()=>{
                //peticion 
                 const res=await request(app.app).get('/')
                 expect(res.statusCode).toEqual(200)
                 expect(res.text).toEqual('Bienvenidos a la IPS')


            }

        )


    }



) 