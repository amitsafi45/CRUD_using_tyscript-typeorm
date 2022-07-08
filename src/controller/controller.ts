import {Request,Response} from 'express'
import User from '../Entity/User'
class Controller{
    static insert=async(req:Request,res:Response)=>{
      try{
        // const data={
        //     name:req.body.name,
        //     age:req.body.age,
        //     Address:req.body.Address
        // }
        console.log(req.body)
       const data= await User.create(req.body)
        const result=await User.save(data)
        res.json({
            message:"data is inserted"
        })
      }
      catch(error){
        res.json({
            message:"data is not inserted"
        })
      }
        //res.send('insert')
    }
    static show=(req:Request,res:Response)=>{
        res.send('show')
    }
    static update=(req:Request,res:Response)=>{
        res.send('update')
    }
    static find=(req:Request,res:Response)=>{
        res.send('find')
    }
    static delete=(req:Request,res:Response)=>{
        res.send('delete')
    }
}
export default Controller