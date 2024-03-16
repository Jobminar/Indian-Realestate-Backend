import express from 'express'
import residentialController from './controller/residentialController.js'



const router=express.Router()

router.post("/post",residentialController.createResident)
router.get("/get",residentialController.getAllResident)

export default router