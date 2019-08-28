const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.post('/',(req,res,next)=>{

});
router.get('/contactame',(req,res,next)=>{

});
router.post('/contactame',(req,res,next)=>{
});
router.get('/biografia',(req,res,next)=>{
});

module.exports=router;
