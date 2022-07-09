import express ,{Request,Response} from 'express'
import dataSource from './src/config/ormconfig'
import router from './src/routes/router'
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}));
app.use('/api',router)
app.use(express.json())
app.listen(3000,async()=>{
    await dataSource.initialize()
        console.log('listening')
})