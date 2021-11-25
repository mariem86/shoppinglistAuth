
const express=require("express")

const router=express.Router()
const Item=require('../models/Item')
const User=require("../models/User")
const isAuthorizerole=require('../middlewares/isAuthorizerole')
const isAuth=require('../middlewares/isAuth')

// test
//localhost:500/api/todo/test
//@ path
//test route
//public/private


// add todo
router.post('/addItem',isAuth,isAuthorizerole(['client']),(req,res)=>{
    const user =req.user.id
    const{name}=req.body
    const newItem= new Item({user,
        name
    })
    newItem.save()
    .then(items=>res.send(items))
    .catch(err=>console.log(err))
})
    //get items
    router.get("/all",isAuth,isAuthorizerole(['client','admin']),(req,res)=>{
        Item.find()
    .then(items=>res.send(items))
    .catch(err=>console.log(err))
    })
// delete items
router.delete("/deleteItem/:_id",isAuth,isAuthorizerole(['client']),(req,res)=>{
    const {_id}=req.params
    
    Item.findOneAndDelete({user:req.user.id,_id})
    .then(items=>res.send(items))
    .catch(err=>console.log(err))

})




module.exports=router