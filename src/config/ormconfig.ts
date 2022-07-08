//import Connection from 'mysql2/typings/mysql/lib/Connection'
import {createConnection} from 'typeorm'
import User from '../Entity/User'
export default async()=>{
    //const user=new User()
    try{
   const connected= await createConnection({
    name:"firstconnection",
    type: "mysql", 
    host: "localhost", 
    port: 3306, 
    username: "root", 
    password: "amitsafi", 
    database: "user_accounts",
    synchronize: true,
    logging:true,
    entities:[User]
    })
    }
    catch(error){
        console.log(error)
    } 

    

}