import express ,{Request,Response} from 'express'
import dataSource from './src/config/ormconfig'
import router from './src/routes/router'
import swaggerjsdoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app=express()
const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"node js api project ",
            version:'1.0.0'
            

        },
        servers:[
            {
               url: 'http://localhost:3000/'
            }
        ]
    },
    apis:['./src/routes/router.ts']
}
const swaggerspec=swaggerjsdoc(options)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerspec))

app.use(express.json())
app.use(express.urlencoded({ extended:true}));
app.use('/api',router)
app.use(express.json())
app.listen(3000,async()=>{
    await dataSource.initialize()
        console.log('listening')
})