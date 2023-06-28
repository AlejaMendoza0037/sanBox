
//objeto de la biblioteca expres se crea el objeto
import express,{Application, Request, Response} from 'express'

class App{
    //atributo

    public app:any
    private server: any// prender y apagar el servidor que se ejecuta

    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.routes()  //definimos rutas, definir puntos de entrada al proyecto      
    }

    private routes():void{// solo se puede acceder desde esta clase 
        this.app.get(
            "/",//url
            (req:Request, res:Response)=>{
                res.send("bienvenidos a TypeScript")//send enviar
            }
        )
    }

    public star():void{
        this.server=this.app.listen(
            3000,
            ()=>{console.log("El servidor esta escuchando en el puerto 3000")}

        )

        }

    public  close():void{ //cerrar el servidor
        this.server.close()


    }    
}
export default App