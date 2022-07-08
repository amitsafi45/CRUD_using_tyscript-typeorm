import express ,{Request,Response} from 'express'
import connected from './src/config/ormconfig'
import router from './src/routes/router'
const app=express()
app.use('/api',router)
app.use(express.json())
app.get('/home',(req:Request,res:Response)=>{
    res.send('wjfiwrufgurgfuyr')
})
app.listen(3000,():void=>{
    connected()
    console.log('listening')
})