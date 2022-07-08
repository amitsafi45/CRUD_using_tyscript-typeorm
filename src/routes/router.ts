import express,{Router} from 'express'
import Controller from '../controller/controller'
const router =express.Router()
router.post('/add',Controller.insert)
router.get('/show',Controller.show)
router.post('/update',Controller.update)
router.delete('/delete',Controller.delete)
router .get('/find',Controller.find)
export default router