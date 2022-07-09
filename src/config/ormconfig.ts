//import Connection from 'mysql2/typings/mysql/lib/Connection'
import { DataSource} from 'typeorm'
import User from '../Entity/User'
//export default async()=>{
    //const user=new User()
    const dataSource= new DataSource({
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
    // await dataSource.initialize()
        
    
export default dataSource
    

//}