import App from "./Router"
import swaggerUI from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"


//crear un objeto de la clase app

const program=new App()

program.star()

