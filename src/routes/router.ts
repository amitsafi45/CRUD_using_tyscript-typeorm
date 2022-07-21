import {Request,Response} from 'express'
import express from 'express'
import Controller from '../controller/controller'
const router =express.Router()

/**
 * @swagger
 * tags:
 *  name: CRUD 
 */
/**
 * @swagger
 * /api/add:
 *      post:
 *         summary: this is api for CRUD
 *         tags: [CRUD]
 *         requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                         -name
 *                         -age
 *                         -Address
 *                     properties:
 *                          name:
 *                             type: string
 *                          age:
 *                             type: number
 *                          Address:
 *                             type: string
 *         responses:
 *              200:
 *               description: okay data store
 *                
 *          
 */

router.post('/add',Controller.add)
/**
 * @swagger
 * /api/show:
 *      get:
 *        summary: fetch all the data from the user table
 *        tags: [CRUD]
 *        responses:
 *          200:
 *            description: all data are fecthed
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                        types: object
 *                        properties:
 *                          id:
 *                            type: number
 *                          name:
 *                            type: string
 *                          age:
 *                            type: number
 *                          address:
 *                            type: string
 *          500:
 *            description: internal server error
 *          
 * 
 *        
 */
router.get('/show',Controller.show)
/**
 * @swagger
 * /api/update/{id}:
 *      patch:
 *         summary: this is api for CRUD
 *         tags: [CRUD]
 *         parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              decription: data update by id
 *              schema:
 *              type: integer
 * 
 *         requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                         -name
 *                         -age
 *                         -Address
 *                     properties:
 *                          name:
 *                             type: string
 *                          age:
 *                             type: number
 *                          Address:
 *                             type: string
 *         responses:
 *              200:
 *               description: okay data store
 *                
 *          
 */

router.patch('/update/:id',Controller.update)
/**
 * @swagger
 * /api/delete/{id}:
 *      delete:
 *         summary: deleting data from table by id
 *         tags: [CRUD]
 *         parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              decription: data delete by id
 *              schema:
 *              type: integer
 * 
 *         
 *         responses:
 *              200:
 *               description: okay data delete
 *                
 *          
 */

router.delete('/delete/:id',Controller.delete)
/**
 * @swagger
 * /api/find/{id}:
 *      get:
 *        summary: fetch all the data from the user table by id
 *        tags: [CRUD]
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            decription: data from table by id
 *            schema:
 *              type: integer
 *        responses:
 *          200:
 *            description: all data are fecthed
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                        types: object
 *                        properties:
 *                          id:
 *                            type: number
 *                          name:
 *                            type: string
 *                          age:
 *                            type: number
 *                          address:
 *                            type: string
 *          500:
 *            description: internal server error
 *          
 * 
 *        
 */

router .get('/find/:id',Controller.find)
export default router