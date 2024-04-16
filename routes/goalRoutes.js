const express=require('express')
const router=express.Router()
const {getGoals
    ,postGoal
    ,putGoal
     ,deleteGoal
}= require('../controllers/goalcontrollers')

const {protect}=require ('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,postGoal)
router.route('/:id').put(protect,putGoal).delete(protect,deleteGoal)


module.exports=router