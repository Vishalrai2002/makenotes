const express =require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    obj={
        a:'thio',
        number:23,
    }
    res.json(obj)

})

module.exports=router